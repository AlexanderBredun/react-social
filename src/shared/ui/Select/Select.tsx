import { ChangeEvent, FC } from 'react';
import cls from './Select.module.scss';

export interface iOption{
	value: string;
	name: string;
}

interface SelectProps{
    label?: string
	options: iOption[]
	active?: string
	onChange: (e: ChangeEvent<HTMLSelectElement>)=> void
	name?: string
}

const Select:FC<SelectProps> = ({ name, label, options, active, onChange }) => {
	return (
		<div className={cls['app-select']}>
			<label>
				{label && <span>
					{label}
				</span>}
				
				<select name={name} defaultValue={active} onChange={onChange}>
					{
						options.map((opt)=>(
							<option key={opt.value} value={opt.value}>{opt.name}</option>
						))
					}
				</select>
			</label>
			
		</div>
	);
};

export {
	Select
};