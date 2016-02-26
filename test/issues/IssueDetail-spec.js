import React from 'react';
import {createRenderer, renderIntoDocument} from 'react-addons-test-utils';
import BodyText from 'issues/BodyText';
import IssueDetail from 'issues/IssueDetail';
import IssueLabel from 'issues/IssueLabel';
import UserDisplay from 'issues/UserDisplay';

let comments = [{
      body: 'comment text @user',
      id: 'abc123',
      user: {}
    }],
    issue = {
      title: 'A test issue',
      body: 'A description of the issue with @user tagged.',
      labels: [
        {name: 'test'}
      ],
      state: 'open',
      user: {}
    };

describe('IssueDetail', function() {
  let component,
      shallow = createRenderer();

  beforeEach(() => {
    shallow.render(<IssueDetail issue={issue} />);
    component = shallow.getRenderOutput();
  });

  it('renders the title', () => {
    expect(component.props.children[0]).to.eql(<h1>A test issue</h1>);
  });

  it('renders the labels', () => {
    expect(component.props.children[1].props.children).to.eql([<IssueLabel label={issue.labels[0]} key={'0'} />]);
  })

  it('renders the body', () => {
    expect(component.props.children[2]).to.eql(
      <div className="issue-detail">
        <UserDisplay className={"issue-detail-reporter"} user={{}} />
        <BodyText text={'A description of the issue with @user tagged.'} />
        <p className="issue-status-message">This issue is <span className={'issue-status status-open'}>open</span>.</p>
      </div>
    );
  });

  it('renders comments if they exist', () => {
    // test that they don't exist when not provided
    expect(component.props.children[3]).to.be.undefined;
    // now provide them
    shallow.render(<IssueDetail issue={issue} comments={comments}/>);
    component = shallow.getRenderOutput();
    expect(component.props.children[3].props.children).to.eql([
      <li className='comment' key={comments[0].id}>
        <BodyText text={comments[0].body} className={'comment-body'} />
        <UserDisplay className={"commentor"} user={comments[0].user} />
      </li>
    ])
  });

});
