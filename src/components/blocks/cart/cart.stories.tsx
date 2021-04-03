import { Story, Meta } from '@storybook/react'
import { ICard, ICardProps } from './cart'

const data = {
  id: 1,
  title: 'Parmesan Chicken Cutlets',
  description: 'Such a simple, yet great recipe',
  caloricity: 450,
  cookTime: 2100,
  thumbnail:
    'http://img.sndimg.com/food/image/upload/w_450,c_fit/v1/img/recipes/18/53/42/qh75rY6tQmGTP0ytQcuD_Parmesan-Chicken-Cutlets-2.png',
  cuisine: {
    id: 1,
    title: 'Caribbean',
  },
}

export default {
  title: 'Cookies/Blocks/Card',
  component: ICard,
} as Meta

const Template: Story<ICardProps> = (args) => <ICard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  data,
}
