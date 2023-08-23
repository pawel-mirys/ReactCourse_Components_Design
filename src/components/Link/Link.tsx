import React from 'react';
import { useNavigation } from '../../hooks/use-navigation';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  children: React.ReactNode;
  activeClassname?: string;
};

export const Link: React.FC<LinkProps> = ({
  to,
  children,
  activeClassname,
  ...rest
}) => {
  const NavigationContext = useNavigation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    e.preventDefault();
    NavigationContext?.navigate(to);
  };
  const classes = twMerge(
    classNames(
      'text-blue-500 ',
      rest.className,
      NavigationContext?.currentPath === to && activeClassname
    )
  );
  return (
    <a {...rest} className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};
