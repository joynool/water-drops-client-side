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

function App ()
{
  return (
    <Router>
      <Header />
      <Switch>
        <Route>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
