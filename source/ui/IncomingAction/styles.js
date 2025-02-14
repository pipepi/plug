import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  image: {
    height: 51,
    width: 51,
    borderRadius: 26,
    background: theme.palette.common.primaryBlack,
    marginBottom: theme.spacing(1),
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    height: 120,
    margin: `${theme.spacing(2.5)}px 0 `,
  },
}));
