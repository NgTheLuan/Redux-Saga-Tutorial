import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import { useAppDispatch } from 'app/hooks';
import { authAction } from '../authSlice';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignContent: 'center',
    minHeight: '100vh',
    padding: '300px 0 300px 0',
  },

  box: {
    padding: theme.spacing(3),
  },
}));

export function LoginPage() {
  const dispatch = useAppDispatch();
  const classes = useStyle();

  const handleLogin = () => {
    dispatch(
      authAction.login({
        username: '162865',
        password: 'luantgdd',
      })
    );
  };

  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant='h5' component='h1'>
          Student Management 😎
        </Typography>

        <Box mt={4}>
          <Button fullWidth variant='contained' color='primary' onClick={handleLogin}>
            Đăng nhập
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
