import "./App.css";
import Pages from "./components/Pages";
import Category from "./components/pages/Category";

function App() {
  return (
    <div className="body-div">
      <div className="recipes-world">
        <h1>RECIPES WORLD</h1>
      </div>
      <Category />
      <Pages />
    </div>
  );
}

export default App;
