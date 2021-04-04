import { makeStyles } from '@material-ui/core/styles'

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

export { useStyles }
