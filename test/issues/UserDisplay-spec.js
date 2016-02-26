import React from 'react';
import {createRenderer} from 'react-addons-test-utils';
import UserDisplay from 'issues/UserDisplay';

let user = {
  login: 'testuser',
  avatar_url: 'http://www.placecage.com/32/32'
};

describe('UserDisplay', function() {
  let component,
      shallow = createRenderer();
      
  beforeEach(() => {
    shallow.render(<UserDisplay className="test" user={user} />);
    component = shallow.getRenderOutput();
  });

  it('renders a the avatar', () => {
    expect(component.props.children[0].type).to.equal('img')
    expect(component.props.children[0].props.src).to.equal('http://www.placecage.com/32/32&s=32');
  });

  it('renders the name', () => {
    expect(component.props.children[1]).to.eql(<span className='user-display-name'>testuser</span>)
  });
});
