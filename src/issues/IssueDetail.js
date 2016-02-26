import React from 'react';
import BodyText from './BodyText';
import IssueLabel from './IssueLabel';
import UserDisplay from './UserDisplay';

const IssueDetail = React.createClass({
  propTypes: {
    issue: React.PropTypes.object.isRequired,
    comments: React.PropTypes.array
  },
  render() {
    const {comments, issue} = this.props;

    return (
      <div className="issue-detail-viewer">
        <h1>{issue.title}</h1>
        <ul className='labels'>
          {issue.labels && issue.labels.map((label, index) => (<IssueLabel label={label} key={index} />))}
        </ul>
        <div className="issue-detail">
          <UserDisplay className={"issue-detail-reporter"} user={issue.user} />
          <BodyText text={issue.body} />
          <p className="issue-status-message">This issue is <span className={`issue-status status-${issue.state}`}>{issue.state}</span>.</p>
        </div>
        {comments && this.renderComments()}
      </div>
    );
  },
  renderComments() {
    const {comments} = this.props;
    return (
      <ul className='issue-comments'>
        {comments.map((comment) => {
          return (
            <li className='comment' key={comment.id}>
              <BodyText text={comment.body} className={'comment-body'} />
              <UserDisplay className={"commentor"} user={comment.user} />
            </li>
          );
        })}
      </ul>
    );
  }
});

export default IssueDetail;
