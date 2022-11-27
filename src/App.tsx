import { Button } from '@material-ui/core';
import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import { authAction } from 'features/auth/authSlice';
import { LoginPage } from 'features/auth/pages/LoginPage';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <>
        <Button onClick={() => dispatch(authAction.logout())} color='primary'>
          Logout
        </Button>

        <Switch>
          <Route path='/login'>
            <LoginPage />
          </Route>

          <PrivateRoute path='/admin'>
            <AdminLayout />
          </PrivateRoute>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </>
    </div>
  );
}

export default App;
