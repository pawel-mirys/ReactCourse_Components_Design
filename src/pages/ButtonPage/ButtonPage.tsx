import { Button } from '../../components/Button/Button';

import { GoBell, GoCloud, GoDatabase } from 'react-icons/go';

export const ButtonPage = () => {
  return (
    <>
      <div>
        <Button
          variant='primary'
          onClick={() => {
            console.log('Button');
          }}>
          Button <GoBell />
        </Button>
      </div>
      <div>
        <Button variant='secondary'>
          Button <GoCloud />
        </Button>
      </div>
      <div>
        <Button variant='success'>
          Button <GoDatabase />
        </Button>
      </div>
      <div>
        <Button variant='warning'>Button</Button>
      </div>
      <div>
        <Button variant='danger'>Button</Button>
      </div>
    </>
  );
};
