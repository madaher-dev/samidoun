import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Background1 from '../../images/home1.jpg';

const useStyles = makeStyles((theme) => ({
  margin: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  title: {
    paddingTop: 30,
  },
  banner1: {
    backgroundImage: `url(${Background1})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: 587,
  },
  content: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    alignContent: 'middle',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  par: {
    textAlign: 'left',
    padding: 10,
  },
  buttons: {
    justifyContent: 'flex-start',
    padding: 10,
  },
  button: {
    margin: 10,
  },
}));

const Musicians = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.title}>
        <Typography variant='h3' gutterBottom>
          To Musicians
        </Typography>
      </Grid>
      <Grid item container xs={12} className={classes.banner1}>
        <Grid item container xs={12} className={classes.content}>
          <Grid item container xs={10} sm={6}>
            <Grid item xs={12}>
              <Typography variant='h3' gutterBottom>
                Support a musician
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6' gutterBottom className={classes.par}>
                Through Samidoun, you can help out a musician by either
                supporting financially or donating an instrument.
              </Typography>
            </Grid>

            <Grid container item xs={12} className={classes.buttons}>
              <Button
                label='Submit'
                buttonstyle={{ borderRadius: 25 }}
                style={{ borderRadius: 25 }}
                variant='contained'
                color='secondary'
                href='/about'
                className={classes.button}
              >
                Financial Support
              </Button>
              <Button
                label='Submit'
                buttonstyle={{ borderRadius: 25 }}
                style={{ borderRadius: 25 }}
                variant='contained'
                color='secondary'
                href='/about'
                className={classes.button}
              >
                Donate an Instrument
              </Button>
            </Grid>
          </Grid>
          <Grid item container xs={10} sm={6}>
            <Grid item xs={12}>
              <Typography variant='h3' gutterBottom>
                Musicians that need support
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6' gutterBottom className={classes.par}>
                If you are a musician that lost their instruments or sound
                device during the Beirut explosion, let us know! We are on a
                mission to combine our resources to try and help!
              </Typography>
            </Grid>

            <Grid container item xs={12} className={classes.buttons}>
              <Button
                label='Submit'
                buttonstyle={{ borderRadius: 25 }}
                style={{ borderRadius: 25 }}
                variant='contained'
                color='secondary'
                href='/about'
                className={classes.button}
              >
                Get Support
              </Button>
              <Button
                label='Submit'
                buttonstyle={{ borderRadius: 25 }}
                style={{ borderRadius: 25 }}
                variant='contained'
                color='secondary'
                href='/about'
                className={classes.button}
              >
                Available Instruments
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Musicians;
