import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import "./Category.css";
function Category() {
  return (
    <div className="category-first-div">
      <div>
        <FaPizzaSlice />
        <h1>Italian</h1>
      </div>
      <div>
        <FaHamburger />
        <h1>American</h1>
      </div>
      <div>
        <GiNoodles />
        <h1>Thai</h1>
      </div>
      <div>
        <GiChopsticks />
        <h1>Japanese</h1>
      </div>
    </div>
  );
}

export default Category;
