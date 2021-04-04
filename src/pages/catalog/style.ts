import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    maxWidth: `${(1084 * 100) / 1280}%`,
  },
  grid: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  gridItem: {
    marginBottom: 24,
  },
})

export { useStyles }
