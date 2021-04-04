import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  instructions: {},
  instructionsItem: {
    alignItems: 'flex-start',
  },
  stepWrapper: {
    display: 'flex',
    alignItems: 'center',
    '&::after': {
      content: '"_"',
      display: 'block',
      opacity: 0,
      fontSize: 16,
      lineHeight: 1.5,
    },
  },
})

export { useStyles }
