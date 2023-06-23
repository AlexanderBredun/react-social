import { memo } from 'react';
import cls from './ListViewTypeSwitcher.module.scss';
import { Button } from '@/shared/ui/Button';
import { eBtnVariant } from '@/shared/ui/Button/Button';
export type ListTypes = 'grid' | 'list';
interface ListViewTypeSwitcherProps{
	active?: ListTypes,
	onChangeType: (value: ListTypes) => void
}

interface typesFullItem{
    iconClass: string;
    value: ListTypes
}

const typesFull: typesFullItem[] = [
	{
		iconClass: 'fas fa-th fa-lg',
		value: 'grid'
	},
	{
		iconClass: 'far fa-list fa-lg',
		value: 'list'
	}
];

const ListViewTypeSwitcher = memo(({ active, onChangeType }: ListViewTypeSwitcherProps) => {

	
	return (
		<div className={cls['list-type']}>
			{typesFull.map(type => (
				<Button key={type.value} className={active === type.value ? cls['btn-active-type'] : undefined} data-type={type.value} variant={eBtnVariant.CLEAR} onClick={()=> onChangeType(type.value)}>
					<i className={type.iconClass}></i>
				</Button>
			))}
		</div>
	);
});

export {
	ListViewTypeSwitcher
};