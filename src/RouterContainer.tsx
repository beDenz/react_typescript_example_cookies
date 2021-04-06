import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom'
import { Catalog, Post } from 'src/pages'
import { ScrollToTop } from 'src/components/ScrollToTop'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Aimated: React.FC = () => {
  const location = useLocation()

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="page" timeout={300}>
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
    </Router>
  )
}

export { RouterContainer }

// const RouterContainer: React.FC = ({ children }) => {
//   // eslint-disable-next-line
//   const location = useLocation()
//   // eslint-disable-next-line
//   console.log('location', location)

//   return (
//     <Router>
//       <ScrollToTop />
//       {children}
//       <TransitionGroup>
//         <CSSTransition classNames="fade" timeout={300}>
//           <Switch>
//             <Route exact path="/">
//               <Catalog />
//             </Route>
//             <Route exact path="/post">
//               <Redirect to="/" />
//             </Route>
//             <Route path="/post/:id">
//               <Post />
//             </Route>
//           </Switch>
//         </CSSTransition>
//       </TransitionGroup>
//     </Router>
//   )
// }
