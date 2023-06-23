import React, { ErrorInfo, ReactNode } from 'react';
import Error from './ui/Error/Error';

interface Props{
    children: ReactNode,
	isLocal?: boolean
}

interface State{
    hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
   
		// Define a state variable to track whether is an error or not
		this.state = { hasError: false };
	}
	static getDerivedStateFromError() {
		// Update state so the next render will show the fallback UI
   
		return { hasError: true };
	}
	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// You can use your own error logging service here
		console.log({ error, errorInfo });
	}
	render() {
		if (this.state.hasError) {
			
			return (
				<Error isLocal={Boolean(this.props.isLocal)} reset={()=> this.setState({ hasError: false })} />
			);
		}
   
		return this.props.children;
	}
}
   
export {
	ErrorBoundary
};