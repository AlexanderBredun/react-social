
import React from 'react';
import { useTranslation } from 'react-i18next';

function NotFoundPage() {

	const { t } = useTranslation();

	return (
		<div>
			<h1>
				{t('notFound.title')}
			</h1>
		</div>
	);
}

export { NotFoundPage };