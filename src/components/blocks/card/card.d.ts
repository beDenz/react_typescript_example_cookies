export interface ICardItem {
  id: number
  title: string
  description: string
  caloricity: number
  cookTime: number
  thumbnail: string
  cuisine: {
    id: number
    title: string
  }
}

export type ICardProps = {
  data: ICardItem
}
