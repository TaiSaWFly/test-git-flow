function App() {
  console.log(process.env);

  if (process.env.NODE_ENV === "development") {
    console.log(process.env.REACT_APP_SKDEV);
    console.log(process.env.REACT_APP_SKPROD);
  }

  if (process.env.NODE_ENV === "production") {
    console.log(process.env.REACT_APP_SKDEV);
    console.log(process.env.REACT_APP_SKPROD);
  }

  return <div>Hello</div>;
}

export default App;
