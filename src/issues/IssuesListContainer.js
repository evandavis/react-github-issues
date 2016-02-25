import React from 'react';
import IssuesList from './IssuesList';

function issuesByPageURL(page) {
  return `https://api.github.com/repos/rails/rails/issues?per_page=25&page=${page}`
}

const IssuesListContainer = React.createClass({
  getInitialState() {
    return {issues: [], page: 1};
  },
  componentWillMount() {
      this.fetchIssues().then(this.loadIssues)
      .catch(function(ex) {
        console.log('parsing failed', ex)
      });
  },
  fetchIssues() {
    const {page} = this.state;
    return fetch(issuesByPageURL(page))
      .then((response) => {
        return response.json();
      })
  },
  loadIssues(issues) {
    this.setState({issues});
  },
  nextPage() {
    let {page} = this.state;
    page++;

  },
  previousPage() {
    let {page} = this.state;
    page--;
  },
  render() {
    return (
      <IssuesList
        {...this.state}
        nextPage={this.nextPage}
        previousPage={this.previousPage}
      />
    );
  }
});

export default IssuesListContainer;
