import { Box } from '@material-ui/core'
import { useStyles } from './style'
import { useLocation, useHistory } from 'react-router-dom'
import { Filter } from 'src/components/blocks'
import { useState, useEffect } from 'react'

const Modal: React.FC = () => {
  const history = useHistory()
  const location = useLocation<{ modal: boolean }>()
  const styles = useStyles()

  const [isModal, setIsModal] = useState(false)

  useEffect(() => {
    return () => history.replace({ ...location, state: { modal: false } })
  }, [])

  useEffect(() => {
    setIsModal(location.state?.modal || false)
  }, [location])

  if (!isModal) return null

  return (
    <Box className={styles.root}>
      <Filter />
    </Box>
  )
}

export { Modal }
