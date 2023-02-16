import React, { useEffect }  from 'react';
import './App.css';
import HomePage from './containers/HomePage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  { ProductListPage }  from './containers/ProductListPage/index';
import { isUserLoggedIn } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { ProductDetailsPage } from './containers/ProductDetailsPage/index';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/:productSlug/:productId/p" component={ProductDetailsPage}/>
            <Route path="/:slug" component={ProductListPage}/>
            
        </Switch>
      </Router>
    </div>
  );
}

export default App;






