import { Button } from '@/shared/ui/Button';
import { eBtnVariant } from '@/shared/ui/Button/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';

function LangSwitcher() {
	const { t, i18n } = useTranslation();
	const toggle = async ()=> {
		i18n.changeLanguage(i18n.language.includes('ru') ? 'en' : 'ru');
	};
	return (
		<Button variant={eBtnVariant.CLEAR} onClick={toggle}>
			{ t('langSwitcher') }
		</Button>
	);
}
 
export { LangSwitcher };