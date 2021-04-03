import { Story, Meta } from '@storybook/react'
import { Filter, FilterProps } from './filter'

export default {
  title: 'Cookies/UI/Filter',
  component: Filter,
} as Meta

const Template: Story<FilterProps> = (args) => <Filter {...args} />

export const Primary = Template.bind({})
Primary.args = {}
