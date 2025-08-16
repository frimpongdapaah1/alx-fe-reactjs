import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    const ingredientsList = ingredients.split(",").map((i) => i.trim());
    if (ingredientsList.length < 2) {
      setError("Please provide at least two ingredients.");
      return;
    }

    // ✅ Mock submission
    const newRecipe = { title, ingredients: ingredientsList, steps };
    console.log("New Recipe Submitted:", newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
        ➕ Add a New Recipe
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Input */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients Input */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Ingredients (comma separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="e.g. Tomato, Onion, Garlic"
            rows="4"
          />
        </div>

        {/* Steps Input */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 rounded p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Describe how to prepare the recipe"
            rows="6"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
