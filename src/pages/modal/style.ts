import { makeStyles } from '@material-ui/core/styles'

// eslint-disable-next-line
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 10,
  },
}))

export { useStyles }
