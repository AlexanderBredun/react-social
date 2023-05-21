import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
	const { t } = useTranslation('home');
  
	return (
		<div>{t('title')}</div>
	);
}

export default Home;