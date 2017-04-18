import React from 'react';
import Link from './link-component';
import CheckboxWithLabel from './checkboxwithlabel-component';

const DummyComponent = React.createClass({

  changeName() {
    // console.log(this.refs.inputName);
    // let name = this.refs.inputName.value;
    // let user = this.state.user;
    // user.name = name;

    // this.setState({
    //   user: user
    // });
  },

  propTypes: {
    name: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      name: 'default'
    };
  },

  getInitialState() {
    return {
      user: {
        name: ''
      }
    };
  },

  handleChange(event) {
    let user = this.state.user;
    user.name = event.target.value;

    this.setState({user: user});
  },

  render() {

    return (
      <div>
        <h1>Hello, {this.state.user.name} </h1>
        <div>
          <Link>This is a link</Link>
          <CheckboxWithLabel labelOn="On" labelOff="Off" />
          <input type="text" id="inputName" value={this.state.user.name} onChange={this.handleChange} />
          <button onClick={this.changeName}>Change name</button>
        </div>
      </div>
    );
  }
});

module.exports = DummyComponent; 