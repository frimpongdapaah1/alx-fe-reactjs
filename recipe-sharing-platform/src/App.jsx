import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <Router>
      {/* Simple Navbar */}
      <nav className="bg-gray-800 p-4 text-white flex justify-between">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/add" className="hover:text-blue-400">Add Recipe</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add" element={<AddRecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
