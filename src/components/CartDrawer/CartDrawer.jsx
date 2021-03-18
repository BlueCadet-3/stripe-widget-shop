import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/HomeRounded"
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        }
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginRight:drawerWidth,
        }
    }
}));


export default function CartDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setState(!state);
    };

    return (
            <React.Fragment>
                <ShoppingCartIcon onClick={toggleDrawer(true)} onClose={toggleDrawer(false)}/>
                <Drawer anchor='right' open={state} onClose={toggleDrawer(false)}>
                    <div className={classes.list} onClick={toggleDrawer(false)}>
                        <List>
                            <ListItem>
                                <Typography varient="h1" className="center">
                                    Shopping Cart
                                </Typography>
                            </ListItem>
                                <Divider />
                        </List>
                    </div>
                </Drawer>
            </React.Fragment>
        );
};