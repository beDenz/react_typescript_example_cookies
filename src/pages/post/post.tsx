import { useStyles } from './style'
import { Container } from '@material-ui/core'
import { useParams, useLocation } from 'react-router-dom'

const Post: React.FC = () => {
  const param = useParams()
  const location = useLocation()
  // eslint-disable-next-line
  console.log('### POst', param, location)

  const styles = useStyles()
  return (
    <Container>
      <div className={styles.temp}></div>
    </Container>
  )
}

export { Post }
