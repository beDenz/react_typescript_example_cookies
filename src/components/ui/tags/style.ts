import { makeStyles } from '@material-ui/core/styles'

const useTagStyles = makeStyles({
  ul: {
    display: 'inline-flex',
    paddingRight: 16,
  },
  padding: {
    paddingLeft: 8,
    paddingRight: 0,
  },
  chip: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
})

export { useTagStyles }
