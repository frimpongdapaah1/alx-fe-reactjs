import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10">Recipe not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-md"
      />
      <h1 className="text-3xl font-bold text-blue-600 mt-6">{recipe.title}</h1>
      <p className="text-gray-600 mt-4">{recipe.summary}</p>

      {/* Ingredients */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Ingredients</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          {recipe.ingredients?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Instructions</h2>
        <ol className="list-decimal list-inside mt-2 text-gray-700 space-y-2">
          {recipe.instructions?.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>

      <Link
        to="/"
        className="inline-block mt-8 text-blue-600 hover:text-blue-800 underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

export default RecipeDetail;
