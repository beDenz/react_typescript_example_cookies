import { makeStyles } from '@material-ui/core/styles'
import img from 'src/assets/img/headerImg.png'

const useStyles = makeStyles({
  header: {
    paddingTop: 128,
    paddingLeft: 98,
    backgroundImage: `url(${img})`,
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#FFFFFF',
  },
  title: {
    marginBottom: 0,
  },
  subtitle: {
    marginBottom: 32,
  },

  interface: {
    display: 'flex',
  },

  searchWrapper: {
    marginRight: 16,
  },
})

export { useStyles }
