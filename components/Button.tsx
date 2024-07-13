'use client';

import { useFormStatus } from 'react-dom';
import Link from 'next/link';
import { ButtonProps } from '@/libs/types';
import Spinner from '@/components/Spinner';

const Button = ({
  children,
  icon,
  type = 'button',
  href,
  isLoading,
  onClick,
  rounded,
  outlined,
  method = 'post',
  fullWidth = false,
}: ButtonProps) => {
  const { pending } = useFormStatus();

  return isLoading ?? pending ? (
    <div className="h-12">
      <Spinner />
    </div>
  ) : (
    <button
      type={type}
      className={`
        base-transition
        px-6 ${fullWidth ? 'w-full flex justify-center items-center' : 'w-fit'} 
        ${!fullWidth && 'mx-auto'} 
        h-12 disabled:bg-neutral-400 disabled:text-neutral-300 
        disabled:cursor-not-allowed font-semibold active:scale-95 
        ${method === 'delete' ? 'delete-btn' : 'primary-btn'} 
        ${rounded && 'rounded-full'} 
        ${type === 'submit' && 'bg-blue-600 text-white hover:bg-blue-500'}
        ${outlined && 'bg-transparent border border-orange-400 *:text-orange-400 *:font-medium *:hover:font-semibold *:hover:text-white'}
      `}
      disabled={isLoading ?? pending}
      onClick={onClick}
    >
      {href ? (
        <Link className="flex items-center justify-between gap-2 text-sm" href={href}>
          {icon && icon}
          {children}
        </Link>
      ) : (
        <div className="flex items-center justify-between gap-2 text-sm">
          {icon && icon}
          {children}
        </div>
      )}
    </button>
  );
};

export default Button;
