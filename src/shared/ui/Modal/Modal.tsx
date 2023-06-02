import { FC, useCallback, useEffect, useRef } from 'react';
import cls from './Modal.module.scss';
import { Portal } from '../Portal';
import { classNames } from '@/shared/lib/helpers';
import { CSSTransition } from 'react-transition-group';
import { eClasses } from '@/shared/lib/types';

interface ModalProps{
    width?: string;
	isOpen: boolean;
	onClose: ()=> void
}


const Modal:FC<ModalProps> = ({ children, width, isOpen, onClose }) => {

	
	const containerClick = useCallback(()=> {
		onClose();
	}, [onClose]);

	const keyDownHandler = useCallback((e: KeyboardEvent)=> {
		if(e.key === 'Escape'){
			containerClick();
		}
	}, [containerClick]);

	useEffect(()=> {
		window.addEventListener('keydown', keyDownHandler);
	}, [keyDownHandler])
	;
	useEffect(()=> {
		if(isOpen){
			document.body.classList.add(eClasses.OPENED_POPUP);
		}
		else{
			document.body.classList.remove(eClasses.OPENED_POPUP);
		}

		return ()=> document.body.classList.remove(eClasses.OPENED_POPUP);
	}, [isOpen]);

	const modalRef = useRef();

	const style = { '--popup-width-local': width } as React.CSSProperties;
	return (
		
		<Portal>
			<CSSTransition in={isOpen} nodeRef={modalRef} unmountOnExit mountOnEnter timeout={300} classNames={{
				enter: cls.modalEnter,
				enterActive: cls.modalEnterActive,
				exit: cls.modalExit,
				exitActive: cls.modalExitActive,
			}}>
				<div ref={modalRef} className={classNames(cls.modal, { [cls.active]: isOpen })} style={style} onMouseDown={containerClick}> 
					<div className={cls.content} onMouseDown={(e)=> e.stopPropagation()}>
						{ children }
					</div>
				</div>
			</CSSTransition>
		</Portal>
	);
     
		
};

export {
	Modal
};