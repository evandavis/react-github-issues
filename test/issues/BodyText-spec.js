import React from 'react';
import {createRenderer, renderIntoDocument} from 'react-addons-test-utils';
import BodyText from '~/issues/BodyText';

const text = 'This is text with an email, test@email.com, and a github user @user.\r\n\r\nIt also has a line after a carriage return.';

describe('BodyText text processing component', function() {
  let component,
      shallow = createRenderer();
      
  beforeEach(() => {
    shallow.render(<BodyText className="test" text={text} />)
    component = shallow.getRenderOutput();
  });

  it('replaces carriage returns with paragraphs', () => {
    expect(component.props.children.length).to.equal(2);
  });

  it('replaces github handles', () => {
    expect(component.props.children[0].props.children[1].type).to.equal('a');
    expect(component.props.children[0].props.children[1].props.href).to.equal('https://github.com/user');
  })
});
