import React from 'react';
import IssueDetail from './IssueDetail';

function issueDetailByNumberURL(issueNumber) {
  return `https://api.github.com/repos/rails/rails/issues/${issueNumber}`;
}

const IssueDetailContainer = React.createClass({
  propTypes: {
    params: React.PropTypes.shape({
      issueNumber: React.PropTypes.string.isRequired
    }).isRequired
  },
  getInitialState() {
    return {issue: {user: {}}};
  },
  componentWillMount() {
    const {issueNumber} = this.props.params;
    this.fetchIssueDetail(issueNumber)
      .then((issue) => {
        this.setState({issue});
        return this.fetchIssueComments(issue.comments_url)
      })
      .then((comments) => {
        this.setState({comments});
      })
      .catch(function(ex) {
        console.log('parsing failed', ex)
      });

  },
  fetchIssueDetail(issueNumber) {
    return fetch(issueDetailByNumberURL(issueNumber))
      .then((response) => {
        return response.json();
      });
  },
  fetchIssueComments(commentURL) {
    return fetch(commentURL).then((response) => {
        return response.json();
      });
  },
  render() {
    return (<IssueDetail {...this.state} />)
  }
});

export default IssueDetailContainer;
