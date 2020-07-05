const DevourButton = (props) => {
  const id = props.id;
  const [devoured, setDevour] = React.useState(0);

  const handleDevour = async (DevourId) => {
    console.log(`you hit like ${DevourId}`);
    await axios
      .post("/api/update", {
        devoured: true,
        id: DevourId + 1,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setDevour(true);
  };

  React.useEffect(() => {
    // Update the document title using the browser API
    axios
      .get("/api/all")
      .then((response) => {
        // handle success
        setDevour(response.data[id].devoured);
      })
      .catch((error) => console.log(error));
  }, devoured);

  if (devoured) {
    return <p>You devoured this.</p>;
  } else {
    return <button onClick={() => handleDevour(id)}>Devour</button>;
  }
};

const BurgerList = () => {
  const [burgerData, setBurgerData] = React.useState([]);
  const listItems = burgerData.map((burger) => (
    <li>
      <DevourButton id={parseInt(burger.id) - 1} />
      {burger.burger_name}
    </li>
  ));

  React.useEffect(() => {
    axios
      .get("/api/all")
      .then((response) => {
        setBurgerData(response.data);
      })
      .catch((error) => console.log(error));
  }, burgerData);

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

const BurgerForm = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    alert("A name was submitted: " + value);
    event.preventDefault();
    await axios
      .post("/api/add", {
        burgerName: value,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <BurgerList />
    </div>
  );
};

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(
  <div>
    <BurgerForm />
  </div>,
  domContainer
);
