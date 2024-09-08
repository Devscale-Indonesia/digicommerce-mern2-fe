import { tv, VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import React from 'react';

const textareaStyle = tv({
  base: 'block w-full border font-medium placeholder:font-light placeholder:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 shadow-sm transition duration-200',
  variants: {
    size: {
      small: 'text-sm px-2 py-1 rounded-md',
      medium: 'text-base px-4 py-2 rounded-lg',
      large: 'text-lg px-6 py-3 rounded-xl',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

type TTextarea = VariantProps<typeof textareaStyle>;
interface TextareaProps extends TTextarea, React.ComponentPropsWithRef<'textarea'> {
  icon?: React.ReactNode;
}

export const Textarea = (props: TextareaProps) => {
  return <textarea {...props} className={twMerge(textareaStyle({ ...props }), props.className)} />;
};
