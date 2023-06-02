import { classNames } from '@/shared/lib/helpers';
import { Loader } from '@/shared/ui/Loader';
import cls from './PageLoader.module.scss';
import { memo } from 'react';

const PageLoader = memo(()=> {
	return (
		<div className={classNames(cls['page-loader'])}>
			<Loader />
		</div>
	);
});

export{
	PageLoader
};