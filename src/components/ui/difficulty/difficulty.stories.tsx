import { Story, Meta } from '@storybook/react'
import { Difficulty, DifficultyProps } from './difficulty'

export default {
  title: 'Cookies/UI/Difficulty',
  component: Difficulty,
} as Meta

const Template: Story<DifficultyProps> = (args) => <Difficulty {...args} />

export const Easy = Template.bind({})
Easy.args = {
  type: 'easy',
}

export const Medium = Template.bind({})
Medium.args = {
  type: 'easy',
}

export const Hard = Template.bind({})
Hard.args = {
  type: 'easy',
}
