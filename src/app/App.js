import { Link } from "react-router-dom";
import { Redirect, Route, Switch } from "react-router-dom";

const Home = () => {
  return <div>Home component</div>;
};

const Aboute = () => {
  return <div>Aboute component</div>;
};

const App = () => {
  console.log(process.env);

  if (process.env.NODE_ENV === "development") {
    console.log(process.env.REACT_APP_SKDEV);
    console.log(process.env.REACT_APP_SKPROD);
  }

  if (process.env.NODE_ENV === "production") {
    console.log(process.env.REACT_APP_SKDEV);
    console.log(process.env.REACT_APP_SKPROD);
  }

  return (
    <div>
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/aboute">Aboute</Link>
      </div>
      <div> Hello is run to GH actions git branch production edddit</div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboute" component={Aboute} />

        <Redirect to="/" from="*" />
      </Switch>
    </div>
  );
};

export default App;
