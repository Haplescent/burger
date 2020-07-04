"use strict";

const LikeButton = (props) => {
  const id = props.id;
  const [liked, setLike] = React.useState(0);

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
    return <button onClick={() => setLike(true)}>Like</button>;
  }
};

const Example = () => {
  const [count, setCount] = React.useState(0);
  const [burgerData, setBurgerData] = React.useState([]);
  const listItems = burgerData.map((burger) => (
    <li>
      <LikeButton id={parseInt(burger.id) - 1} />
      {burger.burger_name}
    </li>
  ));

  // Similar to componentDidMount and componentDidUpdate:
  React.useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    axios
      .get("/api/all")
      .then((response) => {
        // handle success
        console.log(response);
        setBurgerData(response.data);
      })
      .catch((error) => console.log(error));
  }, burgerData);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <ul>{listItems}</ul>
    </div>
  );
};

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(
  <div>
    <Example />
  </div>,
  domContainer
);
