import { LinkType } from '../../types';
import { Link } from '../Link/Link';
import { routes } from '../Route/routes';

export const SideBar = () => {
  const links: LinkType[] = [
    { label: 'Dropdown', path: routes.home },
    { label: 'Accordion', path: routes.accordion },
    { label: 'Buttons', path: routes.buttons },
    { label: 'Modal', path: routes.modal },
    { label: 'Table', path: routes.table },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        className='mb-5'
        activeClassname='font-bold border-l-4 border-blue-500 pl-2'
        key={link.label}
        to={link.path}>
        {link.label}
      </Link>
    );
  });

  return (
    <aside className='sticky top-0 overflow-y-scroll flex flex-col items-start'>
      {renderedLinks}
    </aside>
  );
};
