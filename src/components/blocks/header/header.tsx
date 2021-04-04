import { useState } from 'react'
import { Typography, Box } from '@material-ui/core'
import { Filter, Search } from 'src/components/ui'
import { useStyles } from './style'

const Header: React.FC = () => {
  const tempEvent = () => {
    let a
    return a
  }

  // Search
  const styles = useStyles()
  const [search, SetSearch] = useState('')
  const onSearch = (value: string) => {
    SetSearch(value)
  }

  return (
    <header className={styles.header}>
      <Typography
        gutterBottom
        variant="h1"
        component="h1"
        className={styles.title}
      >
        Air Recipes
      </Typography>
      <Typography
        gutterBottom
        variant="body1"
        component="p"
        className={styles.subtitle}
      >
        Best Recipes for Best People
      </Typography>
      <Box className={styles.interface}>
        <Box className={styles.searchWrapper}>
          <Search value={search} onChange={onSearch} />
        </Box>
        <Box>
          <Filter onClick={tempEvent} />
        </Box>
      </Box>
    </header>
  )
}

export { Header }
