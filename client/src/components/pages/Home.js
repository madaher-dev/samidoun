import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Background1 from '../../images/home1.jpg';
import Background2 from '../../images/home2.jpg';
import Background3 from '../../images/home3.jpg';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  banner1: {
    backgroundImage: `url(${Background1})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: 587,
  },
  banner2: {
    backgroundImage: `url(${Background2})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: 587,
  },
  banner3: {
    backgroundImage: `url(${Background3})`,
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
  },
  seperator: {
    minHeight: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  seperator_line: {
    minHeight: 2,
    backgroundColor: 'red',
  },
  seperator_line2: {
    minHeight: 2,
    backgroundColor: 'white',
  },
  centerDiv: {
    minHeight: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item container xs={12} className={classes.banner1}>
        <Grid item container xs={12} className={classes.content}>
          <Grid item container xs={10} sm={6}>
            <Grid item xs={12}>
              <Typography variant='h3' gutterBottom>
                About Samidoun
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6' gutterBottom>
                Samidoun provides a direct peer-to-peer contribution network for
                persons in need of humanitarian support, through direct cash
                assistance to beneficiaries following field verification and
                expert review.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6' gutterBottom>
                يوفر صامدون شبكة دعم مالية وبشرية مباشرة للمتضررين بعد إجراء
                عمليات التمحيص والتدقيق الضرورية على أيدي الشركاء والخبراء
                محليين.
              </Typography>
              <Grid item xs={12}>
                <Button
                  label='Submit'
                  buttonstyle={{ borderRadius: 25 }}
                  style={{ borderRadius: 25 }}
                  variant='contained'
                  color='secondary'
                >
                  More about Samidoun
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={12} className={classes.seperator}>
        <Grid item xs={1} className={classes.seperator_line}></Grid>
      </Grid>
      <Grid item container xs={12} className={classes.banner2}>
        <Grid item container xs={12} className={classes.content}>
          <Grid item container xs={10} sm={6}>
            <Grid item xs={12}>
              <Typography variant='h4' gutterBottom>
                How You Can Help كيف يمكنك المساعدة
              </Typography>
            </Grid>
            <Grid item container xs={12} className={classes.seperator}>
              <Grid item xs={2} className={classes.seperator_line2}></Grid>
            </Grid>
            <Grid item container xs={12} className={classes.centerDiv}>
              <Grid item xs={12} sm={6}>
                <Typography variant='h6'>Direct Contribution To Us</Typography>
                <Typography variant='h6' gutterBottom>
                  مساهمة لصامدون
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                  Make a general contribution to the Samidoun Coalition
                </Typography>
                <Button
                  label='Submit'
                  buttonstyle={{ borderRadius: 25 }}
                  style={{ borderRadius: 25 }}
                  variant='contained'
                  color='secondary'
                >
                  To Samidoun
                </Button>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Typography variant='h6'>Peer To peer Contribution</Typography>
                <Typography variant='h6' gutterBottom>
                  مساهمة مباشرة
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                  Browse and make a direct cash contribution to a person in need
                </Typography>
                <Button
                  label='Submit'
                  buttonstyle={{ borderRadius: 25 }}
                  style={{ borderRadius: 25 }}
                  variant='contained'
                  color='secondary'
                >
                  To People in Need
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={12} className={classes.seperator}>
        <Grid item xs={1} className={classes.seperator_line}></Grid>
      </Grid>
      <Grid item container xs={12} className={classes.banner3}>
        <Grid item container xs={12} className={classes.content}>
          <Grid item container xs={10} sm={6}>
            <Grid item xs={12}>
              <Typography variant='h5' gutterBottom>
                Are you a musician? Did you lose your instrument? هل أنت موسيقي/
                موسيقية؟ هل فقدت آلة موسيقية أو جهاز صوت؟
              </Typography>
              <Typography variant='h3' gutterBottom>
                Let us know!
              </Typography>
              <Typography variant='h6' gutterBottom>
                We will help you restore your losses!
              </Typography>
              <Button
                label='Submit'
                buttonstyle={{ borderRadius: 25 }}
                style={{ borderRadius: 25 }}
                variant='contained'
                color='secondary'
              >
                Fill in this form
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={12} className={classes.seperator}>
        <Grid item xs={1} className={classes.seperator_line}></Grid>
      </Grid>
      <Grid item container xs={12} className={classes.banner3}>
        <Grid item container xs={12} className={classes.content}>
          <Grid item container xs={10} sm={6}>
            <Grid item xs={12}>
              <Typography variant='h5' gutterBottom>
                Do you know anyone who needs support? / هل تعرف أحد يريد الدعم؟
              </Typography>
              <Typography variant='h3' gutterBottom>
                Let us know!
              </Typography>
              <Typography variant='h6' gutterBottom>
                Provide information for anyone who has been affected by the
                Beirut Explosion
              </Typography>
              <Button
                label='Submit'
                buttonstyle={{ borderRadius: 25 }}
                style={{ borderRadius: 25 }}
                variant='contained'
                color='secondary'
              >
                I know someone that needs support
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={12} className={classes.seperator}>
        <Grid item xs={1} className={classes.seperator_line}></Grid>
      </Grid>
      <Grid item container xs={12} className={classes.banner2}>
        <Grid item container xs={12} className={classes.content}>
          <Grid item container xs={10} sm={6}>
            <Grid item xs={12}>
              <Typography variant='h3' gutterBottom>
                Volunteer تطوع
              </Typography>
              <Typography variant='h6' gutterBottom>
                With the aim of helping as many people as possible, we always
                lack enthusiastic volunteers. Please contact us for more info.
              </Typography>
              <Button
                label='Submit'
                buttonstyle={{ borderRadius: 25 }}
                style={{ borderRadius: 25 }}
                variant='contained'
                color='secondary'
              >
                Apply Now{' '}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
