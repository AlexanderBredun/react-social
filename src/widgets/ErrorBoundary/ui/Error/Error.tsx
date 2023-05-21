import React from 'react';

interface Props{
    isLocal: boolean;
    reset: ()=> void
}

function Error({ isLocal, reset }: Props) {
	if(isLocal){
		return (
			<div>
				<h2>Error</h2>
				<button
					type="button"
					onClick={() => reset()}
				>
                              Try again?
				</button>
			</div>
		);
	}
	return (
		<div>
			<h2>Error while loading this page</h2>
			<button
				type="button"
				onClick={() => reset()}
			>
              			Try again?
			</button>
		</div>
	);
	
}

export default Error;