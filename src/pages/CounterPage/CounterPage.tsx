import { produce } from 'immer';
import { useReducer } from 'react';
import { Button } from '../../components/Button/Button';
import { Panel } from '../../components/Panel/Panel';

type INCREMENT = { type: 'increment' };
type DECREMENT = { type: 'decrement' };
type CHANGE_VALUE_TO_ADD = { type: 'change-value-to-add'; payload: number };
type ADD_VALUE_TO_COUNT = { type: 'add-value-to-count' };
type RESET = { type: 'reset' };

type CounterAction =
  | INCREMENT
  | DECREMENT
  | CHANGE_VALUE_TO_ADD
  | ADD_VALUE_TO_COUNT
  | RESET;

type CounterState = {
  count: number;
  valueToAdd: number;
};

type CounterProps = {
  initialCount: number;
};

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'increment':
      state.count = state.count + 1;
      return;
    case 'decrement':
      state.count = state.count - 1;
      return;
    case 'change-value-to-add':
      state.valueToAdd = action.payload;
      return;
    case 'add-value-to-count':
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    case 'reset':
      state.count = 0;
      state.valueToAdd = 0;
      return;
    default:
      return;
  }
};

export const CounterPage: React.FC<CounterProps> = ({ initialCount }) => {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  console.log(state);

  const increment = () => {
    dispatch({
      type: 'increment',
    });
  };

  const decrement = () => {
    dispatch({
      type: 'decrement',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;

    dispatch({
      type: 'change-value-to-add',
      payload: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: 'add-value-to-count',
    });
  };

  const handleReset = () => {
    dispatch({
      type: 'reset',
    });
  };

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count is {state.count}</h1>
      <div className='flex flex-row'>
        <Button variant='primary' className='mt-5' onClick={increment}>
          Increment
        </Button>
        <Button variant='primary' className='mt-5' onClick={decrement}>
          Decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          onChange={handleChange}
          value={state.valueToAdd || ''}
          type='number'
          className='p-1 m-3 bg-gray border border-gray-300'
        />
        <Button variant='primary'>Add it!</Button>
      </form>
      <Button variant='warning' onClick={handleReset}>
        Reset
      </Button>
    </Panel>
  );
};
