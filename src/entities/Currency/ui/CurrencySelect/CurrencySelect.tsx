
import { Select, iOption } from '@/shared/ui/Select';
import { ChangeEvent, FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { eCurrency } from '../../model/types/currency';


interface CurrencySelectProps{
	current?: eCurrency;
	onChange: (e: ChangeEvent<HTMLSelectElement>)=> void
}


const CurrencySelect:FC<CurrencySelectProps> = ({ current, onChange }) => {
	const { t } = useTranslation('translation');

	const currencyList:iOption[] = useMemo(()=> Object.values(eCurrency).map(el => {
		return {
			value: el,
			name: el,
		};
	}), []);

	return (
		<Select options={currencyList} onChange={onChange} active={current} label={t('Currency')} name='currency' />
	);
};

export {
	CurrencySelect
};