import { FC, MutableRefObject, useRef } from 'react';
import cls from './PageWrapper.module.scss';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll';
import { classNames } from '@/shared/lib/helpers';

interface PageWrapperProps{
	isLoading?: boolean;
	noScroll?: boolean;
	onScrollEnd?: ()=> void
}

const PageWrapper:FC<PageWrapperProps> = ({ children, isLoading, noScroll, onScrollEnd }) => {


	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

	useInfiniteScroll({
		triggerRef,
		wrapperRef,
		callback: onScrollEnd,
	}, isLoading || noScroll);

	return (
		<main ref={wrapperRef} className={classNames(cls['page-content'])}>
			<div className={cls['page-wrapper']}>
				{children}
				
				<div  ref={triggerRef}></div>
			</div>
		</main>
	);
};

export {
	PageWrapper
};