import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Link,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Tags } from 'src/components/ui'

interface ICardItem {
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

const useStyles = makeStyles({
  root: {
    maxWidth: 348,
    height: 384,
  },
  media: {
    height: 196,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  content: {
    height: 188,
    display: 'flex',
    flexDirection: 'column',
  },
  description: {
    display: '-webkit-box',
    '-webkit-line-clamp': 4,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
})

const ICard: React.FC<ICardProps> = ({ data }) => {
  const styles = useStyles()

  const {
    id,
    title,
    description,
    caloricity,
    cookTime,
    thumbnail,
    cuisine,
  } = data

  const tags = [
    {
      id: 'cookTime',
      value: `${cookTime / 60} min`,
    },
    {
      id: 'caloricity',
      value: `${caloricity} kCal`,
    },
    {
      id: 'cuisine',
      value: cuisine.title,
    },
  ]

  return (
    <Link href={`/${id}`} underline="none">
      <Card className={styles.root}>
        <CardMedia className={styles.media} image={thumbnail} title={title}>
          <Tags data={tags} />
        </CardMedia>
        <CardContent className={styles.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export { ICard }
