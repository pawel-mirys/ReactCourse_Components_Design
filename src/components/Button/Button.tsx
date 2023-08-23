import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof buttonTypes;
  outline?: boolean;
  rounded?: boolean;
};

const buttonTypes = {
  primary: 'border-blue-600 bg-blue-500 text-white',
  secondary: 'border-gray-900 bg-gray-800 text-white',
  success: 'border-green-600 bg-green-500 text-white',
  warning: 'border-yellow-600 bg-yellow-500 text-white',
  danger: 'border-red-600 bg-red-500 text-white',
} as const;

export const Button: React.FC<ButtonProps> = ({
  variant,
  outline,
  rounded,
  ...props
}) => {
  const classes = twMerge(
    classNames(
      props.className,  
      'flex items-center',
      'px-3',
      'py-1.5',
      'border',
      variant && !outline && buttonTypes[variant],
      rounded && 'rounded-2xl',
      outline && 'bg-white',
      outline && variant === 'primary' && 'text-blue-500 border-blue-600',
      outline && variant === 'secondary' && 'text-gray-500 border-gray-600',
      outline && variant === 'success' && 'text-green-500 border-green-600',
      outline && variant === 'warning' && 'text-yellow-500 border-yellow-600',
      outline && variant === 'danger' && 'text-red-500 border-red-600'
    )
  );

  return <button {...props} className={classes}></button>;
};
