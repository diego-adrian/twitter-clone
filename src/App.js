import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useEffect, useState, useMemo } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Container } from 'semantic-ui-react';
import Paths from './routes';
import client from './apollo';
import AuthContext from './context/AuthContext';
import Storage from './plugins/Storage';
import './App.css';

const Routes = () => (Paths || []).map((item, idx) => <Route key={idx} exact={item.exact} path={item.path} component={item.component} />);

const Pages = ({ auth, setAuth }) => {
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    const token = Storage.get('token');
    if (!token && location.path !== '/login') {
      history.push('/login');
    } else {
      setAuth(token);
      history.push(location.path);
    }
  }, [location]);
  return <Routes/>;
}

const App = () => {
  const [auth, setAuth] = useState(null);
 
  const setUser = user => setAuth(user);

  const logout = () => {};

  const contextKeys = useMemo(() => ({
    auth,
    setUser,
    logout
  }), [auth]);

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={contextKeys}>
        <Router>
          <Container fluid>
            <Switch>
              <Pages auth={auth} setAuth={setAuth}/>
            </Switch>
          </Container>
        </Router>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;
