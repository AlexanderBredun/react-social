import React, { memo } from 'react';

import './Loader.scss';

const Loader = memo(()=> {
	return (
		<div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
	);
});

export {
	Loader
};