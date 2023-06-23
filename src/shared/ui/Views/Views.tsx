import { classNames } from '@/shared/lib/helpers';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Views.module.scss';

interface ViewsProps{
    count: number;
	className?: string;
}

const Views = memo(({ count, className }: ViewsProps) => {
	const { t } = useTranslation('translation');
    
	return (
		<div className={classNames(cls['views'], [className])} title={t('Views')}>
			<i className="fas fa-eye"></i>
			<p>
				{ count }
			</p>
		</div>
	);
});

export {
	Views
};
