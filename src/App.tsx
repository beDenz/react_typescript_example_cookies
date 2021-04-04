import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { Header } from 'src/components/blocks'
import { Catalog, Post } from 'src/pages'

const App: React.FC = () => {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Header />
      <Router>
        <Switch>
          <Route path="/">
            <Catalog />
          </Route>
          <Route path="/post">
            <Post />
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}

export { App }
