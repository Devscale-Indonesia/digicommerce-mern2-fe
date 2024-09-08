import { tv, VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import React from 'react';

const inputStyle = tv({
  base: 'block w-full border font-medium placeholder:font-light placeholder:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 shadow-sm transition duration-200',
  variants: {
    size: {
      small: 'text-sm px-2 py-1 rounded-md',
      medium: 'text-base px-4 py-2 rounded-lg',
      large: 'text-lg px-6 py-3 rounded-xl',
    },
    withIcon: {
      true: 'pl-12 pr-4',
    },
  },
  defaultVariants: {
    size: 'medium',
    withIcon: false,
  },
});

type TInput = VariantProps<typeof inputStyle>;
interface InputProps extends TInput, Omit<React.ComponentPropsWithRef<'input'>, 'size'> {
  icon?: React.ReactNode;
}

export const Input = (props: InputProps) => {
  return (
    <div className="relative flex gap-2">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300">{props.icon}</div>
      <input {...props} size={undefined} className={twMerge(inputStyle({ ...props }), props.className)} />
    </div>
  );
};
