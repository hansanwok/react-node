import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { onLogin } from 'actions/login';

class B extends PureComponent { //esline-disabe-line

  constructor(props) {
    super(props);
    this.state = {
      formLogin: {
        name: '',
        password: '',
      }
    };
    this.setFieldForm = this.setFieldForm.bind(this);
    this.submit = this.submit.bind(this);
  }

  setFieldForm(field, value) {
    const formLogin = this.state.formLogin;
    formLogin[field] = value;
    this.setState({ formLogin });
  }

  submit() {
    const { name, password } = this.state.formLogin;
    if(!name) return alert('Name Please');
    if(!password) return alert('Password Please');
    this.props.onSubmit(this.state.formLogin);
  }

  render() {
    return (
      <div className={'container-B'}>
        <div className={'login'}>
          <h3>Login to Go to Private Page</h3>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => this.setFieldForm('name', e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => this.setFieldForm('password', e.target.value)}
          />
          <button onClick={this.submit}>Login</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (formLogin) => dispatch(onLogin(formLogin)),
});


export default connect(null, mapDispatchToProps)(B);