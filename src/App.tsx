import { Container } from '@material-ui/core'
import { Header } from 'src/components/blocks'
import { QueryProvider } from './QueryProvider'
import { RouterContainer } from './RouterContainer'

const App: React.FC = () => {
  return (
    <QueryProvider>
      <Container maxWidth={false} disableGutters={true}>
        <Header />
        <RouterContainer />
      </Container>
    </QueryProvider>
  )
}

export { App }
