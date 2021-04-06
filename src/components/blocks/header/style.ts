import { makeStyles } from '@material-ui/core/styles'
import img from 'src/assets/img/headerImg.png'

const useStyles = makeStyles({
  header: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    height: (props: { height: string | number }) => props.height,
    maxHeight: 600,
    minHeight: 300,
    paddingTop: 128,
    paddingLeft: 98,
    backgroundImage: `url(${img})`,
    backgroundPosition: 'right center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#FFFFFF',
    zIndex: 2,
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
