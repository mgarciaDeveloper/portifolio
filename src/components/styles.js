import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  // This is the BETTER way of styling your Material UI components 
  //theme gives you ome pattern styles. If you want to, it is possible to define plain stylization, like 'padding: 10px'


  //--- Facilities Registration --- V
  container: {
    //borderTopRadius: '10px',
    width: '100%',
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'left',
    alignItems: 'left',
    marginTop: 0,
    padding: '1vh 2vw 1vh 2vw',
    minHeight: '100vh',
    backgroundColor: '#696969',
    backgroundImage: 'url(https://www.transparenttextures.com/patterns/fabric-of-squares.png)',
  },

  formBox: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
    padding: '1vh 3vw 1vh 3vw',
    minHeight:'95vh',
  },

  footer: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    

},


graphCards: {
  backgroundColor: theme.palette.background.paper,
  width: "100%",
  height: "30%",
  display: 'inline-block',
  paddingLeft: "25px"
},

//------------------------
  optionsBox: {
    backgroundColor: theme.palette.background.paper,
    height: '90vh',
    borderRadius: '10px',
    width: '7vw',
    marginRight: '7vw',
    position: 'relative',
    display: 'flex',
    padding: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: '10px',
  },
  optionsBoxButton: {
    width: '6.5vw',
    borderRadius: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  optionsBoxText: {
    color: '#787A91',

  },

  gradButton: {
    backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',

  },
  gradButtonIcon: {
    color: theme.palette.background.paper,
  },
  noColorButton: {
    background: 'none',
    color: 'inherit',
    border: 'none',
    padding: 0,
    font: 'inherit',
    cursor: 'pointer',
    outline: 'inherit',
  },

  topBar: {
    backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    margin: 'auto -16px',
    padding: '16px 32px',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.3)',
    width: '100%', textAlign: 'left', justifyContent: 'space-between', display: 'flex', flexDirection: 'row',
    color: theme.palette.background.paper,
  },
  inputColor: {
    backgroundColor: theme.palette.background.paper,
  },



  formBoxProject: {
    backgroundColor: theme.palette.background.paper,
    
    padding: '0 5% 7% 0',
    position: 'relative',
    display: 'flex',
    justifyContent: 'left',
    flexDirection: 'column',
    textAlign: 'left',
    alignItems: 'left',
  },

  mapBackground: {

    //transition: 'height 0.5s ease', backgroundImage: 'url(/images/mapa.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',
    position: 'relative', width: '100%', height: '100%', border: '1px solid #C8C2BC', borderRadius: '7px', alignContent: 'center', textAlign: 'center', alignItems: 'center', padding: '0'
  },

  mapButtonDiv: { position: 'absolute', top: '90%', height: '20%', width: '100%', textAlign: 'center', alignContent: 'center', alignItems: 'center' },

  mapButton: {

    position: 'relative',
    transition: 'background-color 0.2s ease',
    top: '50%',
    borderRadius: '20px',
    transform: 'translateY(-50%)',
    color: '#14279B',
    fontWeight: 'bold',
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
      backgroundColor: '#C9B6E4'
    }

  },


  saveIcon: {
    //color: theme.palette.success.dark
    color: '#14279B',
  },

  deleteIcon: {
    //color: theme.palette.success.dark
    color: '#8E0505',
  },


  rusuretodelete: {
    width: '30%',
    minHeight: '30%',
    padding: '5%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
    textAlign: 'center', alignContent: 'center', alignItems: 'center'
  },

  input: {

    textAlign: 'left',
    fontSize: '18px',
    color: '#14279B',
    fontWeight: '300',
  },


  span: {
    fontFamily: '"Source Sans Pro", sans-serif',
    padding: '10px 15px',
    margin: '0',
    textAlign: 'left',
    fontSize: '18px',
    color: '#14279B',
    fontWeight: '300',
  },

  options: {
    '&:hover': {
      backgroundColor: '#D5EEBB'
    }
  },


  gridFather: {
    alignItems: "center",
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },


  button: {
    outline: '0',
    backgroundColor: '#3D56B2',
    border: '1px solid #14279B',
    padding: '10px 15px',
    color: 'white',
    borderRadius: '3px',
    width: '250px',
    fontSize: '18px',
  },
  cardGrid: {
    padding: '20px 0',
    paddingBottom: '100px'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'

  },
  cardMedia: {
    paddingTop: '56.25%' //16:9
  },

  cardContent: {
    flexGrow: 1,
  },
}));

export default useStyles;
