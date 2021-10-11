import React from 'react'
import Moment from 'react-moment';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const PREFIX = 'OneForm';

const classes = {
  root: `${PREFIX}-root`,
  media: `${PREFIX}-media`,
  cardGrid: `${PREFIX}-cardGrid`,
};

const StyledGrid = styled(Grid)((
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

export default function OneForm(props) {
  const [form, setForm] = React.useState({})

  React.useEffect(() => {
    //console.log(props.formData)
    setForm(props.formData)
  }, [props.formData]);

  return (
      <StyledGrid item  xs={12} sm={6} md={3}>
        <Card className={classes.root}>
          <CardActionArea href={"/form/"+form._id}>
            <CardMedia
              className={classes.media}
              image="https://static.makeuseof.com/wp-content/uploads/2019/06/AutoGradingQuizResults-GoogleForms.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {form.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {form.description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Opened:  <Moment fromNow>{form.updatedAt}</Moment>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    </StyledGrid>
  );
}
