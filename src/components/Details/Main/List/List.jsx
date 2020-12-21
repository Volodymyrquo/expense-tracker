import React from 'react';
import {
  Avatar,
  IconButton,
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Slide,
} from '@material-ui/core';
import useStyles from './styles';
import { Delete, MoneyOff } from '@material-ui/icons';

const List = () => {
  const classes = useStyles();
  const transactions = [
    {
      id: 1,
      type: 'Income',
      category: 'Salary',
      amount: 150,
      date: 'Mon Dec 21 2020',
    },
    {
      id: 2,
      type: 'Expense',
      category: 'Pets',
      amount: 50,
      date: 'Mon Dec 18 2020',
    },
    {
      id: 3,
      type: 'Income',
      category: 'Business',
      amount: 200,
      date: 'Mon Dec 15 2020',
    },
  ];
  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction='down'
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === 'Income'
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }>
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge='end' aria-label='delete' onClick=''>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
