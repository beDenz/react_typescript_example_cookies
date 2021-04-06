import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: 348,
    height: 384,
    '&:hover': {
      boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
    },
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
