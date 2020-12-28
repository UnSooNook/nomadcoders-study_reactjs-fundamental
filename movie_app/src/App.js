import React from "react";

function App() {
  return (
    <div>
      <h1>Hello!!!!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="삼겹살" />
      <Food fav="쭈꾸미" />
    </div>
  );
}

function Food({ fav }) {
  return (
    <h3>I like {fav}</h3>
  );
}

export default App;
