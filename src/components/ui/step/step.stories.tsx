import { Story, Meta } from '@storybook/react'
import { Step, StepProps } from './step'

export default {
  title: 'Cookies/UI/Step',
  component: Step,
} as Meta

const Template: Story<StepProps> = (args) => <Step {...args} />

export const Primary = Template.bind({})
Primary.args = {
  index: 1,
}
