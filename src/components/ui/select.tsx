import * as RadixSelect from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';
import { tv } from 'tailwind-variants';

const selectStyle = tv({
  slots: {
    trigger: 'border p-2 rounded-lg shadow-sm w-full flex justify-between',
    content:
      'overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]',
    selectItem: 'p-4 hover:outline-none hover:bg-primary-500 hover:text-white',
  },
});

interface SelectProps {
  caption: string;
  options: Record<string, string>[];
}

export const Select = ({ caption, options }: SelectProps) => {
  return (
    <RadixSelect.Root>
      <RadixSelect.Trigger className={selectStyle.slots.trigger}>
        <RadixSelect.Value placeholder={caption} />
        <RadixSelect.Icon className="text-violet11">
          <ChevronDown />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className={selectStyle.slots.content}>
          <RadixSelect.Viewport>
            {options.map(({ value, label }) => {
              return (
                <RadixSelect.Item value={value} className={selectStyle.slots.selectItem}>
                  <RadixSelect.ItemText>{label}</RadixSelect.ItemText>
                </RadixSelect.Item>
              );
            })}
          </RadixSelect.Viewport>
          <RadixSelect.Arrow />
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};
