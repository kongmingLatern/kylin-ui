import type { Meta, StoryObj } from '@storybook/react'
import { Password } from '@components/Input'
import { Lock, Unlock } from '@packages/icon'

const meta = {
  title: 'UI Component/Password',
  component: Password,
  tags: ['autodocs'],
} satisfies Meta<typeof Password>

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Password
      suffix={(visible, onClick) =>
        visible ? (
          <Unlock
            width={20}
            height={20}
            onClick={onClick}
          />
        ) : (
          <Lock width={20} height={20} onClick={onClick} />
        )
      }
    />
  ),
}

export const CustomShowPassword: Story = {
  render: () => (
    <Password
      onShowPassword={(visible, setVisible) => {
        setVisible && setVisible(!visible)
      }}
    />
  ),
}

export default meta
