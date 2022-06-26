import { useEffect, useState } from "react";
import "./Popular.css";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
function Popular() {
  const [popularRecipes, setPopularRecipes] = useState([]);

  const recipesFunction = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopularRecipes(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_APP_KEY}&number=9`
      );
      const data = await api.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopularRecipes(data.recipes);
      console.log(data.recipes);
    }
  };
  useEffect(() => {
    recipesFunction();
  }, []);

  return (
    <div>
      <div>
        <h1 className="popular-recipes">POPULAR RECIPES</h1>
      </div>
      <Splide
        options={{
          perPage: 4,

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

          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2rem",
        }}
      >
        {popularRecipes.map((popular) => (
          <SplideSlide key={popular.id}>
            <div className="popular-item-first">
              <div className="popular-title-parent">
                <h1 className="popular-title">{popular.title}</h1>
              </div>
              <img className="popular-img" src={popular.image} alt="" />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Popular;
