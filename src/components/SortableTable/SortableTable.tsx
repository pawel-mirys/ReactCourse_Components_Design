import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';
import { Table, TableProps } from '../Table/Table';
import { useSort } from '../../hooks/use-sort';

export const SortableTable = (props: TableProps) => {
  const { config, data } = props;
  const { sortBy, sortOrder, sortedData, setSortColumn } = useSort(
    data,
    config
  );
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
            setSortColumn(column.label);
          }}>
          <div className='flex items-center'>
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} config={updatedConfig} data={sortedData} />;
};
