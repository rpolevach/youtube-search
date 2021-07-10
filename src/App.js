import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Favorites from './components/favourites';

import Login from './components/login';
import Navbar from './components/navbar';
import SearchPage from './components/search';
import SearchResult from './components/searchResult';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/result" component={SearchResult} />
        <Route exact path="/favorites" component={Favorites} />
      </Switch>
    </Router>
  );
}

export default App;
