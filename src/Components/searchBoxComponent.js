import { Grid,Container,TextField,Button } from "@material-ui/core";
import cartoon from '../images/cartoon.jpg';


const SearchBox=()=>{
    return (
   
    <Container maxWidth={"lg"} 
    style={{

        backgroundImage: "url(" + `${cartoon}` + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height:"30vw",
        display:"flex",
        justifyContent:"center",
        alignContent:"center",
        alignItems:"flex-end",
        paddingBottom:20,
     }}     
     >
            <Grid container width="100%" >
                <Grid sm={12} xs={12} md={12} item >
               
                 <TextField label="Search Here...." variant="outlined" style={{backgroundColor:"#fff", width:"80%"
                                     }}/>
            <Button  style={{
  background: '#6c74cc',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  width: 100,
  padding:"1.1876em",
  height:55
}}
//className={classes.button}
>Search</Button>
                 </Grid>
            </Grid>
    </Container>
  
  )
}


export default SearchBox;