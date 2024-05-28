import Color from './Color';
import type { Meta, StoryObj } from '@storybook/react';

// css
import '@ds.ee/scss/lib/Utilities.css';
import { Spacing } from '@ds.ee/foundation';

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
