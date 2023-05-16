import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
	const { t } = useTranslation('home');
  
	return (
		<div>{t('страница home')}</div>
	);
}

export default Home;