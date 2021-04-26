import React, { Suspense, lazy, useContext } from "react";
// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "../components/Loading";
// Context
import { Context } from "../utils/context";

const Landing = lazy(() => import("../pages/Landing"));
const PublicLanding = lazy(() => import("../pages/PublicLanding"));

export default function Routes() {
  const { login, setLogin, isAuth, setIsAuth } = useContext(Context);

  console.log(login, localStorage.getItem("token"));
  
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
            <Route exact path="/" component={PublicLanding} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        )}
      </Suspense>
    </Router>
  );
}
