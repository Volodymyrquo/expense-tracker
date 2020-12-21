import { Card } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Main = () => {
  const classes = useStyles();
  return <Card className={classes.root}></Card>;
};

export default Main;
