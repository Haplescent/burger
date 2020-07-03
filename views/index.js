"use strict";

const LikeButton = () => {
  const [liked, setLike] = React.useState(false);
  if (liked) {
    return <p>You liked this.</p>;
  } else {
    return <button onClick={() => setLike(true)}>Like</button>;
  }
};

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(<LikeButton />, domContainer);
