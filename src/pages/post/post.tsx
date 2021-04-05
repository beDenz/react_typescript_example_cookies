import { useStyles } from './style'
import { Container, Typography, Grid } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import {
  Instructions,
  Ingredients,
  Info,
  ImageView,
} from 'src/components/blocks'
import { useQuery } from 'react-query'
import { useInvalidatePostCache } from 'src/core/hooks'
import { QueryType } from './post.d'

const fetchPost = (id: string) =>
  fetch(`https://test.kode-t.ru/detail_${id}.json`).then((data) => {
    if (!data.ok) {
      throw new Error('Network response error')
    }

    return data.json()
  })

// eslint-disable-next-line
// const recipe = {
//   id: 1,
//   title: 'Parmesan Chicken Cutlets',
//   description: 'Such a simple, yet great recipe',
//   caloricity: 450,
//   thumbnail:
//     'http://img.sndimg.com/food/image/upload/w_450,c_fit/v1/img/recipes/18/53/42/qh75rY6tQmGTP0ytQcuD_Parmesan-Chicken-Cutlets-2.png',
//   images: [
//     'http://img.sndimg.com/food/image/upload/w_1280,c_fit/v1/img/recipes/18/53/42/qh75rY6tQmGTP0ytQcuD_Parmesan-Chicken-Cutlets-2.png',
//     'http://img.sndimg.com/food/image/upload/w_1280,c_fit/v1/img/recipes/15/86/11/picsJ0Izp.jpg',
//     'http://img.sndimg.com/food/image/upload/w_1280,c_fit/v1/img/recipes/24/90/61/aeYqikQREr4NA30arygh_IMG_0670.JPG',
//   ],
//   cuisine: {
//     id: 1,
//     title: 'Caribbean',
//   },
//   cookTime: 2100,
//   difficulty: 'easy',
//   ingredients: [
//     '1/4 cup parmesan cheese, grated',
//     '2 tablespoons dried Italian seasoned breadcrumbs',
//     '1/8 teaspoon paprika',
//     '1 teaspoon dried parsley',
//     '1/2 teaspoon garlic powder',
//     '1/4 teaspoon fresh ground pepper',
//     '4 (1/4 lb) boneless skinless chicken breast',
//   ],
//   instructions: [
//     'Preheat oven to 400 degrees',
//     'In resealable plastic bag, combine cheese, crumbs and all seasonings; shake well',
//     'Transfer mixture to plate; dip each chicken breast in cheese mixture, turning to coat all sides',
//     'Arrange on nonstick baking sheet',
//     'Bake until chicken is cooked through, 20-25 minutes',
//   ],
// }

const Post: React.FC = () => {
  const styles = useStyles()

  useInvalidatePostCache()

  const { id } = useParams<QueryType>()

  const { data, isLoading, isError } = useQuery('post', () => fetchPost(id))

  if (isLoading) return null
  if (isError) return null

  const { recipe } = data

  const {
    title,
    description,
    difficulty,
    ingredients,
    instructions,
    cookTime,
    cuisine,
    caloricity,
    images,
  } = recipe

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
          <ImageView data={images} />
        </Grid>
      </Grid>
    </Container>
  )
}

export { Post }
