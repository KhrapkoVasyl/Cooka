import { createStyleSheet } from '@/utils/theme/createStyleSheet';

export const styles = createStyleSheet({
  detailWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    color: ({ palette }) => palette.grey['500'],
    fontSize: '15px',
  },
});
