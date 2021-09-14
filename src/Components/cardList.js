import {useEffect} from 'react'
import { Grid } from "@material-ui/core"
import CardItem from './cardItem';
import { useSelector,useDispatch } from "react-redux";
import {GetMovieListAction} from '../Store/actions/movieAction'


const CardList=()=>{
    const state=useSelector((state)=>state.Movie.toJS());
    const dispatch=useDispatch();
    useEffect(() => {
     dispatch(GetMovieListAction())
    },[])

    return <Grid container style={{ marginTop:60,marginBottom:60}} justifyContent="center">
        {state.moviesList?state.moviesList.map((data,index)=>
            <Grid item xs={12} sm={6} md={4} key={index}>
                <CardItem id={data.id} name={data.original_title} overview={data.overview} path={data.poster_path} />
            </Grid>
        ):null}
               
         </Grid>


}
export default CardList;