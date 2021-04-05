export enum DifficultyDescriptionList {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard',
}

export type DifficultyKeyList = keyof typeof DifficultyDescriptionList

export type DifficultyProps = {
  type: DifficultyKeyList
}
