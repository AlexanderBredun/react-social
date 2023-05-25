import { Counter } from '@/entities/Counter';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';


function Home() {
	const { t } = useTranslation('home');

	const [inProp, setInProp] = useState(false);
	const nodeRef = useRef(null);
	return (
		<div>
			<h1>
				{t('title')}
			</h1>

			{/* <Counter /> */}
	
		</div>
	);
}

export default Home;