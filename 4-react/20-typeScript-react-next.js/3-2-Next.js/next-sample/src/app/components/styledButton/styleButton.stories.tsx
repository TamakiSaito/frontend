import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { StyledButton } from './index'

const meta: Meta<typeof StyledButton> = {
  title: 'Components/StyledButton',
  component: StyledButton,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['primary', 'success', 'transparent'] },
    },
    onClick: {
      action: 'clicked'
    }
  },
}


type PrimaryProps = {
  incrementAction: (e: React.MouseEvent, count: number) => void;
};


export default meta
type Story = StoryObj<typeof StyledButton>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    onClick: () => console.log('Button clicked'),
  },
  render: (args) => {
    const [count, setCount] = useState(0);
    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (args.onClick) {
        args.onClick(e);
      }
      setCount((c) => c + 1);
    };

    return (
      <StyledButton {...args} variant="primary" onClick={onClick}>
        Count: {count}
      </StyledButton>
    )
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
