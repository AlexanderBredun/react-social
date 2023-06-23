import { Select, iOption } from '@/shared/ui/Select';
import { ChangeEvent, FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { eCountry } from '../../model/types/country';


interface CountrySelectProps{
	current?: eCountry;
	onChange: (e: ChangeEvent<HTMLSelectElement>)=> void
}


const CountrySelect:FC<CountrySelectProps> = ({ current, onChange }) => {
	const { t } = useTranslation('translation');

	const CountryList:iOption[] = useMemo(()=> Object.values(eCountry).map(el => {
		return {
			value: el,
			name: el,
		};
	}), []);

	return (
		<Select options={CountryList} onChange={onChange} active={current} label={t('Country')} name='country' />
	);
};

export {
	CountrySelect
};