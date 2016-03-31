import React from 'react';
import {Link} from 'react-router';
import {createRenderer} from 'react-addons-test-utils';
import IssuesList from 'issues/issuesList';
import IssueLabel from 'issues/IssueLabel';
import UserDisplay from 'issues/UserDisplay';

let issues = [{
      title: 'A test issue',
      // hipster ipsum
      body: 'Consectetur viral actually taxidermy, four dollar toast kogi fashion axe delectus. Voluptate cronut microdosing gastropub ennui. Snake person nihil mumblecore flannel adipisicing ennui, gochujang before they sold out kogi craft beer nostrud normcore ea paleo. Schlitz ut mlkshk church-key deserunt 3 wolf moon. Skateboard art party pork belly franzen, PBR&B deserunt adipisicing green juice everyday carry in chicharrones accusamus austin.',
      id: 'abc123',
      labels: [
        {name: 'test'}
      ],
      number: '123',
      state: 'open',
      user: {}
    }],
    links = {
      next: 'next',
      last: 'last'
    };

describe('IssueDetail', function() {
  let component,
      goToPage,
      toggleStatus,
      shallow = createRenderer();

  beforeEach(() => {
    // realized I will not be able to test clicks on a shallow-rendered component
    goToPage = sinon.spy();
    toggleStatus = sinon.spy();
    shallow.render(<IssuesList issues={issues} goToPage={goToPage} links={links} status={'open'} toggleStatus={toggleStatus}/>);
    component = shallow.getRenderOutput();
  });

  it('renders links', () => {
    let linkNav = component.props.children[1].props.children;
    expect(linkNav.length).to.equal(7);
    expect(linkNav[4].type).to.equal('a');
    expect(linkNav[5]).to.equal(' | ');
    expect(linkNav[6].type).to.equal('a');
  });

  it('renders a list of issues', () => {
    expect(component.props.children[3].props.children.length).to.eql(1);
  });

  it('renders title and the labels', () => {
    // this is a hideous selector
    // get the issues-list, get the first item inside that, get the H2, and select the children list inside THAT.
    let titleAndLabels = component.props.children[3].props.children[0].props.children[0];
    expect(titleAndLabels.props.children[0]).to.eql(<Link to={`issues/${issues[0].number}`}>{issues[0].title}</Link>);
    expect(titleAndLabels.props.children[1].props.children).to.eql([
        <IssueLabel label={issues[0].labels[0]} key={'0'} />
    ]);
  })

  it('truncates the text', () => {
    let bodyText = component.props.children[3].props.children[0].props.children[1];
    expect(bodyText.props.children).to.equal('Consectetur viral actually taxidermy, four dollar toast kogi fashion axe delectus. Voluptate cronut microdosing gastropub ennui. Snake...');
  });

  it('renders the reporter', () => {
    let reporter = component.props.children[3].props.children[0].props.children[2];
    expect(reporter.props.children).to.eql([
      <span className='issue-number'>#{issues[0].number}</span>,
      ' reported by',
      <UserDisplay className={"issue-reporter"} user={issues[0].user} />
    ]);
  });
});
