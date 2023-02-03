import { createStyleSheet } from '@/utils/theme/createStyleSheet';

export const styles = createStyleSheet({
  sidebarWrapper: {
    padding: '12px',
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    paddingTop: '15px',
  },
});
