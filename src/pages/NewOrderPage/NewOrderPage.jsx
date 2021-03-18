import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid, GridList } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => {

})



export default function NewOrderPage() {
  const theme = useTheme();

  console.log(theme.palette.secondary.main)

  return (
  <AppBar position="static">
    <Tabs
    >
      <Tab label="Green Widgets" />
      <Tab label="Red Widgets" />
      <Tab label="Blue Widgets" /> 
    </Tabs>
  </AppBar>
  );
};