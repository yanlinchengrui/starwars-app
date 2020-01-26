import React, { Component } from 'react';
import { Message } from 'semantic-ui-react'

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {

    state = {
      error: null
    }

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error });
      });
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.request.eject(this.resInterceptor);
    }

    clearError = () => {
      this.setState({ error: null });
    }

    render() {

      if (this.state.error) {
        return (
          <Message
            onDismiss={this.clearError}
            header='Oops something is wrong :('
            content={this.state.error.message}
          />
        );
      }
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }
}


export default withErrorHandler;