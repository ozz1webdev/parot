import styles from './App.module.css';
import NavBar from './components/navbar';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import './api/axiosDefaults';
import Register from './pages/auth/register';
import Login from './pages/auth/login';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home Page</h1> } />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route render={() => <h1>Page Not Found</h1> } />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
