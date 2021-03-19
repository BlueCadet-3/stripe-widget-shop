import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AboutUsPage from "../AboutUsPage/AboutUsPage";
import HomePage from "../HomePage/HomePage";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import MenuAppBar from "../../components/MenuAppBar/MenuAppBar";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../theme";


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <ThemeProvider theme={theme}>
      <main className="App">
        {user ? (
          <>
            {/* <NavBar user={user} setUser={setUser} /> */}
            <MenuAppBar user={user} setUser={setUser} />
            <Switch>
              <Route path="/aboutus">
                <AboutUsPage />
              </Route>
              <Route path="/homepage">
                <HomePage />
              </Route>
              <Route path="/orders/new">
                <NewOrderPage />
              </Route>
              <Route path="/orders">
                <OrderHistoryPage />
              </Route>
              <Redirect to="/homepage" />
            </Switch>
          </>
        ) : (
          <AuthPage setUser={setUser} />
        )}
      </main>
    </ThemeProvider>
  );
}
