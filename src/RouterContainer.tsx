import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Catalog, Post } from 'src/pages'

const RouterContainer: React.FC = () => {
  return (
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
  )
}

export { RouterContainer }
