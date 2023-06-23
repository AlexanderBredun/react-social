
import { PageWrapper } from '@/widgets/PageWrapper';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';


const Home = memo(()=> {
	const { t } = useTranslation('home');

	return (
		<PageWrapper>
			<h1>
				{t('title')}
			</h1>
		</PageWrapper>
	);
});

export default Home;