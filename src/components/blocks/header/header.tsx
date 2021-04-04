import { useState } from 'react'
import { Typography, Box } from '@material-ui/core'
import { Filter, Search } from 'src/components/ui'
import { makeStyles } from '@material-ui/core/styles'
import img from 'src/assets/img/headerImg.png'

const useStyles = makeStyles({
  header: {
    paddingTop: 128,
    paddingLeft: 98,
    backgroundImage: `url(${img})`,
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
  },
  title: {
    marginBottom: 0,
  },
  subtitle: {
    marginBottom: 32,
  },

  interface: {
    display: 'flex',
  },

  searchWrapper: {
    marginRight: 16,
  },
})

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
