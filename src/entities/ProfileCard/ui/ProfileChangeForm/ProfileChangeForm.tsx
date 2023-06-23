import { ChangeEvent, FormEvent, memo } from 'react';
import cls from './ProfileChangeForm.module.scss';
import { useAppSelector } from '@/app/store/hooks/storeHooks';
import { CardRowLayout } from '../CardRowLayout/CardRowLayout';
import { Input } from '@/shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { getProfileForm } from '@/entities/Profile';
import { Button } from '@/shared/ui/Button';
import { eBtnVariant } from '@/shared/ui/Button/Button';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { FormValidate } from '@/features/FormValidate';

interface ProfileChangeFormProps{
	onDataChange: ((e: ChangeEvent<HTMLInputElement>)=> void);
	onDataChangeSelect: ((e: ChangeEvent<HTMLSelectElement>)=> void);
	onDataSave: (e:FormEvent<HTMLFormElement>)=> void;
}

const ProfileChangeForm = memo(({ onDataChange, onDataSave, onDataChangeSelect }: ProfileChangeFormProps) => {
	const formData = useAppSelector(getProfileForm);
	const { t } = useTranslation(['profile', 'translation']);
	
    
	return (
		<FormValidate action="#" submit={onDataSave}>
			<CardRowLayout>
				<Input label={t('Name')} name='firstname' value={formData?.firstname}  onChange={onDataChange} required 
					 />
				<Input label={t('Username')} name='username' value={formData?.username} onChange={onDataChange} required />
			</CardRowLayout>
			<CardRowLayout>
				<Input label={t('Lastname')} name='lastname' value={formData?.lastname} onChange={onDataChange} required />
				<Input label={t('LinkAvatar')} name='avatar' value={formData?.avatar} onChange={onDataChange} />
			</CardRowLayout>
			<CardRowLayout>
				<Input label={t('Age')} name='age' value={formData?.age}  onChange={onDataChange} data-pristine-type="integer" />
				<Input label={t('City')} name='city' value={formData?.city}  onChange={onDataChange} required />
			</CardRowLayout>
			<CardRowLayout>
				<CurrencySelect current={formData?.currency} onChange={onDataChangeSelect}  />
				<CountrySelect current={formData?.country} onChange={onDataChangeSelect}  />
			</CardRowLayout>

			<Button variant={eBtnVariant.BORDERED} position='center'  type='submit'>
				{t('Save')}
			</Button>
		</FormValidate>
	);
});

export {
	ProfileChangeForm
};