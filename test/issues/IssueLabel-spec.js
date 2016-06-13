import React from 'react';
import {createRenderer, renderIntoDocument} from 'react-addons-test-utils';
import IssueLabel from '~/issues/IssueLabel';

describe('IssueLabel', function() {
  let component,
      shallow = createRenderer();
      
  beforeEach(() => {
    shallow.render(<IssueLabel label={{name: 'test', color: '777777'}} />);
    component = shallow.getRenderOutput();
  });

  it('renders a list item', () => {
    expect(component.type).to.equal('li');
  });

  it('renders the label name', () => {
    expect(component.props.children).to.equal('test');
  });

  it('sets the text-color to white for a dark background', () => {
    expect(component.props.style.color).to.equal('#FFFFFF');
  });

  it('sets the text-color to black for a light background', () => {
    shallow.render(<IssueLabel label={{name: 'test', color: 'CCCCCC'}} />)
    component = shallow.getRenderOutput();
    expect(component.props.style.color).to.equal('#000000');
  });
});
