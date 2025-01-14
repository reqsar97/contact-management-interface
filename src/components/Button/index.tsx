import { FC, HTMLProps } from 'react';
import clsx from 'clsx';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  danger?: boolean;
}

const Button: FC<ButtonProps> = ({ className, danger, children }) => {
  return (
    <button
      className={clsx(
        'rounded-md bg-white py-2 px-4 border border-transparent text-center text-sm text-blue-600 transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-blue-600 hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',
        {
          'text-red-600 hover:bg-red-600': danger,
        },
        className
      )}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
