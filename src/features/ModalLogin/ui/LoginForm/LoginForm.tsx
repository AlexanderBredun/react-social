import { ChangeEvent, FC, memo, useCallback, MouseEvent, FormEvent, } from 'react';
import cls from './LoginForm.module.scss';
import { Input } from '@/shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks/storeHooks';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername';

import { AsyncReducersReducers, useAsyncReducer } from '@/shared/lib/hooks/useAsyncReducer';
import { getLoginError, getLoginLoading, getLoginPassword, getLoginUsername } from '../../model/selectors';
import { FormValidate } from '@/features/FormValidate';

interface LoginFormProps{
	onSuccess: ()=> void
}

const asyncReducers: AsyncReducersReducers = {
	login: loginReducer
};

const LoginForm = memo(({ onSuccess }: LoginFormProps) => {

	const { t } = useTranslation();

	
	const password = useAppSelector(getLoginPassword);
	const username = useAppSelector(getLoginUsername);
	const error = useAppSelector(getLoginError);
	const isLoading = useAppSelector(getLoginLoading);

	const dispatch = useAppDispatch();

	useAsyncReducer(asyncReducers);
	
	const setUsername = useCallback((e: ChangeEvent<HTMLInputElement>)=> {
		dispatch(loginActions.setUsername(e.target.value));
	}, [dispatch]);

	const setPassword = useCallback((e: ChangeEvent<HTMLInputElement>)=> {
		dispatch(loginActions.setPassword(e.target.value));
	}, [dispatch]);


	const loginClickHandler = useCallback(async (e: FormEvent<HTMLFormElement>)=> {
		e.preventDefault();
		const result = await dispatch(loginByUsername({
			password,
			username
		}));
		if(result.meta.requestStatus === 'fulfilled'){
			onSuccess();
		}
	}, [onSuccess, dispatch, password, username]);

	return (
		<div>
			<FormValidate submit={loginClickHandler}>
				<div className={cls['form-content']}>
					<div className={cls['input-holder']}>
						<Input focused label={t('Name')} onChange={setUsername} autoComplete="username" value={username} required  />
					</div>
					<div className={cls['input-holder']}>
						<Input label={t('Password')} onChange={setPassword} type='password' autoComplete="current-password" value={password} required  />
					</div>
				</div>
				
				{error && <div className={cls['error']}>{error}</div>}
				<Button className={cls['btn-submit']} disabled={isLoading}>
					{t('Enter')}
				</Button>
			</FormValidate>
		</div>
	
	);
});

LoginForm.displayName = 'LoginForm';

export default 	LoginForm;
