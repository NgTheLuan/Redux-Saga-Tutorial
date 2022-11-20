import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';

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
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant='h5' component='h1'>
          Student Management 😎
        </Typography>

        <Box mt={4}>
          <Button fullWidth variant='contained' color='primary'>
            Đăng nhập
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
