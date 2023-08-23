/* eslint-disable @typescript-eslint/no-explicit-any */
export type AccordionItemType = {
  label: string;
  content: string;
  id: number;
};

export type DropdownOptionType = {
  label: string;
  value: string;
};

export type LinkType = {
  label: string;
  path: string;
};

export type TableConfigType<T> = {
  header?: () => React.ReactNode;
  label: string;
  render: (item: T) => React.ReactNode;
  sortValue?: (item: T) => string | number;
}[];

export type FruitTableItemType = {
  name: string;
  color: string;
  quantity: number;
};

export type CarTableItemType = {
  name: string;
  color: string;
  wheels: number;
};

export type TableDataType = {
  [x: string]: React.ReactNode;
};
