import React, { Dispatch } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addCat, getAllCats } from '../store/actionCreators';
import AddCat from './AddCat';
import CatCard from './CatCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

const MainArea: React.FC = () => {
  const classes = useStyles();

  const catsLoaded: boolean = useSelector(
    (state: CatState) => state.loaded,
  )
  const cats: readonly ICat[] = useSelector(
    (state: CatState) => state.cats,
    shallowEqual,
  );
  const dispatch: Dispatch<any> = useDispatch();
  const saveCat = React.useCallback(
    (cat: ICat) => dispatch(addCat(cat)),
    [dispatch],
  );
  if (!catsLoaded) {
    dispatch(getAllCats());
  }

  return (
    <>
      <Paper className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <AddCat saveCat={saveCat} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {cats.map((cat: ICat) => (
            <Grid item xs={3}>
              <CatCard
                key={cat.id}
                cat={cat} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  )
}

export default MainArea;
