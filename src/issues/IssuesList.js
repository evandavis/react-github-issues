import React from 'react';
import {Link} from 'react-router';
import truncate from 'component-truncate';
import IssueLabel from './IssueLabel';
import UserDisplay from './UserDisplay';

function isEventLikeAClick(e) {
  return e.type === 'click'
         || (e.type === 'keydown'
            && (e.keyCode === 32 || e.keyCode === 13));
}

const IssuesList = React.createClass({
  propTypes: {
    issues: React.PropTypes.array.isRequired,
    links: React.PropTypes.object,
    goToPage: React.PropTypes.func.isRequired
  },
  handleClick(url, event) {
    if (isEventLikeAClick(event)) {
      this.props.goToPage(url);
    }
  },
  render() {
    const {issues, links} = this.props;

    return (
      <div className="issues-viewer">
        <h1>Issues</h1>
        {links && this.renderPager(links)}
        <ul className='issues-list'>
          {issues.map(this.renderIssue)}
        </ul>
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
            {issue.labels.map((label, index) => (<IssueLabel label={label} key={index} />))}
          </ul>
        </h2>
        
        <p>{truncate(issue.body, 140, '...')}</p>
        
        <div className='reported'>
          <span className='issue-number'>#{issue.number}</span> reported by
          <UserDisplay className={"issue-reporter"} user={issue.user} />
        </div>

      </li>
    );
  },
  renderPager(links) {
    const {first, last, next, prev} = links;
    return (<nav className="pager" role="navigation">
      {first && this.renderLink(first, 'First')}
      {prev && ' | '}
      {prev && this.renderLink(prev, 'Previous')}
      {(prev && next) && ' | '}
      {next && this.renderLink(next, 'Next')}
      {next && ' | '}
      {last && this.renderLink(last, 'Last')}
    </nav>);
  },
  renderLink(href, text) {
    return (<a
      tabIndex="0"
      role="button"
      onKeyDown={this.handleClick.bind(null, href)}
      onClick={this.handleClick.bind(null, href)}>
      {text}
    </a>)
  }
});

export default IssuesList;
