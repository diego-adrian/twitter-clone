import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Container } from 'semantic-ui-react';
import Paths from './routes';
import client from './apollo';
import './App.css';

const Routes = () => (Paths || []).map((item, idx) => <Route key={idx} exact={item.exact} path={item.path} component={item.component} />);

const Pages = () => {
  const location = useLocation();
  const history = useHistory();
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!user && location.path !== '/login') {
      history.push('/login');
    }
  }, [location]);
  return <Routes/>;
}

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container fluid>
          <Switch>
            <Pages/>
          </Switch>
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
