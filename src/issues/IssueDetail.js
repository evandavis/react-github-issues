import React from 'react';

function prettyComment(text) {
  return text.replace(/\r\n/g, '<br />');
}

const IssueDetail = React.createClass({
  propTypes: {
    issue: React.PropTypes.object.isRequired,
    comments: React.PropTypes.array
  },
  render() {
    const {comments, issue} = this.props;

    return (
      <div className="issue-detail-viewer">
        <div className="issue-detail">
          <h1>{issue.title}</h1>
          <span className={`issue-status status-${issue.status}`}>{issue.status}</span>
          <p className="issue-body">{issue.body}</p>
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
              {comment.body.split(/\r\n/).map((text) => {
                return (<p>{text}</p>)
              })}
            </li>
          );
        })}
      </ul>
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

export default IssueDetail;
