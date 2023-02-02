import { createStyleSheet } from '@/utils/theme/createStyleSheet';

export const styles = createStyleSheet({
  container: {
    width: '50%',
    padding: '0',
    '& > *': {
      mb: '2rem',
      '& > div': {
        padding: '0 0.5rem ',
      },
    },
  },
});
