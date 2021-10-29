import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AddServices from "./components/Pages/AddServices/AddServices";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Error from "./components/Pages/Error/Error";
import Footer from "./components/Pages/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import ManageOrders from "./components/Pages/ManageOrders/ManageOrders";
import Menubar from "./components/Pages/Menubar/Menubar";
import MyOrders from "./components/Pages/MyOrders/MyOrders";
import Room from "./components/Pages/Room/Room";
import Login from "./components/Shared/Login/Login";
import Register from "./components/Shared/Register/Register";
import AuthProvider from "./context/AuthProvider";
import Services from "./components/Pages/Services/Services";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Menubar></Menubar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>{" "}
            <Route exact path="/home">
              <Home></Home>
            </Route>{" "}
            <Route exact path="/room">
              <Room></Room>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>{" "}
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>{" "}
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route exact path="/manageAllOrder">
              <ManageOrders></ManageOrders>
            </Route>{" "}
            <Route exact path="/addServices">
              <AddServices></AddServices>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
