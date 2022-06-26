import { useEffect, useState } from "react";
import "./Veggie.css";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
function Veggie() {
  const [veggieRecipes, setVeggieRecipes] = useState([]);

  const veggieFunction = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggieRecipes(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_APP_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggieRecipes(data.recipes);
      console.log(data.recipes);
    }
  };
  useEffect(() => {
    veggieFunction();
  }, []);

  return (
    <div>
      <div>
        <h1 className="veggie-recipes">VEGGIE RECIPES</h1>
      </div>
      <Splide
        options={{
          breakpoints: {
            680: {
              perPage: 1,
            },
            900: {
              perPage: 2,
            },
            1200: {
              perPage: 3,
            },
          },

          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2rem",
        }}
      >
        {veggieRecipes.map((veggie) => (
          <SplideSlide key={veggie.id}>
            <div className="veggie-item-first">
              <h1 className="veggie-title">{veggie.title}</h1>
              <img className="veggie-img" src={veggie.image} alt="" />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Veggie;
