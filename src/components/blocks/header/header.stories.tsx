import { Story, Meta } from '@storybook/react'
import { Header } from './header'

export default {
  title: 'Cookies/Blocks/Header',
  component: Header,
} as Meta

const Template: Story = (args) => <Header {...args} />

export const Primary = Template.bind({})
