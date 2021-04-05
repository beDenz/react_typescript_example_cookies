import FilterListIcon from '@material-ui/icons/FilterList'
import { ButtonBase } from '@material-ui/core'
import { useStyles } from './style'
import { FilterProps } from './filter.d'

const Filter: React.FC<FilterProps> = ({ onClick }) => {
  const classes = useStyles()

  return (
    <ButtonBase classes={classes} onClick={onClick}>
      <FilterListIcon />
    </ButtonBase>
  )
}

export { Filter }
