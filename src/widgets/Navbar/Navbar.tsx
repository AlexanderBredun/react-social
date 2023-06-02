import { classNames } from '@/shared/lib/helpers';
import {  memo, useCallback, useState } from 'react';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { eBtnVariant } from '@/shared/ui/Button/Button';
import { ModalLogin } from '@/features/ModalLogin';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks/storeHooks';
import { userActions } from '@/entities/User';
import { LOCAL_STORAGE } from '@/shared/lib/helpers/constants';


interface Props {
	className?: string

}


export const Navbar = memo(({ className }: Props) => {

	const { t } = useTranslation();

	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useAppDispatch();

	const user = useAppSelector(state => state.user.authData);

	const logOut = useCallback(()=> {
		dispatch(userActions.removeUser());
		localStorage.removeItem(LOCAL_STORAGE.USER);
	}, [dispatch]);

	if(user){
		return (
			<div className={classNames(cls.navbar, [className])}>
				<div className={cls.wrapper}>
					<Button variant={eBtnVariant.CLEAR} onClick={logOut}>
						{t('Leave')}
					</Button>
				</div>
				
			</div>
		);
	}
	

	return (
		<div className={classNames(cls.navbar, [className])}>
			<div className={cls.wrapper}>
				<ModalLogin isOpen={isOpen} onClose={()=> setIsOpen(false)} />
				<Button variant={eBtnVariant.CLEAR} onClick={()=> setIsOpen(true)}>
					{t('Enter')}
				</Button>
			</div>
			
		</div>
	);
});

