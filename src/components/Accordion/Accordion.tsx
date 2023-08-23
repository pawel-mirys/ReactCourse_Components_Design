import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import { AccordionItemType } from '../../types';
import { useState } from 'react';

type AccordionProps = {
  items: AccordionItemType[];
};

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expandedIndex, setEpandedIndex] = useState(-1);

  const handleClick = (nextIndex: number) => {
    if (expandedIndex === nextIndex) {
      setEpandedIndex(-1);
    } else {
      setEpandedIndex(nextIndex);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );

    return (
      <div key={item.id}>
        <div
          className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer'
          onClick={() => {
            handleClick(index);
          }}>
          {item.label}
          {icon}
        </div>
        {isExpanded && (
          <div className='border-b p-5 text-xl'>{item.content}</div>
        )}
      </div>
    );
  });

  return <div className='border-x border-t rounded'>{renderedItems}</div>;
};
