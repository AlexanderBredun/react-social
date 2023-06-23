import { Suspense } from 'react';

import { Modal } from '@/shared/ui/Modal';
import { LazyLoginForm } from './ui/LoginForm/LoginForm.async';
import { Loader } from '@/shared/ui/Loader';


interface ModalLoginProps{
	isOpen: boolean;
	onClose: ()=> void
}

export const ModalLogin = ({ isOpen, onClose }: ModalLoginProps) => {
	

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Suspense fallback={<Loader />}>
				<LazyLoginForm onSuccess={onClose} />
			</Suspense>
			
		</Modal>
	);
};

ModalLogin.displayName = 'ModalLogin';

