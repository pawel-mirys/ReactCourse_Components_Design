import { Accordion } from '../../components/Accordion/Accordion';
import { AccordionItemType } from '../../types';

export const AccordionPage = () => {
  const items: AccordionItemType[] = [
    {
      label: 'Click here',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, facere.',
      id: 1,
    },
    {
      label: 'Another section',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, facere.',
      id: 2,
    },
    {
      label: 'And another one',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, facere.',
      id: 3,
    },
  ];

  return (
    <>
      <Accordion items={items} />
    </>
  );
};
