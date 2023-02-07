import { Box, Typography } from '@mui/material';
import { styles } from './styles';

type RecipeDetailProps = {
  label: string;
  icon: React.ReactNode;
};

const RecipeDetail = ({ label, icon }: RecipeDetailProps) => {
  return (
    <Box sx={styles.detailWrapper}>
      {icon}
      <Typography fontSize="inherit">{label}</Typography>
    </Box>
  );
};

export default RecipeDetail;
