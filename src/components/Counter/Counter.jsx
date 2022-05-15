import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../stores/counter';


function Counter() {
	
	const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

	return (
		<div>
			<h1>{count}</h1>
			<div>
            <button onClick={() => dispatch(increment())}>Arttır (+)</button>
            <button onClick={() => dispatch(decrement())}>Azalt (-)</button>
            <button onClick={() => dispatch(incrementByAmount(4))}>4 Arttır</button>
        </div>
		</div>
	)
}

export default Counter