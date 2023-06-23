import { PageWrapper } from '@/widgets/PageWrapper';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const About = memo(()=> {
	const { t } = useTranslation('about');
	return (
		<PageWrapper>
			<h1>
				{t('страница about')}
				
			</h1>
			<p>
				{t('test')}
			</p>
		</PageWrapper>
	);
});

export default About;