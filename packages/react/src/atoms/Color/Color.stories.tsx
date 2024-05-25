import Color from './Color';
import type { Meta, StoryObj } from '@storybook/react';

// css
import '@ds.e/scss/lib/Utilities.css';
import { Spacing } from '@ds.e/foundation';

const meta: Meta<typeof Color> = {
  component: Color,
  argTypes: {
    width: {
      options: Object.values(Spacing),
    },
    height: {
      options: Object.values(Spacing),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Color>;

export const Custom: Story = {
  args: {
    hexCode: 'pink',
    width: 'xxl',
    height: 'xxl',
  },
};
