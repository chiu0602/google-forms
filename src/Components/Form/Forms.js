import React from 'react';
import { styled } from '@mui/material/styles';
import auth from '../../services/authService';
import formService from '../../services/formService';

import { makeStyles } from '@mui/styles';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import OneForm from './OneForm';
import CircularProgress from '@mui/material/CircularProgress';



const PREFIX = 'Forms';

const classes = {
    root: `${PREFIX}-root`,
    media: `${PREFIX}-media`,
    cardGrid: `${PREFIX}-cardGrid`
};

const Root = styled('div')((
    {
        theme
    }
) => ({
    [`& .${classes.root}`]: {
      maxWidth: 345,
    },

    [`& .${classes.media}`]: {
      height: 140,
    },

    [`& .${classes.cardGrid}`]: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      }
}));


function Forms(props) {


    const [user, setUser] = React.useState({})
    const [forms, setForms] = React.useState([])
    const [loadingForms, setLoadingForms] = React.useState(true);

    React.useEffect(()=>{
        setUser(auth.getCurrentUser);
    }, [])

    React.useEffect(()=>{

        if(props.userId === undefined){
            //console.log("this shit is undefined");
        } else{
           // console.log(props.userId);
            formService.getForms(props.userId)
            .then((forms2) => {
               // console.log(forms2);

                setForms(forms2);
                setLoadingForms(false);
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


    }, [props.userId])

    return (
        <Root>
            <div>
            <CssBaseline />
            {loadingForms ? (<CircularProgress />):""}
            <Container className={classes.cardGrid} maxWidth="lg">
              <Grid container spacing={6}>
              {forms.map((form, i)=>(
                  <OneForm formData={form} key={i}  />
              ))}

              </Grid>
            </Container>


            </div>
            <div>

            </div>
        </Root>
    );
}

export default Forms;
