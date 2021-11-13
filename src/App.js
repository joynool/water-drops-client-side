import './App.css';
import
{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import ExploreProducts from './Pages/ExploreProducts/ExploreProducts';
import Orders from './Pages/Orders/Orders';
import ReviewItem from './Pages/Home/Reviews/ReviewItem/ReviewItem';
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Authentication/Login/Login';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import Payment from './Pages/Dashboard/Payment/Payment';
import Reviews from './Pages/Home/Reviews/Reviews/Reviews';

/*------------------------------------------------------------------
Use context API to pass Firebase data and implement React router DOM
--------------------------------------------------------------------*/
function App ()
{
  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/explore-product">
              <ExploreProducts />
            </Route>
            <Route path="/reviews">
              <Reviews />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/review-item">
              <ReviewItem />
            </PrivateRoute>
            <PrivateRoute path="/order/:id">
              <Orders />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/my-order">
              <MyOrder />
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment />
            </PrivateRoute>
            <Route>
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
