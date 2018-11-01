
import * as React from 'react';

export default class ErrorBoundary extends React.Component {
  state = { hasError: false };

  componentDidCatch(error:any , info: any) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h6>Something went wrong.</h6>;
    }
    return this.props.children;
  }
}