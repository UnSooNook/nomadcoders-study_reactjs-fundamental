import React from "react";

function App() {
  return <div>{foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image}/>)}</div>
}

const foodILike = [
  { id:1, name: "kimchi", image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636" },
  { id:2, name: "ramen", image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636" },
  { id:3, name: "삼겹살", image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636" },
  { id:4, name: "쭈꾸미", image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636" }
]

function Food({ name, picture }) {
  return (
    <div>
      <h3>I like {name}</h3>
      <img src={picture} alt={name}/>
    </div>
  );
}

export default App;
