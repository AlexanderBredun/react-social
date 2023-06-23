import { FC, FormEvent, FormHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import cls from './FormValidate.module.scss';
import Pristine from 'pristinejs';
import { useTranslation } from 'react-i18next';
interface FormValidateProps extends FormHTMLAttributes<HTMLFormElement> {
    submit: (e: FormEvent<HTMLFormElement>)=> void;
}

const FormValidate:FC<FormValidateProps> = ({ children, submit, ...otherProps }) => {
	const form = useRef<HTMLFormElement>(null);
	const [formValid, setFormValid] = useState<PristineInstance | null>(null);
	const flag = useRef(false);
	const { i18n } = useTranslation();
	

	useEffect(()=> {
		if(form.current){
           
			
			Pristine?.addMessages('ru', {
				'required': 'Это поле обязательное',
				'integer': 'Введите возраст цифрами',
			});
	
			Pristine?.addMessages('en', {
				'required': 'This field required',
				'integer': 'Enter age with numbers',
			});
            
			console.log(i18n.language);
			Pristine.setLocale(i18n.language);
			const pristine = new Pristine(form.current);
			if(flag.current){
				pristine.reset();
				pristine.validate();
			}
			setFormValid(pristine);
			
		}
	}, [form, i18n.language]);

	useEffect(()=> {
		flag.current = true;
	}, [i18n.language]);
	

	const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>)=> {
		e.preventDefault();
		formValid?.validate();
		console.log(formValid?.getErrors());

		if(!formValid?.getErrors().length){ 
			submit(e);
			
            
		}
	}, [submit, formValid]);

	return (
		<form ref={form} {...otherProps} onSubmit={handleSubmit}>
			{children}
		</form>
	);
};

export {
	FormValidate
};