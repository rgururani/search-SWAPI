import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as logInAction from '../actions/logInAction';
import toastr from 'toastr';


class LoginPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      userName: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.loginClick = this.loginClick.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.user){
      toastr.success('Login Successfull');
      this.context.router.push('/Search');
    }
  }

  onChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  loginClick(){
    this.props.actions.loadUser(this.state.userName, this.state.password)
      .catch(error => {
        toastr.error(error);
      });

  }
  render() {
    return (
      <div>
        <div className="navbar navbar-default navbar-static-top" role="navigation"  id="navbar">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                Login
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="col-sm-12">
            <div className="col-lg-4 col-lg-offset-4 col-sm-12">
              <div style={{marginTop:50}}>
                <div className="col-sm-12">
                  <input type="text" name="userName" id="userName"
                         className="form-control"
                         placeholder="user name"
                         value={this.state.userName}
                         onChange={this.onChange}
                         defaultValue="Luke Skywalker"
                  />
                </div>
                <br/><br/>
                <div className="col-sm-12">
                  <input type="text" name="password" id="password"
                         className="form-control"
                         placeholder="Date of birth"
                         value={this.state.password}
                         onChange={this.onChange}
                         defaultValue="19 BBY"
                  />
                </div>
                <br/><br/>
                <div className="col-sm-12 ">
                  <div className="col-lg-4 col-lg-offset-4 col-sm-12">
                  <input type="submit" id="submit"
                         value="login"
                         className="btn btn-primary btn-block"
                         disabled={!this.state.userName && !this.state.password}
                         onClick={this.loginClick}/>
                  </div>
                </div>
                <br/><br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

//Pull in the React Router context so router is available on this.context.router.
LoginPage.contextTypes = {
  router: PropTypes.object
};

LoginPage.propTypes = {
  user: PropTypes.string,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state)
{
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(logInAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
