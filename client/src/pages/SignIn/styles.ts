import { createStyleSheet } from '@/utils/theme/createStyleSheet';

export const styles = createStyleSheet({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    alignItems: 'center',
  },
  formContainer: {
    boxShadow: '1',
    width: '50vw',
    height: '75vh',
    borderRadius: '1.5rem',
    padding: '2rem',
    display: 'flex',
    alignItems: 'center',
  },
  logoBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    mb: '2rem',
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '50%',
    //padding: '0 1.5rem',
    mt: '1.5rem',
  },
});
