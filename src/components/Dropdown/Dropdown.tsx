import React, { useEffect, useRef, useState } from 'react';
import { DropdownOptionType } from '../../types';
import { GoChevronDown } from 'react-icons/go';
import { Panel } from '../Panel/Panel';

type DropdownProps = {
  options?: DropdownOptionType[];
  onChange: (option: DropdownOptionType) => void;
  value: DropdownOptionType | null;
};

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  onChange,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handler = (event: any) => {
      if (!divRef.current) {
        return;
      }

      if (!divRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handler, true);
    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: DropdownOptionType) => {
    onChange(option);
    setIsOpen(false);
  };

  const renderedOptions =
    options &&
    options.map((option) => {
      return (
        <div
          className='hover:bg-sky-100 rounded cursor-pointer p-1'
          key={option.value}
          onClick={() => {
            handleOptionClick(option);
          }}>
          {option.value}
        </div>
      );
    });

  return (
    <div ref={divRef} className='w-48 relative'>
      <Panel
        onClick={handleClick}
        className='flex justify-between items-center cursor-pointer '>
        {value?.label ?? 'Select...'} <GoChevronDown className='text-lg' />
      </Panel>
      {isOpen && (
        <Panel className='absolute top-full '>{renderedOptions}</Panel>
      )}
    </div>
  );
};
