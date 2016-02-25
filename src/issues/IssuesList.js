import React from 'react';
import {Link} from 'react-router';
import truncate from 'component-truncate';


const IssuesList = React.createClass({
  propTypes: {
    issues: React.PropTypes.array.isRequired,
    nextPage: React.PropTypes.func.isRequired,
    previousPage: React.PropTypes.func.isRequired
  },
  render() {
    const {issues} = this.props;

    return (
      <div className="issues-viewer">
        <h1>Issues</h1>
        <ul className='issues-list'>
          {issues.map(this.renderIssue)}
        </ul>
        <nav className="pager">
        </nav>
      </div>
    );
  },
  renderIssue(issue) {
    const {user} = issue;

    return (
      <li className='issue' key={issue.id}>
        <h2>
          <Link to={`issues/${issue.number}`}>{issue.title}</Link>
          <ul className='labels'>
            {issue.labels.map(this.renderLabel)}
          </ul>
        </h2>
        
        <p>{truncate(issue.body, 140, '...')}</p>
        
        <div className='reported'>
          <span className='issue-number'>#{issue.number}</span> reported by
          <img src={`${user.avatar_url}&s=32`} alt={user.login} className='avatar' />
          <span className='reporter'>{user.login}</span>
        </div>

      </li>
    );
  },
  renderLabel(label, index) {
    return (
      <li className='label' style={{backgroundColor: `#${label.color}`}} key={index}>
        {label.name}
      </li>
    );
  }
});

export default IssuesList;
