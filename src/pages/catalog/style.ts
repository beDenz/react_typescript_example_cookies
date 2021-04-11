import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    maxWidth: `${(1084 * 100) / 1280}%`,
    paddingTop: 632,
  },
  grid: {
    width: 'auto',
    flexDirection: 'row',
    margin: -10,
  },
  gridItem: {
    marginBottom: 24,
    padding: 10,
  },
})

export { useStyles }
