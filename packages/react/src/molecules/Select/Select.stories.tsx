import React from 'react';
import Select from './Select';
import type { Meta, StoryObj } from '@storybook/react';

import '@ds.ee/scss/lib/Select.css';

const meta: Meta<typeof Select> = {
  title: 'Design System/Molecules/Select',
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

const options = [
  {
    label: 'Strict Black',
    value: 'strict-black',
  },
  {
    label: 'Heavenly Green',
    value: 'heavenly-green',
  },
  {
    label: 'Sweet Pink',
    value: 'pink',
  },
];

export const Common: Story = {
  render: () => <Select options={options} />
};

export const RenderOption: Story = {
  render: () => (
    <Select
      options={options}
      renderOption={({ getOptionRecommendedProps, option, isSelected }) => (
        <span {...getOptionRecommendedProps()}>
          {option.label} {isSelected ? 'SELECTED' : ''}
        </span>
      )}
    />
  )
};

export const CustomLabel: Story = {
  render: () => (
    <Select label="Select a color" options={options} />
  )
};
