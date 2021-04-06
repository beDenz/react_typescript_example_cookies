import { useState } from 'react'
import { Typography, Box, Link } from '@material-ui/core'
import { Filter, Search } from 'src/components/ui'
import { useStyles } from './style'
import { useHeaderHeight } from 'src/core/hooks'
import { Link as RouterLink } from 'react-router-dom'

const Header: React.FC = () => {
  const tempEvent = () => {
    let a
    return a
  }
  const height = useHeaderHeight(600)
  const styles = useStyles({ height })

  const [search, SetSearch] = useState('')
  const onSearch = (value: string) => {
    SetSearch(value)
  }

  return (
    <header className={styles.header}>
      <Link component={RouterLink} to={`/`} underline="none">
        <Typography
          gutterBottom
          variant="h1"
          component="h1"
          className={styles.title}
        >
          Air Recipes
        </Typography>
      </Link>
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
