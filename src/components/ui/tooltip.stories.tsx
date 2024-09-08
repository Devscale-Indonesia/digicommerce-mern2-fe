import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './tooltip';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const BasicTooltip: Story = {
  args: {
    children: 'Hello',
    message: 'Hello from Tooltip',
  },
};
