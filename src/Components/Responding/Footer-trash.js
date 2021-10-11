import React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const PREFIX = 'Footer-trash';

const classes = {
  root: `${PREFIX}-root`,
  main: `${PREFIX}-main`,
  footer: `${PREFIX}-footer`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },

  [`& .${classes.main}`]: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },

  [`& .${classes.footer}`]: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  }
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {


  return (
    <Root className={classes.root}>

      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">My sticky footer can be found here.</Typography>
          <Copyright />
        </Container>
      </footer>
    </Root>
  );
}
