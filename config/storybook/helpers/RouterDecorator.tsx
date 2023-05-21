
import { BrowserRouter } from 'react-router-dom';
export const RouterDecorator = (Story, context) => {
	return (
		<BrowserRouter>
			<Story />
		</BrowserRouter>
		
	);
};
  