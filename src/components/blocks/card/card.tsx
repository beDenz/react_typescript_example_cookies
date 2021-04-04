import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Link,
} from '@material-ui/core'
import { Tags } from 'src/components/ui'

import { Link as RouterLink } from 'react-router-dom'

import { ICardProps } from './index'
import { useStyles } from './styles'

const ICard: React.FC<ICardProps> = ({ data }) => {
  if (!data) return null

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
    <Link component={RouterLink} to={`/post/${id}`} underline="none">
      <Card className={styles.root}>
        <CardMedia className={styles.media} image={thumbnail} title={title}>
          <Tags data={tags} />
        </CardMedia>
        <CardContent className={styles.content}>
          <Typography gutterBottom variant="h3" component="h2">
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
