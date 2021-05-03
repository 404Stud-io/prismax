import React, { Suspense, lazy, useContext } from "react";
// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "../components/Loading";
// Context
import { Context } from "../utils/context";

const PublicLanding = lazy(() => import("../pages/PublicLanding"));
const Landing = lazy(() => import("../pages/Landing"));

export default function Routes() {
  const { login, setLogin, isAuth, setIsAuth } = useContext(Context);
  
  if( localStorage.getItem('token')) {
    setLogin(true)
  }
  if (login && localStorage.getItem("token") ) {
    setIsAuth(true);
  }

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        {isAuth ? (
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={PublicLanding} />
          </Switch>
        )}
      </Suspense>
    </Router>
  );
}
