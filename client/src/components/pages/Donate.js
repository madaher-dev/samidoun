import React, { useState } from 'react';
import { Grid, Button, TextField } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { getSession, clearSession } from '../../actions/paymentActions';

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: 30,
  },
  field: {
    padding: 10,
    alignSelf: 'flex-start ',
  },
  form: {
    justifyContent: 'center',
  },
}));

const Donate = ({
  getSession,
  sessionStatus,
  sessionID,
  clearSession,
  orderID,
}) => {
  const classes = useStyles();

  const [amount, setAmount] = useState(0);

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };
  const handleSession = (event) => {
    event.preventDefault();

    getSession(amount);
  };
  const handleBack = (event) => {
    event.preventDefault();
    clearSession();
  };

  window.Checkout.configure({
    merchant: 'TEST222206018001',
    order: {
      amount,
      currency: 'USD',
      description: 'Donation',
      orderID,
    },
    session: {
      id: sessionID,
    },
    interaction: {
      operation: 'PURCHASE',
      merchant: {
        name: 'Samidoun',
        address: {
          line1: '200 Sample St',
          line2: '1234 Example Town',
        },
      },
    },
  });

  const handlePay = (event) => {
    event.preventDefault();
    window.Checkout.showPaymentPage();
  };
  if (sessionStatus === 'success') {
    return (
      <Grid container className={classes.form}>
        <Grid item xs={12} sm={6} className={classes.title}>
          <Typography variant='h6'>
            Your card will be charged the following ammount in USD{' '}
          </Typography>
          <Typography variant='h6'>$ {amount} </Typography>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.title}>
          <Button
            label='Back'
            buttonstyle={{ borderRadius: 25 }}
            style={{ borderRadius: 25 }}
            variant='contained'
            color='secondary'
            onClick={handleBack}
          >
            Change Amount
          </Button>
          <Button
            label='Pay'
            buttonstyle={{ borderRadius: 25 }}
            style={{ borderRadius: 25 }}
            variant='contained'
            color='secondary'
            onClick={handlePay}
          >
            Pay Now
          </Button>
        </Grid>
      </Grid>
    );
  } else if (sessionStatus === 'fail') return <div>Fail</div>;
  else {
    return (
      <Grid container className={classes.form}>
        <Grid item xs={12} sm={6} className={classes.title}>
          <Typography variant='h6'>Donate Directly to Samidoun</Typography>
          <TextField
            id='amount'
            label='Donation Amount in $'
            variant='outlined'
            type='number'
            name='Amount'
            placeholder='Please enter your donation amount'
            fullWidth
            autoComplete='Amount'
            className={classes.field}
            display='none'
            onChange={handleAmount}
          />

          <Button
            label='Next'
            buttonstyle={{ borderRadius: 25 }}
            style={{ borderRadius: 25 }}
            variant='contained'
            color='secondary'
            onClick={handleSession}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    );
  }
};

Donate.propTypes = {
  getSession: PropTypes.func.isRequired,
  sessionStatus: PropTypes.string,
  sessionID: PropTypes.string,
  orderID: PropTypes.string,
  clearSession: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  sessionStatus: state.pay.sessionStatus,
  sessionID: state.pay.sessionID,
});
export default connect(mapStateToProps, {
  getSession,
  clearSession,
})(Donate);
