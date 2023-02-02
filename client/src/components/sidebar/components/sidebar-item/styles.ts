import { alpha } from '@mui/material';
import { createStyleSheet } from '@/utils/theme/createStyleSheet';

export const styles = createStyleSheet({
  listItem: {
    a: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 25px',
      width: '100%',
      borderRadius: '100px',
      transition: 'color 0.2s, background-color 0.2s',
      '& .MuiListItemIcon-root': {
        color: 'inherit',
      },
      '&:link, &:visited': {
        textDecoration: 'none',
        color: ({ palette }) => alpha(palette.text.secondary, 0.55),
      },
      '&:active, &:hover:not(&.active)': {
        color: ({ palette }) => palette.primary.main,
      },
      '&.active': {
        backgroundColor: ({ palette }) => alpha(palette.primary.main, 0.1),
        color: ({ palette }) => palette.primary.main,
        '& .MuiListItemText-root span': {
          fontWeight: 500,
        },
      },
    },
  },
});
