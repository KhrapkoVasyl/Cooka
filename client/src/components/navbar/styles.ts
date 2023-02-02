import { createStyleSheet } from '@/utils/theme/createStyleSheet';

export const styles = createStyleSheet({
  chip: {
    cursor: 'pointer',
    transition: 'color 0.2s, background-color 0.2s',
    '&:active': {
      boxShadow: 'none',
    },
  },
  toolbar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  menu: {
    mt: '0.25rem',
  },
});
