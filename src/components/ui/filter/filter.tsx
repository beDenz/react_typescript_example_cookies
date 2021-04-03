import styles from './filter.module.scss'
import FilterListIcon from '@material-ui/icons/FilterList'
import { ButtonBase } from '@material-ui/core'

export type FilterProps = {
  onClick: () => void
}

const Filter: React.FC<FilterProps> = ({ onClick }) => {
  return (
    <ButtonBase
      classes={{
        root: styles.root,
      }}
    >
      <FilterListIcon />
    </ButtonBase>
  )
}

export { Filter }
