import { Story, Meta } from '@storybook/react'
import { Tags, TagListProps } from './tags'

export default {
  title: 'Cookies/UI/Tags',
} as Meta

const Template: Story<TagListProps> = (args) => <Tags {...args} />

export const Primary = Template.bind({})
Primary.args = {
  data: [
    {
      id: 1,
      value: 60,
    },
  ],
}
