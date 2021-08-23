import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  dody: {
    backgroundColor: 'yellow',
  }
  
})

export default function DisableElevation() {
  const classes = useStyles();
  return (
    <Button variant="contained" color="primary" disableElevation className={classes.dody}>
      Мои книги
    </Button>
  );
}