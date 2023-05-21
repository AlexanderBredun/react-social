import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props{
    isLocal: boolean;
    reset: ()=> void
}

function Error({ isLocal, reset }: Props) {

	const { t } = useTranslation();

	if(isLocal){
		return (
			<div>
				<h2>{t('error.title')}</h2>
				<button
					type="button"
					onClick={() => reset()}
				>
					{t('error.btn')}
				</button>
			</div>
		);
	}
	return (
		<div>
			<h2>{t('errorPage.title')}</h2>
			<button
				type="button"
				onClick={() => reset()}
			>
              			{t('error.btn')}
			</button>
		</div>
	);
	
}

export default Error;