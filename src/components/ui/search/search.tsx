import styles from './search.module.scss'
import CancelIcon from '@material-ui/icons/Cancel'
import SearchIcon from '@material-ui/icons/Search'
import clsx from 'clsx'

export type SearchProps = {
  value: string
  onChange: (value: string) => void
}

const Search: React.FC<SearchProps> = ({ value = '', onChange }) => {
  return (
    <div className={styles.search}>
      <SearchIcon className={styles.icon} />
      <input type="text" value={value} />
      <label
        className={clsx(styles.label, {
          [styles.labelOff]: value,
        })}
      >
        Search
      </label>
      <CancelIcon
        className={clsx(styles.btn, {
          [styles.btnOn]: value,
        })}
        classes={{
          root: styles.btnAnimation,
        }}
        onClick={() => onChange('')}
      />
    </div>
  )
}

export { Search }
