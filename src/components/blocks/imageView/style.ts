import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    overflow: 'hidden',
  },
  main: {
    width: '100%',
    height: 355,
    marginBottom: 16,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  thumbnails: {
    display: 'flex',
  },
  thumbnail: {
    width: 56,
    height: 56,
    marginRight: 8,
  },

  activeThumbnai: {
    width: '100%',
    height: '100%',
    border: '2px solid #000000',
    opacity: 0,
    transition: 'opacity 0.3s',
  },
  on: {
    opacity: 1,
  },
})

export { useStyles }
