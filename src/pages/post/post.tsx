import { useStyles } from './style'
import { Container } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Instructions, Ingredients, Info } from 'src/components/blocks'

// eslint-disable-next-line
const recipe = {
  id: 1,
  title: 'Parmesan Chicken Cutlets',
  description: 'Such a simple, yet great recipe',
  caloricity: 450,
  thumbnail:
    'http://img.sndimg.com/food/image/upload/w_450,c_fit/v1/img/recipes/18/53/42/qh75rY6tQmGTP0ytQcuD_Parmesan-Chicken-Cutlets-2.png',
  images: [
    'http://img.sndimg.com/food/image/upload/w_1280,c_fit/v1/img/recipes/18/53/42/qh75rY6tQmGTP0ytQcuD_Parmesan-Chicken-Cutlets-2.png',
  ],
  cuisine: {
    id: 1,
    title: 'Caribbean',
  },
  cookTime: 2100,
  difficulty: 'easy',
  ingredients: [
    '1/4 cup parmesan cheese, grated',
    '2 tablespoons dried Italian seasoned breadcrumbs',
    '1/8 teaspoon paprika',
    '1 teaspoon dried parsley',
    '1/2 teaspoon garlic powder',
    '1/4 teaspoon fresh ground pepper',
    '4 (1/4 lb) boneless skinless chicken breast',
  ],
  instructions: [
    'Preheat oven to 400 degrees',
    'In resealable plastic bag, combine cheese, crumbs and all seasonings; shake well',
    'Transfer mixture to plate; dip each chicken breast in cheese mixture, turning to coat all sides',
    'Arrange on nonstick baking sheet',
    'Bake until chicken is cooked through, 20-25 minutes',
  ],
}

interface QueryType {
  id: string
}

const Post: React.FC = () => {
  const styles = useStyles()

  const { id } = useParams<QueryType>()
  // eslint-disable-next-line
  console.log('### POst', id)

  const data = recipe

  const {
    title,
    description,
    difficulty,
    ingredients,
    instructions,
    cookTime,
    cuisine,
    caloricity,
  } = data

  return (
    <Container className={styles.container} disableGutters>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Typography gutterBottom variant="h2" component="h2">
            {title}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {description}
          </Typography>
          <Info
            difficulty={difficulty}
            time={cookTime}
            cuisine={cuisine}
            caloricity={caloricity}
          />
          <Ingredients data={ingredients} />
          <Instructions data={instructions} />
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom variant="body1" component="p">
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export { Post }
