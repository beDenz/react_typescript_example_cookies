import { useStyles } from './style'
import { Typography } from '@material-ui/core'
import { List, ListItem } from '@material-ui/core'
import { IngredientsProps } from './ingredients.d'

const Ingredients: React.FC<IngredientsProps> = ({ data }) => {
  if (!data) return null

  const styles = useStyles()

  return (
    <div>
      <Typography gutterBottom variant="h3" component="h3">
        Ingredients
      </Typography>
      <List className={styles.ingredients}>
        {data.map((item: string, index: number) => (
          <ListItem
            key={index}
            className={styles.ingredientsItem}
            disableGutters
          >
            <Typography variant="body1" component="span">
              {item}
            </Typography>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export { Ingredients }
