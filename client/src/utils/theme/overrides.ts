import { alpha, ThemeOptions } from '@mui/material';

export const overrides: ThemeOptions['components'] = {
  MuiButton: {
    defaultProps: {
      variant: 'contained',
      disableElevation: true,
    },
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        borderRadius: '100px',
        ...(ownerState.color === 'primary' &&
          ownerState.variant === 'contained' && {
            '&:hover': {
              backgroundColor: theme.palette[ownerState.color].light,
            },
            boxShadow: `0 2px 10px ${alpha(theme.palette.primary.main, 0.5)}`,
          }),
      }),
    },
  },
};
