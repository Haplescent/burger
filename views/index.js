const LikeButton = (props) => {
  const id = props.id;
  const [liked, setLike] = React.useState(0);

  const handleLike = async (DevourId) => {
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
    this.setLike(true);
  };

  React.useEffect(() => {
    // Update the document title using the browser API
    axios
      .get("/api/all")
      .then((response) => {
        // handle success
        setLike(response.data[id].devoured);
      })
      .catch((error) => console.log(error));
  }, liked);

  if (liked) {
    return <p>You liked this.</p>;
  } else {
    return <button onClick={() => handleLike(id)}>Like</button>;
  }
};

const Example = () => {
  const [burgerData, setBurgerData] = React.useState([]);
  const listItems = burgerData.map((burger) => (
    <li>
      <LikeButton id={parseInt(burger.id) - 1} />
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

class BurgerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    await axios
      .post("/api/add", {
        burgerName: this.state.value,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({ value: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Example />
      </div>
    );
  }
}

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(
  <div>
    <BurgerForm />
  </div>,
  domContainer
);
