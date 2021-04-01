import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import { Link } from "react-router-dom";
// import HomeIcon from "@material-ui/icons/HomeRounded";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginRight: drawerWidth,
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
    },
    showShoppingCartIcon: {
        display:'none',
        [theme.breakpoints.up('md')] : {
            display:'flex',
        }
    },
    showShoppingCartText: {
        display:'flex',
        [theme.breakpoints.up('md')] : {
            display:'none',
        }
    },
}));

export default function CartDrawer() {
  const classes = useStyles();
  const [cartDrawer, setCartDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setCartDrawer(!cartDrawer);
  };
    return (
            <React.Fragment>
                <ShoppingCartIcon className={classes.showShoppingCartIcon} onClick={toggleDrawer(true)} onClose={toggleDrawer(false)}/>
                <Typography className={classes.showShoppingCartText} onClick={toggleDrawer(true)} onClose={toggleDrawer(false)} > Shopping Cart </Typography>
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