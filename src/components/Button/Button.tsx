"use client";

import { ReactNode, forwardRef } from 'react';

import { cn } from '@/lib/util';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: any; // @todo: Fix this type
  size?: string;
  href?: string;
  download?: boolean;
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className = '',  onClick, size = 'sm', href, download, disabled = false }, ref) => {

  const buttonClassName = 'inline-flex items-center justify-between gap-2 text-white hover:text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded font-black uppercase';
  const buttonDisabledClassName = 'bg-zinc-400 hover:bg-zinc-400 active:bg-zinc-400';
  
  let sizeClassName = 'text-sm py-2.5 px-6';

  if ( size === 'xs' ) {
    sizeClassName = 'text-xs py-2 px-4';
  } else if ( size === 'lg' ) {
    sizeClassName = 'text-lg py-3 px-5';
  }

  function handleOnClick(event: React.MouseEvent<HTMLElement>) {
    if ( disabled ) return;

    if ( typeof onClick === 'function' ) {
      onClick(event);
    }
  }

  if ( typeof href === 'string' ) {
    return (
      <a
        href={href}
        onClick={handleOnClick}
        className={cn(
          `${buttonClassName} ${sizeClassName}`,
          sizeClassName,
          disabled && buttonDisabledClassName,
          className,
        )}
        download={download}
      >
        { children }
      </a>
    );
  }

  return (
    <button
      ref={ref}
      onClick={handleOnClick}
      className={cn(
        `${buttonClassName} ${sizeClassName}`,
        sizeClassName,
        disabled && buttonDisabledClassName,
        className,
    )}
    >
      { children }
    </button>
  )
})

Button.displayName = 'Button';

export default Button;