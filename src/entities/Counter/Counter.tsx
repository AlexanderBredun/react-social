import { Button } from '@/shared/ui/Button';
import { FC } from 'react';

import { counterActions } from './model/slice/counterSlice';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks/storeHooks';
import { getCounterValue } from './model/selectors/getCounterValue';


interface CounterProps{

}

const Counter:FC<CounterProps> = () => {

	const dispatch = useAppDispatch();
	const counter = useAppSelector(getCounterValue);

	const increment = ()=> {
		dispatch(counterActions.increment());
	};

	const dicrement = ()=> {
		dispatch(counterActions.decrement());
	};

	return (
		<div>
			<h1 data-testid="counter-title">
				{counter}
			</h1>
			<Button data-testid="btn-inc" onClick={increment} >
                increment
			</Button>
			<Button data-testid="btn-dec" onClick={dicrement} >
                dicrement
			</Button>
		</div>
	);
};

export {
	Counter
};