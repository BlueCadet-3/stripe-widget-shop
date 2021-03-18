import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/HomeRounded"
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import { Link } from 'react-router-dom'



const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});


export default function NavDrawer() {
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
            <MenuIcon onClick={toggleDrawer(true)} onClose={toggleDrawer(false)}/>
            <Drawer open={state} onClose={toggleDrawer(false)}>
                <div className={classes.list} role='presentation' onClick={toggleDrawer(false)}>
                    <List>
                            <ListItem component={Link} to="/homepage" button key={'home'}>
                                <ListItemIcon><HomeIcon /></ListItemIcon>
                                <ListItemText primary={'Home'} />
                            </ListItem>
                            <Divider />
                            <ListItem component={Link} to="/orders/new" button key={'New Order Page'}>
                                <ListItemIcon><HomeIcon /></ListItemIcon>
                                <ListItemText primary={'New Order Page'} />
                            </ListItem>
                    </List>
                </div>
            </Drawer>
        </React.Fragment>
    );
};