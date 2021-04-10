import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom'
import { Catalog, Post, Modal } from 'src/pages'
import { ScrollToTop } from 'src/components/ScrollToTop'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Aimated: React.FC = () => {
  const location = useLocation()

  return (
    <TransitionGroup className="page">
      <CSSTransition
        key={location.pathname}
        classNames="page"
        timeout={1000}
        unmountOnExit
      >
        <div>
          <Switch location={location}>
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
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}

const RouterContainer: React.FC = ({ children }) => {
  return (
    <Router>
      <ScrollToTop />
      {children}
      <Aimated />
      <Modal />
    </Router>
  )
}

export { RouterContainer }
