import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MessagesList from './components/MessagesList';
import MessageForm from './components/MessageForm';
import Navbar from './components/Navbar';
import 'bootswatch/dist/lux/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container pt-5">
        <Switch>
          <Route exact path="/" component={MessagesList} />
          <Route exact path="/new-message" component={MessageForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
