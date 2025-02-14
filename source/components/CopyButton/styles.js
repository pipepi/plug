import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  icon: {
    cursor: 'pointer',
    fontSize: 18,
    transition: 'transform 0.3s',

    '&:hover': {
      transform: 'scale(1.03)',
    },
  },
  copyIcon: {
    color: '#367FF8',
    height: 18,
  },
  tooltip: {
    margin: '8px 0',
  },
  tooltipSides: {
    margin: '0 8px',
  },
});
