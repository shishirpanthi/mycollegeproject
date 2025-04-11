import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',

  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '30px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    maxWidth: '100%',
    justifyContent: 'start',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },

  postWrap:{
    maxWidth: '20%',
    [theme.breakpoints.down('xl')]: {
      maxWidth: '15%',
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: '25%',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '40%',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    }
  },

  postContent: {
    padding: '10px 0 0 0',
    fontSize: '0.875rem',
    letterSpacing: '0.00714em',
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '77vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
  },
}));