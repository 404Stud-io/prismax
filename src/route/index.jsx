import React, { Suspense, lazy } from 'react'
// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from '../components/Loading';


const Landing = lazy(() => import('../pages/Landing'));
const FormLanding = lazy(() => import('../pages/FormLanding'));

export default function Routes() {
  return (
    <Router>
      <Suspense fallback={<Loading/>}>
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/form" component={FormLanding} />
        </Switch>
      </Suspense>
    </Router>
  )
}