import React, {Component} from 'react';

// export default class ErrorBoundary extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false };
//     }
//
//     static getDerivedStateFromError(error) {
//         // Update state so the next render will show the fallback UI.
//         return { hasError: true };
//     }
//
//     componentDidCatch(error, errorInfo) {
//         // You can also log the error to an error reporting service
//         logErrorToMyService(error, errorInfo);
//     }
//
//     render() {
//         if (this.state.hasError) {
//             // You can render any custom fallback UI
//             return <h1>Something went wrong.</h1>;
//         }
//
//         return this.props.children;
//     }
// }
export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
    }

    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}