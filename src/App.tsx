import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Container } from '@material-ui/core'
import { Header } from 'src/components/blocks'
import { Catalog, Post } from 'src/pages'

const App: React.FC = () => {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Catalog />
          </Route>
          <Route exact path="/post">
            <Redirect to="/" />
          </Route>
          <Route path="/post/:id">
            <Post />
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}

export { App }
