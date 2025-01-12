import type { Meta, StoryObj } from '@storybook/react'
import { StyledButton } from './index'

const meta: Meta<typeof StyledButton> = {
  title: 'Components/StyledButton',
  component: StyledButton,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['primary', 'success', 'transparent'] },
    },
  },
}

export default meta
type Story = StoryObj<typeof StyledButton>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success Button',
  },
}

export const Transparent: Story = {
  args: {
    variant: 'transparent',
    children: 'Transparent Button',
  },
}
