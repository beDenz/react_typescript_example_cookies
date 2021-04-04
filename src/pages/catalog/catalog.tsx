import { ICard } from 'src/components/blocks'
import { Grid, Container } from '@material-ui/core'
import { useStyles } from './style'

const recipes = [
  {
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
  },
  {
    id: 2,
    title: 'Jerk Turkey Slow Cooker Soup',
    description:
      'This recipe contains turkey breast, black beans, chicken broth, diced tomatoes, onions and more',
    caloricity: 650,
    cookTime: 27000,
    thumbnail:
      'http://img.sndimg.com/food/image/upload/w_450,c_fit/v1/img/recipes/15/86/11/picsJ0Izp.jpg',
    cuisine: {
      id: 2,
      title: 'Greek',
    },
  },
  {
    id: 3,
    title: 'Chocolate Cupcakes',
    description:
      'Chocolate cupcakes are the ultimate party food. Make some for your next party!',
    caloricity: 900,
    cookTime: 2700,
    thumbnail:
      'http://img.sndimg.com/food/image/upload/w_450,c_fit/v1/img/recipes/24/90/61/aeYqikQREr4NA30arygh_IMG_0670.JPG',
    cuisine: {
      id: 3,
      title: 'French',
    },
  },
  {
    id: 4,
    title: 'Taco Soup',
    description:
      "This is a quick, throw together slow cooker soup with a Mexican flair. Teenagers love it. Serve topped with corn chips, shredded Cheddar cheese and a dollop of sour cream. Make sure you adjust the amount of chile peppers if you're sensitive about spicy foods",
    caloricity: 300,
    cookTime: 2700,
    thumbnail:
      'http://img.sndimg.com/food/image/upload/w_450,c_fit/v1/img/recipes/21/37/85/picvrWB0y.jpg',
    cuisine: {
      id: 5,
      title: 'Indian',
    },
  },
  {
    id: 5,
    title: 'Chicken Pot Pie',
    description:
      'A delicious chicken pie made from scratch with carrots, peas and celery',
    caloricity: 500,
    cookTime: 2100,
    thumbnail:
      'http://img.sndimg.com/food/image/upload/w_450,c_fit/v1/img/recipes/16/72/02/wivjoc8JSuKPdeNfC2tL_chicken%20pot%20pie%203.jpg',
    cuisine: {
      id: 4,
      title: 'Chinese',
    },
  },
  {
    id: 6,
    title: 'Mexican Casserole',
    description:
      'This is an easy and very tasty dish. I often substitute ground turkey and low fat dairy products and it is still delicious! Serve with chips, salsa and green salad',
    caloricity: 1200,
    cookTime: 3000,
    thumbnail:
      'http://img.sndimg.com/food/image/upload/w_450,c_fit/v1/img/recipes/13/58/14/pic83EsG0.jpg',
    cuisine: {
      id: 1,
      title: 'Caribbean',
    },
  },
  {
    id: 7,
    title: 'Roasted Vegetables',
    description: 'Very easy and delicious side dish',
    caloricity: 100,
    cookTime: 2400,
    thumbnail:
      'http://img.sndimg.com/food/image/upload/w_450,c_fit/v1/img/recipes/16/23/93/LXMOK3rhR8OBJgi3NFOn_022%20rstd%20veg.jpg',
    cuisine: {
      id: 5,
      title: 'Indian',
    },
  },
]

const Catalog: React.FC = () => {
  const styles = useStyles()

  return (
    <Container className={styles.container} disableGutters={true}>
      <Grid container className={styles.grid}>
        {recipes.map((item) => (
          <Grid item key={item.id} className={styles.gridItem}>
            <ICard data={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export { Catalog }
