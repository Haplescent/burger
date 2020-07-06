const { SvgIcon, Input, InputLabel, Button, List, ListItem } = MaterialUI;

const BurgerList = (props) => {
  const burgerComponentArray = props.burgerComponentArray;
  console.log(burgerComponentArray);
  const listItems = burgerComponentArray.map((burger) => (
    <ListItem>{burger}</ListItem>
  ));
  return (
    <div>
      <List>{listItems}</List>
    </div>
  );
};

const BurgerForm = (props) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleEntry(value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputLabel>
          Name:
          <Input type="text" value={value} onChange={handleChange} />
          <Input type="submit" value="Submit" />
        </InputLabel>
      </form>
    </div>
  );
};

const App = () => {
  const [burgerData, setBurgerData] = React.useState([]);
  const [loadNewData, setLoading] = React.useState(true);

  const handleDevour = async (DevourId) => {
    console.log(`you hit like ${DevourId}`);
    await axios
      .post("/api/update", {
        devoured: 1,
        id: DevourId,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setLoading(true);
  };

  const handleEntry = async (submitValue) => {
    console.log(submitValue);
    await axios
      .post("/api/add", {
        burgerName: submitValue,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setLoading(true);
  };

  const DevourButton = (props) => {
    const id = props.burger.id;
    const devoured = props.burger.devoured;
    const burgerName = props.burger.burger_name;

    if (devoured) {
      return <p>You devoured {burgerName}</p>;
    } else {
      return (
        <Button onClick={() => props.handleClick(id)}>
          Devour {burgerName}
        </Button>
      );
    }
  };

  React.useEffect(() => {
    if (loadNewData) {
      axios
        .get("/api/all")
        .then((response) => {
          setBurgerData(response.data);
          console.log("react useEffect ran");
          console.log(response.data);
        })
        .catch((error) => console.log(error));
      setLoading(false);
    }
  });

  const burgerArray = burgerData.map((burger) => (
    <DevourButton burger={burger} handleClick={handleDevour} />
  ));

  return (
    <div>
      <BurgerForm handleEntry={handleEntry} />
      <BurgerList burgerComponentArray={burgerArray} />
    </div>
  );
};
