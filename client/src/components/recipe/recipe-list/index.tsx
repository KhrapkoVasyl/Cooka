import { Recipe } from '@/stores/recipe.store';
import { Box } from '@mui/material';
import RecipeCard from '../recipe-card';

type RecipeListProps = {
  recipes: Recipe[];
};

const RecipeList = ({ recipes }: RecipeListProps) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </Box>
  );
};

export default RecipeList;
