import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FooterImg from '../../images/footer.png';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundImage: `url(${FooterImg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    minHeight: 300,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return <div className={classes.footer}></div>;
};

export default Footer;
