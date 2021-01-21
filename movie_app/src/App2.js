// ReactJS #2강 App.js

// import React from "react";
// import PropTypes from "prop-types";

// function App() {
//   return (
//     <div>
//       {foodILike.map(dish => (
//         <Food
//           key={dish.id}
//           name={dish.name}
//           picture={dish.image}
//           rating={dish.rating}
//         />
//       ))}
//     </div>
//   );
// }

// const foodILike = [
//   {
//     id: 1,
//     name: "kimchi",
//     image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636",
//     rating:5
//   },
//   {
//     id: 2,
//     name: "ramen",
//     image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636",
//     rating:4.6
//   },
//   {
//     id: 3,
//     name: "삼겹살",
//     image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636",
//     rating:4.9
//   },
//   {
//     id: 4,
//     name: "쭈꾸미",
//     image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636",
//     rating:2.6
//   }
// ]

// function Food({ name, picture, rating }) {
//   return (
//     <div>
//       <h3>I like {name}</h3>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name} width="50%" height="50%" />
//     </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// }

// export default App;
