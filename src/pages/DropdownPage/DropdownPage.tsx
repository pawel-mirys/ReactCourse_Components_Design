import { useState } from 'react';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { DropdownOptionType } from '../../types';


export const DropdownPage = () => {
  const [selection, setSelection] = useState<DropdownOptionType | null>(null);

  const handleSelect = (option: DropdownOptionType) => {
    setSelection(option);
  };

  const options: DropdownOptionType[] = [
    { label: 'red', value: 'red' },
    { label: 'blue', value: 'blue' },
    { label: 'green', value: 'green' },
  ];

  return (
    <div className='flex'>
      <Dropdown options={options} onChange={handleSelect} value={selection} />
    </div>
  );
}


