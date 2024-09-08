import { tv, VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import React from 'react';

const buttonStyle = tv({
  base: 'block border font-medium transition duration-200',
  variants: {
    variant: {
      primary: 'text-white border-primary-500 bg-primary-500 hover:bg-primary-400 active:bg-primary-600',
      secondary: 'bg-secondary-50/50 border-secondary-50/50 text-black hover:bg-secondary-200 active:bg-secondary-300',
      outline: ' text-slate-700 hover:border-slate-500 shadow-sm',
    },
    size: {
      small: 'text-xs px-2 py-1 rounded-md',
      medium: 'text-sm px-4 py-2 rounded-lg',
      large: 'text-base px-6 py-3 rounded-xl',
    },
    iconOnly: {
      true: 'p-2',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
    iconOnly: false,
  },
});

type TButton = VariantProps<typeof buttonStyle>;
interface ButtonProps extends TButton, React.ComponentPropsWithRef<'button'> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  return (
    <button {...props} className={twMerge(buttonStyle({ ...props }), props.className)}>
      <div className="flex items-center gap-2">
        {props.startContent}
        <div>{props.children}</div>
        {props.endContent}
      </div>
    </button>
  );
};
