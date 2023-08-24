import { Button } from '../../components/Button/Button';
import { useCounter } from '../../hooks/use-counter';

type CounterProps = {
  initialCount: number;
};

export const CounterPage: React.FC<CounterProps> = ({ initialCount }) => {
  const { count, increment } = useCounter(initialCount);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button variant='primary' className='mt-5' onClick={increment}>
        Increment
      </Button>
    </div>
  );
};
