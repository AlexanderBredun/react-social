
import { memo } from 'react';
import { useTranslation } from 'react-i18next';


const Home = memo(()=> {
	const { t } = useTranslation('home');

	return (
		<div>
			<h1>
				{t('title')}
			</h1>

		</div>
	);
});

export default Home;