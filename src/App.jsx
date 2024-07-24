import Form from "./components/Form";
import Piechart from "./components/Piechart";

function App() {
  const getData = (userName) => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((data) => data.json())
      .then((user) => console.log(user));

    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((data) => data.json())
      .then((repos) => console.log(repos));
  };

  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-3xl mb-10">Charts</h1>
      <Form getData={getData} />
      <div>{/* <Piechart /> */}</div>
    </div>
  );
}

export default App;
