import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateRecipe({ id: recipe.id, title, description });
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="New Description"
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditRecipeForm;
