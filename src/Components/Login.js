import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { styled } from '@mui/material/styles';
import authService from '../services/authService';
import { useHistory } from "react-router-dom";
import React from 'react';


import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

import ViewListIcon from '@mui/icons-material/ViewList';

import GoogleButton from 'react-google-button'
import Avatar from "@mui/material/Avatar";

const PREFIX = 'Login';

const classes = {
    icon: `${PREFIX}-icon`,
    root: `${PREFIX}-root`,
    menuButton: `${PREFIX}-menuButton`,
    title: `${PREFIX}-title`
};

const Root = styled('div')((
    {
        theme
    }
) => ({
    [`& .${classes.icon}`]: {
      marginRight: theme.spacing(1),
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

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

function Login(props){

    let history = useHistory();
    const [isLogined , setIsLogined] = React.useState(false);
    const { from } = props.location.state || { from: { pathname: '/' } }

    React.useEffect(()=>{
        setIsLogined(authService.isAuthenticated())
    }, [])

    const loginGoogle = (response)=>{
        console.log(response);
        authService.loginWithGoogle(response)
        .then(() => {
          console.log(from.pathname);

          if(from.pathname == "/login"){
            history.push("/");

          }else{
            history.push(from.pathname);
          }
          },
          error => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            console.log(resMessage);
          }
          );
    }

    const loginAsGuest = ()=>{
        authService.loginAsGuest()
        history.push(from.pathname);
    }

    const handleLoginFailure = (response)=>{
        console.log('Failed to log in');
    }

    const handleLogoutFailure = (response)=>{
        console.log('Failed to log out');
    }

    const logout = (response)=>{
        authService.logout();
        setIsLogined(false);
      }


    return (
        <Root>
             <CssBaseline />
            <div style={{display: 'flex', flexGrow: 1, textAlign: 'start'}}>
                <AppBar position="relative" style={{backgroundColor: 'teal'}}>
                <Toolbar>
                    <ViewListIcon className={classes.icon} onClick={()=>{history.push('/')}} />

                    <Typography variant="h6" color="inherit" noWrap className={classes.title}>
                    Velocity Forms
                    </Typography>
                </Toolbar>
                </AppBar>
            </div>
        <br></br>
            <main>
            <Typography component="h1" variant="h5">
                Login
                </Typography>
        <br></br>
        <br></br>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            {isLogined ?
                "":
                <GoogleLogin
                    clientId={CLIENT_ID}
                    render={renderProps => (
                        <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled} style={{textAlign: 'center', alignSelf: 'center'}} />
                      )}
                    buttonText='Login'
                    onSuccess={loginGoogle}
                    onFailure={handleLoginFailure}
                    cookiePolicy={ 'single_host_origin' }
                    responseType='code,token'
                />
            }
            <br></br>
            <br></br>
            <div>
               {  isLogined ? (<div>
                                <p>Already logged in. Want to logout?</p>
                                <button onClick={logout}>Logout </button>
                            </div>) : (
                           <Button
                            onClick={loginAsGuest}
                            variant="contained"
                            style={{textTransform: "none"}}
                            startIcon={<Avatar  src={"https://static.thenounproject.com/png/3244607-200.png"}/>  } >
                            Login as Guest(Anonymous)
                        </Button>
                   )
               }
            </div>
        </div>

            </main>
        </Root>
    );
}

export default Login;
