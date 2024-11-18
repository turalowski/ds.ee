import Button from './Button';
import type { Meta, StoryObj } from '@storybook/react';

import '@ds.ee/scss/lib/Button.css';

const meta: Meta<typeof Button> = {
  title: 'Design System/Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    title: 'Primary Button',
    children: 'Primary Button',
    variant: 'primary',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    title: 'Secondary Button',
    children: 'Secondary Button',
    variant: 'secondary',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Button',
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};