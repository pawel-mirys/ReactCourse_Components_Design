import { Fragment } from 'react';
import { TableConfigType, TableDataType } from '../../types';

export type TableProps = React.TableHTMLAttributes<HTMLTableElement> & {
  data: TableDataType[];
  config: TableConfigType<TableDataType>;
  keyFn: (item: TableDataType) => void;
};

export const Table: React.FC<TableProps> = ({
  data,
  config,
  keyFn,
  ...rest
}) => {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td key={column.label} className='p-2'>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr className='border-b' key={keyFn(rowData)!}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table {...rest} className='table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2'>{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};
