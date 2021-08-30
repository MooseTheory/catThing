import React, { Dispatch } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

type catCardProps = {
    cat: ICat
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            textAlign: 'left',
            flexGrow: 1,
            padding: theme.spacing(2),
        },
    }),
);

const CatCard: React.FC<catCardProps> = ({ cat }) => {
    const classes = useStyles();
    const dispatch: Dispatch<any> = useDispatch();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {cat.name}
                </Typography>
                <Typography color="textSecondary">
                    {cat.name} is a {cat.color} cat, who is {cat.age} years old.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CatCard;
