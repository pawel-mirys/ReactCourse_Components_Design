import { useState } from 'react';
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';
import { Table, TableProps } from '../Table/Table';

export const SortableTable = (props: TableProps) => {
  const { config, data } = props;
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
  const [sortBy, setSortBy] = useState<string | number | null>(null);

  const handleClick = (label: string | number) => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const getIcons = (
    label: string,
    sortBy: string | number | null,
    sortOrder: 'asc' | 'desc' | null
  ): React.ReactNode => {
    if (label !== sortBy) {
      return (
        <div>
          <BsArrowUpShort />
          <BsArrowDownShort />
        </div>
      );
    }
    if (sortOrder === null) {
      return (
        <div>
          <BsArrowUpShort />
          <BsArrowDownShort />
        </div>
      );
    } else if (sortOrder === 'asc') {
      return (
        <div>
          <BsArrowUpShort />
        </div>
      );
    } else if (sortOrder === 'desc') {
      return (
        <div>
          <BsArrowDownShort />
        </div>
      );
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className='cursor-pointer hover:bg-gray-100'
          onClick={() => {
            handleClick(column.label);
          }}>
          <div className='flex items-center'>
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  let sortedData = data;

  if (sortBy && sortOrder) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return <Table {...props} config={updatedConfig} data={sortedData} />;
};
