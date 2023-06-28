---
to: packages/stories/<%= name %>.stories.tsx
---
const meta = {
  title: 'UI Component/<%= name %>',
  component: <%= name %>,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  } as any,
} satisfies Meta<typeof <%= name %>>

type Story = StoryObj<typeof meta>

export const Basic: Story = (args) => <<%= name %> {...args} />

export default meta
