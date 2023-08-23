import { useEffect } from 'react';
import ReactDom from 'react-dom';

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
  actionBar: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({
  onClose,
  children,
  actionBar,
}) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return ReactDom.createPortal(
    <div>
      <div
        onClick={onClose}
        className='fixed  inset-0 bg-gray-500 opacity-80'></div>
      <div className='fixed  inset-40 p-10 bg-white'>
        <div className='flex flex-col justify-between h-full'>
          {children}
          <div className='flex justify-end'>{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')!
  );
};
