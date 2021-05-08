import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Container } from 'semantic-ui-react';
import Paths from './routes';
import './App.css';

const Routes = () => (Paths || []).map((item, idx) => <Route key={idx} exact={item.exact} path={item.path} component={item.component} />);

const App = () => {
  return (
    <Router>
      <Container>
        <Switch>
          <Routes/>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
