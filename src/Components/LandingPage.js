import React from 'react';
import { styled } from '@mui/material/styles';
import { useHistory } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import ViewListIcon from '@mui/icons-material/ViewList';
import Paper from '@mui/material/Paper';
import Hidden from '@mui/material/Hidden';
import CardActionArea from '@mui/material/CardActionArea';

const PREFIX = 'LandingPage';

const classes = {
  icon: `${PREFIX}-icon`,
  card: `${PREFIX}-card`,
  cardDetails: `${PREFIX}-cardDetails`,
  cardMedia: `${PREFIX}-cardMedia`,
  heroContent: `${PREFIX}-heroContent`,
  heroButtons: `${PREFIX}-heroButtons`,
  footer: `${PREFIX}-footer`,
  mainFeaturedPost: `${PREFIX}-mainFeaturedPost`,
  overlay: `${PREFIX}-overlay`,
  mainFeaturedPostContent: `${PREFIX}-mainFeaturedPostContent`,
  buttons: `${PREFIX}-buttons`,
  buttongg: `${PREFIX}-buttongg`,
  root: `${PREFIX}-root`,
  menuButton: `${PREFIX}-menuButton`,
  title: `${PREFIX}-title`
};

const StyledTypography = styled(Typography)((
  {
    theme
  }
) => ({
  [`& .${classes.icon}`]: {
    marginRight: theme.spacing(1),
  },

  [`& .${classes.card}`]: {
    display: 'flex',
  },

  [`& .${classes.cardDetails}`]: {
    flex: 1,
  },

  [`& .${classes.cardMedia}`]: {
    width: 160,
  },

  [`& .${classes.heroContent}`]: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },

  [`& .${classes.heroButtons}`]: {
    marginTop: theme.spacing(4),
  },

  [`& .${classes.footer}`]: {
    backgroundColor: '#DAE0E2',
    padding: theme.spacing(2),
    position: 'relative',
    bottom: 0,
    right: 0,
    left: 0
  },

  [`& .${classes.mainFeaturedPost}`]: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },

  [`& .${classes.overlay}`]: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },

  [`& .${classes.mainFeaturedPostContent}`]: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },

  [`& .${classes.buttons}`]: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  [`& .${classes.buttongg}`]: {
    backgroundColor: 'teal'
  },

  [`& .${classes.root}`]: {
    flexGrow: 1,
  },

  [`& .${classes.menuButton}`]: {
    marginRight: theme.spacing(2),
  },

  [`& .${classes.title}`]: {
    flexGrow: 1,
  }
}));

function Copyright() {
  return (
    <StyledTypography variant="body2" color="textSecondary" align="center">
      <Link color="inherit" href="https://www.stillthristy.in/">
        Rohit Saini
      </Link>
      { ' © '}
      <Link color="inherit" href="https://github.com/rohitsaini1196">
        GitHub
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </StyledTypography>
  );
}

export default function LangingPage() {
  let history = useHistory();

  function loginClick() {
    history.push('/login')
  }

  return (
    <div>
      <CssBaseline />
      <div style={{display: 'flex', flexGrow: 1, textAlign: 'start'}}>
        <AppBar position="relative" style={{backgroundColor: 'teal'}}>
          <Toolbar>
            <ViewListIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap className={classes.title}>
              Velocity Forms
            </Typography>
            <Button color="inherit" onClick={loginClick}>Login</Button>
          </Toolbar>
        </AppBar>
      </div>

      <main style={{textAlign: 'start'}}>
        <div>
          <Container>
            <br/>
            <br/>
            <br/>
            <Paper className={classes.mainFeaturedPost} >
              {/* Increase the priority of the hero background image */}
              {<img style={{ display: 'none' }} src="https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="gg" />}
              <div className={classes.overlay} />
              <Grid container>
                <Grid item md={6}>
                  <div className={classes.mainFeaturedPostContent}>
                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                      Velocity Forms
                    </Typography>
                    <Typography variant="h5" color="inherit" paragraph>
                      Plan your next camping trip, manage event registrations, whip up a quick poll, create a pop quiz, and much more.
                    </Typography>
                    <div className={classes.buttons}>
                      <Button variant="contained" color="primary" className={classes.buttongg} onClick={loginClick}>
                        Signup Now
                      </Button>
                      <Button variant="contained" color="primary" className={classes.buttongg} onClick={loginClick}>
                        Login
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Paper>
            <br/>
            <br/>
            <br/>
            <div>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <CardActionArea component="a" href="/">
                    <Card className={classes.card}>
                      <div className={classes.cardDetails}>
                        <CardContent>
                          <Typography component="h2" variant="h5">
                            Survey with style
                          </Typography>
                          <Typography variant="subtitle1"  style={{color: 'teal'}}>
                            Style
                          </Typography>
                          <Typography variant="subtitle1" paragraph>
                            Use your own photo or logo, and Forms will pick just the right colors to complete your own unique form, or choose from a set of curated themes to set the tone. We can store images for future.
                          </Typography>
                        </CardContent>
                      </div>
                      <Hidden smDown>
                        <CardMedia className={classes.cardMedia} image="https://images.pexels.com/photos/4823233/pexels-photo-4823233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="" />
                      </Hidden>
                    </Card>
                  </CardActionArea>
                </Grid>
                <Grid item xs={12} md={6}>
                  <CardActionArea component="a" href="/">
                    <Card className={classes.card}>
                      <div className={classes.cardDetails}>
                        <CardContent>
                          <Typography component="h2" variant="h5">
                            Organized &amp; analyzed
                          </Typography>
                          <Typography variant="subtitle1"  style={{color: 'teal'}}>
                            organize
                          </Typography>
                          <Typography variant="subtitle1" paragraph>
                            Responses to your surveys are neatly and automatically collected in Forms, with real time response info and charts. Or, download a csv/json or load data in google sheets.
                          </Typography>
                        </CardContent>
                      </div>
                      <Hidden smDown>
                        <CardMedia className={classes.cardMedia} image="https://images.pexels.com/photos/4823233/pexels-photo-4823233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="" />
                      </Hidden>
                    </Card>
                  </CardActionArea>
                </Grid>
              </Grid>
            </div>
          </Container>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </main>
      <footer className={classes.footer} style={{}}>
        <Typography variant="h6" align="center" gutterBottom>
          Velocity Forms <small>(An Open source clone of google forms)</small>
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          No Copyright issue. This project is <Link color="inherit" href="https://github.com/rohitsaini1196/google-forms">open source</Link>{'. '}
          Feel free to use anything that you find helpful, Give credit if you want.
        </Typography>
        <Copyright />
      </footer>
    </div>
  );
}
