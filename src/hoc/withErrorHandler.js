import React, { Component } from 'react';
import { Message } from 'semantic-ui-react'

// the folder hoc stands for high order component
const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {

    state = {
      error: null
    }

    UNSAFE_componentWillMount() {
      // Add a request interceptor
      this.requestInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      // Add a response interceptor
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        this.setState({ error: error });
      });
    }

    componentWillUnmount() {
      // remove two interceptors before this component is unmounted and destroyed
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.request.eject(this.resInterceptor);
    }

    render() {
      return (
        <>
          {this.state.error && <Message
            header='Oops something is wrong :('
            content={this.state.error.message}
          />}
          <WrappedComponent {...this.props} />
        </>
      );
    }
  }
}

export default withErrorHandler;