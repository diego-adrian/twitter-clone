import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import { Container } from 'semantic-ui-react';
import Paths from './routes';
import client from './apollo';
import './App.css';

const Routes = () => (Paths || []).map((item, idx) => <Route key={idx} exact={item.exact} path={item.path} component={item.component} />);

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container>
          <Switch>
            <Routes/>
          </Switch>
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
