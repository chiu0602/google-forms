import React from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

const PREFIX = 'RadioCheck';

const classes = {
  formControl: `${PREFIX}-formControl`,
  button: `${PREFIX}-button`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`& .${classes.formControl}`]: {
    margin: theme.spacing(3),
  },

  [`& .${classes.button}`]: {
    margin: theme.spacing(1, 1, 0, 0),
  }
}));

export default function ErrorRadios() {

  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);


  const handleRadioChange = (event) => {
      console.log(event.target.value);

    setValue(event.target.value);

    setError(false);
  };

  const handleSubmit = () => {
    console.log(value);
  };

  return (
    <Root>
      <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>

      {["", "", ""].map((op, j)=>(
          <FormControlLabel key={j} value={j} control={<Radio />} label={"the worst"+ j} />
      ))}
    </RadioGroup>

    <Button variant="outlined" color="primary" className={classes.button} onClick={handleSubmit}>
      Check Answer
    </Button>
    </Root>
  );
}
