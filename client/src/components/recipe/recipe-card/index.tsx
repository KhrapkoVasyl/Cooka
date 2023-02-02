import {
  VisibilityRounded,
  AccessTimeRounded,
  PeopleAltOutlined,
} from '@mui/icons-material';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  Typography,
  Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import RecipeDetail from '../recipe-detail';

type RecipeCardProps = {
  id: string;
  title: string;
  description: string;
  img: string;
  time?: string;
  servings?: string;
};

const RecipeCard = ({
  id,
  title,
  description,
  img,
  time = '-',
  servings = '-',
}: RecipeCardProps) => {
  const navigate = useNavigate();

  const handleViewRecipeClick = () => {
    navigate(`/recipes/${id}`);
  };

  return (
    <Card sx={{ maxWidth: '280px' }} variant="outlined">
      <CardMedia
        component="img"
        height="194"
        width="280"
        image={img}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {description}
        </Typography>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          marginTop="15px"
        >
          <RecipeDetail
            icon={<AccessTimeRounded fontSize="inherit" />}
            label={`${time} mins`}
          />
          <RecipeDetail
            icon={<PeopleAltOutlined fontSize="inherit" />}
            label={`${servings} servings`}
          />
        </Stack>
      </CardContent>
      <CardActions sx={{ padding: '0 15px 15px' }}>
        <Button
          onClick={handleViewRecipeClick}
          startIcon={<VisibilityRounded />}
          size="small"
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
