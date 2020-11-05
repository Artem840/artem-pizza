import React, {ErrorInfo, PureComponent} from 'react';

interface Props {}
interface State {
    isErrorCaught?: boolean;
}

export default class ErrorBoundary extends PureComponent<Props, State> {
    state: State = {};

    static getDerivedStateFromError(error: any) {
        console.log('ErrorBoundary:getDerivedStateFromError', error);
        return { isErrorCaught: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log('ErrorBoundary:componentDidCatch', error, errorInfo);
    }

    render() {
        if (this.state.isErrorCaught) {
            return <h1>Что-то пошло не так</h1>;
        }

        return this.props.children;
    }
}
