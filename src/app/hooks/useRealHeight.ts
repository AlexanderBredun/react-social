import { useEffect } from 'react';

export function useRealHeight(){

	useEffect(()=> {

		const resizeHandler = ()=> {
			const doc = document.documentElement;
			doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
		};
		resizeHandler();
		window.addEventListener('resize', resizeHandler);

		return ()=> {
			window.removeEventListener('resize', resizeHandler);
		};
	}, []);

}