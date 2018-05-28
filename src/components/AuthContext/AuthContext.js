import React, { Component } from 'react';

const AuthContext = React.createContext();

class AuthProvider extends Component {
    state = { isAuth: false }

    constructor() {
        super();
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
      }
      login() {
        // setting timeout to mimic an async login
        setTimeout(() => this.setState({ isAuth: true }), 1000);
      }
      logout() {
        this.setState({ isAuth: false });
      }

    render() {
      return (
        <AuthContext.Provider
          value={{
            isAuth: this.state.isAuth,
            login: this.login,
            logout: this.logout
        }}
        >
          {this.props.children}
        </AuthContext.Provider>
      );
    }
}
export const AuthConsumer = AuthContext.Consumer;
export default AuthProvider;
