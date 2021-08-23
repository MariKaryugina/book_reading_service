import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  dodo: {
    backgroundColor: 'red',
  }
  
})

export default function Click () {
  const classes = useStyles();
  return (
    <ButtonGroup click variant="contained" color="primary">
      <Button className={classes.dodo}>Назад</Button>  
      <Button>1</Button>
      <Button>2</Button>
      <Button className={classes.dodo}>Далее</Button>
    </ButtonGroup>
  );
}