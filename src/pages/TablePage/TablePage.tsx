import { SortableTable } from '../../components/SortableTable/SortableTable';

import { FruitTableItemType, TableConfigType } from '../../types';

export const TablePage = () => {
  const data: FruitTableItemType[] = [
    { name: 'Orange', color: 'bg-orange-500', quantity: 10 },
    { name: 'Apple', color: 'bg-red-500', quantity: 9 },
    { name: 'Banana', color: 'bg-yellow-500', quantity: 23 },
    { name: 'Lime', color: 'bg-green-500', quantity: 15 },
  ];

  const config: TableConfigType<FruitTableItemType> = [
    {
      label: 'Name',
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: 'Color',
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: 'Quantity',
      render: (fruit) => fruit.quantity,
      sortValue: (fruit) => fruit.quantity,
    },
  ];

  const keyFn: (item: FruitTableItemType) => React.Key = (
    fruit: FruitTableItemType
  ) => {
    return fruit.name;
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
};
