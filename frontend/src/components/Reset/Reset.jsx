import React from 'react';
import swal from 'sweetalert';
// import axios from 'axios';
//import userService from '../components/services/UserService';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
//import userService from "../services/UserService";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from './bg.jpg';
import { deepOrange } from '@material-ui/core/colors';
import apiService from '../../services/ApiService';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',

    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  },

  background: {
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  mainGrid: {
    marginTop: '20px',
  },
  paper: {
    justifyContent: 'center',
    margin: theme.spacing(8, 6),

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'inherit',
  },
  avatar: {
    margin: theme.spacing(1),
    //backgroundColor: theme.palette.secondary.main,
    //color: theme.palette.getContrastText(deepOrange[500]),
    //backgroundColor: deepOrange[500],
    //width: 86,
    //height: 86,
    //marginTop: '1px',
    //<Grid item sm={6} md={3} className={classes.background} />
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textField: {
    width: '95%',
    marginLeft: '20px',
    marginRight: 'auto',
    paddingBottom: 0,
    marginTop: '10px',
    fontWeight: 500,
  },
  input: {
    color: 'white',
    //backgroundColor: '#362245',
    height: 80,
    fontSize: '25px',
  },
  button: {
    width: '70%',
    height: 60,
    marginTop: '40px',
    fontSize: '20px',
    marginLeft: '125px',
  },
  checkBox: {
    color: 'white',
  },
  Link: {
    color: 'white',
    fontSize: '18px',
    marginTop: '40px',
  },
  SignText: {
    color: 'white',
    fontSize: '42px',
    marginBottom: '5px',
  },

  floatingLabelFocusStyle: {
    color: 'white',
    fontSize: '20px',
  },

  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const Reset = (props) => {
  /* const handlereset = (e) => {
    e.preventDefault();
    userService
      .passwordreset(token, { password })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });*/

  /* const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };
    axios.put(
      `/api/auth/passwordreset/${props.match.params.resetToken}`,
      {
        password,
      },
      config
    );
  };*/

  const classes = useStyles();
  const [password, setPassword] = React.useState('');
  const token = props.match.params.resetToken;

  const handlereset = (e) => {
    e.preventDefault();
    apiService
      .put('/api/auth/passwordreset/' + token, { password })
      .then((res) => {
        swal({
          title: 'Password Reset Successfully!',
          text: res.data.message,
          icon: 'success',
          button: 'Ok ',
        });
      })
      .catch((error) => {
        swal({
          title: 'Oops!',
          text: error.response.data,
          icon: 'error',
          button: 'ok ',
        });
        console.log(error);
      });
    /*userService
      .passwordreset(token, password)
      .then((res) => {
        swal({
          title: 'Password Reset Successfully!',
          text: res.message,
          icon: 'success',
          button: 'Ok ',
        });
      })
      .catch((error) => {
        swal({
          title: 'Oops! Token is Expired',
          text: error.response.data,
          icon: 'error',
          button: 'ok ',
        });
        console.log(error);
      });*/
  };
  return (
    <Grid container component='main' className={classes.root}>
      <Grid item sm={6} md={3} className={classes.background} />
      <Grid item style={{ backgroundColor: '#180c2b' }} md={6}>
        <div style={{ color: '#474745' }} className={classes.paper}>
          <Typography className={classes.SignText} component='h1' variant='h5'>
            Reset Password
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2} className={classes.mainGrid}>
              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  variant='filled'
                  margin='normal'
                  InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                  }}
                  InputProps={{
                    className: classes.input,
                  }}
                  required
                  fullWidth
                  //backgroundColor="#fcfaf7"
                  color='secondary'
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Grid>
            </Grid>

            <br />

            <Button
              justify='space-around'
              className={classes.button}
              fullWidth
              variant='contained'
              color='default'
              onClick={handlereset}
            >
              Update Password
            </Button>
            <Grid
              container
              justify='space-around'
              spacing={4}
              style={{ padding: 20 }}
            ></Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Reset;
