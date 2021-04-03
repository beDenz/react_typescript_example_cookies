// import styles from './filter.module.scss'
import FilterListIcon from '@material-ui/icons/FilterList'
import { ButtonBase } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

export type FilterProps = {
  onClick: () => void
}

const useStyles = makeStyles({
  root: {
    width: 56,
    height: 56,
    borderRadius: 28,
    border: 1,
    borderStyle: 'solid',
    borderColor: '#dddddd',
  },
})

const Filter: React.FC<FilterProps> = ({ onClick }) => {
  const classes = useStyles()

  return (
    <ButtonBase classes={classes} onClick={onClick}>
      <FilterListIcon />
    </ButtonBase>
  )
}

export { Filter }
