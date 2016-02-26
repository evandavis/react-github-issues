import React from 'react';
import IssuesList from './IssuesList';

const INITIAL_URL="https://api.github.com/repos/rails/rails/issues?per_page=25";

const IssuesListContainer = React.createClass({
  propTypes: {},
  getInitialState() {
    return {issues: []};
  },
  componentWillMount() {
      this.fetchIssues(INITIAL_URL)
      .catch(function(ex) {
        console.log('parsing failed', ex)
      });
  },
  fetchIssues(url) {
    return fetch(url)
      .then((response) => {
        let links = {};
        response.headers.get('Link').split(',').forEach((link) => {
          let parts = link.split('; ');
          links[parts[1].replace(/rel=|"/g, '')] = parts[0].replace(/[<>]/g, '');
        });
        this.setState({links});
        return response.json();
      }).then((issues) => {
        this.setState({issues});
      });
  },
  goToPage(pageUrl) {
    this.fetchIssues(pageUrl);
  },
  render() {
    return (
      <IssuesList
        {...this.state}
        goToPage={this.goToPage}
      />
    );
  }
});

export default IssuesListContainer;
