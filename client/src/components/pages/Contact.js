import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Button, TextField } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { sendMessage, setLoading, clearErrors } from '../../actions/navActions';
import { setAlert } from '../../actions/alertActions';

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: 30,
  },
  form: {
    padding: 30,
  },
  button: {
    justifyContent: 'start',

    textAlign: 'left',
  },
  insta: {
    backgroundColor: '#fc2a7c',
    marginLeft: 5,
    marginRight: 5,
    '&:hover': {
      backgroundColor: '#e0e0e0',
    },
  },
  facebook: {
    backgroundColor: '#0484ec',
    marginLeft: 5,
    marginRight: 5,
    '&:hover': {
      backgroundColor: '#e0e0e0',
    },
  },
  twitter: {
    backgroundColor: '#07a9eb',
    marginLeft: 5,
    marginRight: 5,
    '&:hover': {
      backgroundColor: '#e0e0e0',
    },
  },
  icon: {
    fontSize: 20,
  },
  field: {
    paddingBottom: 10,
    alignSelf: 'flex-start ',
  },

  message: {
    paddingBottom: 10,
    border: 1,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Contact = ({
  sendMessage,
  setLoading,
  loading,
  clearErrors,
  error,
  sent,
  setAlert,
}) => {
  const classes = useStyles();

  //const [chars_left, setChar] = useState(240);
  const [form, setState] = useState({
    name: '',
    email: '',
    message: '',
  });
  // const handleChange = (event) => {
  //   var input = event.target.value;
  //   setChar(240 - input.length);
  // };

  useEffect(() => {
    if (error) {
      if (error.errors) {
        setAlert(error.errors[0].msg, 'error');
      }
    } else if (sent) {
      setAlert('Form Submitted, We will get back to you soon!', 'success');
      clearForm();
    }
    clearErrors();
  }, [error, sent, setAlert, clearErrors]);

  const clearForm = () => {
    setState({
      name: '',
      email: '',
      message: '',
    });
  };

  const onNameChange = (event) => {
    setState({ ...form, name: event.target.value });
  };

  const onEmailChange = (event) => {
    setState({ ...form, email: event.target.value });
  };

  const onMessageChange = (event) => {
    setState({ ...form, message: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading();
    sendMessage(form);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant='h4' gutterBottom className={classes.title}>
          Contact
        </Typography>
        <Typography variant='h6' gutterBottom>
          Don’t hesitate to reach out with the contact information below, or
          send a message using the form.
        </Typography>
      </Grid>
      <Grid item container xs={12} sm={6} className={classes.title}>
        <Grid item xs={12}>
          <Typography variant='h4' gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant='h6' gutterBottom>
            Beirut, Lebanon
          </Typography>
          <Typography variant='h6' gutterBottom>
            <a
              style={{ textDecoration: 'none', color: 'red' }}
              href='mailto:samidounleb@gmail.com'
            >
              samidounleb@gmail.com
            </a>
          </Typography>
          <Typography variant='h6' gutterBottom>
            <a
              style={{ textDecoration: 'none', color: 'red' }}
              href='tel:0096181215467'
            >
              0096181215467
            </a>
          </Typography>

          <IconButton
            className={classes.insta}
            href='https://www.instagram.com/'
            color='primary'
          >
            <InstagramIcon color='primary' className={classes.icon} />
          </IconButton>
          <IconButton
            className={classes.facebook}
            href='https://www.facebook.com/'
            color='primary'
          >
            <FacebookIcon color='primary' className={classes.icon} />
          </IconButton>
          <IconButton
            className={classes.twitter}
            href='https://www.twitter.com/'
            color='primary'
          >
            <TwitterIcon color='primary' className={classes.icon} />
          </IconButton>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
      <Grid item xs={12} sm={5} className={classes.form}>
        <Typography variant='h4' gutterBottom>
          Send Us a Message
        </Typography>
        <TextField
          id='name'
          label='Name'
          variant='outlined'
          type='text'
          name='Name'
          value={form.name}
          placeholder='Please enter your name'
          onChange={onNameChange}
          fullWidth
          autoComplete='Name'
          className={classes.field}
          display='none'
        />
        <TextField
          id='email'
          label='Email'
          variant='outlined'
          type='email'
          name='email'
          value={form.email}
          placeholder='Your Email'
          onChange={onEmailChange}
          fullWidth
          autoComplete='email'
          className={classes.field}
          display='none'
        />
        <TextField
          id='message'
          label='Message'
          variant='outlined'
          type='text'
          name='message'
          value={form.message}
          placeholder='Your Message'
          onChange={onMessageChange}
          fullWidth
          className={classes.field}
          display='none'
          multiline={true}
          rows='5'
        />
        {/* <p>Characters Left: {chars_left}</p> */}
        <Grid item xs={12} className={classes.button}>
          <Button
            label='Submit'
            buttonstyle={{ borderRadius: 25 }}
            style={{ borderRadius: 25 }}
            variant='contained'
            color='secondary'
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Backdrop className={classes.backdrop} open={loading}>
            <CircularProgress color='inherit' />
          </Backdrop>
        </Grid>
      </Grid>
    </Grid>
  );
};
Contact.propTypes = {
  setLoading: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  sent: PropTypes.bool.isRequired,
  clearErrors: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  loading: state.nav.formLoading,
  error: state.nav.error,
  sent: state.nav.sent,
});
export default connect(mapStateToProps, {
  setLoading,
  sendMessage,
  clearErrors,
  setAlert,
})(Contact);
