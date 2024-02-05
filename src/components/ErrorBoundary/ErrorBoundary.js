import React from "react";

export default class ErrorBoundary extends React.Component {
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      if (typeof this.props.errorComponent === "function") {
        return this.props.errorComponent();
      }
      return null;
    }
    return this.props.children;
  }
}
