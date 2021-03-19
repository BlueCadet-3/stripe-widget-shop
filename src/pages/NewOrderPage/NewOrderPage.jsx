import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function NewOrderPage() {
  return (
    <AppBar position="static">
      <Tabs>
        <Tab label="Green Widgets" />
        <Tab label="Red Widgets" />
        <Tab label="Blue Widgets" />
      </Tabs>
    </AppBar>
  );
}
