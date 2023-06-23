import { classNames } from '@/shared/lib/helpers';
import { Loader } from '@/shared/ui/Loader';
import cls from './PageLoader.module.scss';
import { PageWrapper } from '@/widgets/PageWrapper';


const PageLoader = ()=> {
	return (
		<PageWrapper noScroll>
			<div className={classNames(cls['page-loader'])}>
				<Loader />
			</div>
		</PageWrapper>
		
	);
};

export{
	PageLoader
};