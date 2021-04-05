import { Story, Meta } from '@storybook/react'
import { Search, SearchProps } from './index'

export default {
  title: 'Cookies/UI/Search',
  component: Search,
} as Meta

const Template: Story<SearchProps> = (args) => <Search {...args} />

export const Primary = Template.bind({})
Primary.args = {}
