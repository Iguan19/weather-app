import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Icon from '../Icon/Icon';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    paddingTop: '1em',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SimpleCard = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Card className='tc mt4 mb5 dib pa3 ma2 grow shadow-5 w-25-ns'>
        <CardContent>
          <Icon />
          <br/>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            23 Degrees
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Sunny
          </Typography>
          <Typography variant="body2" component="p">
            16/04/2020
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default SimpleCard;