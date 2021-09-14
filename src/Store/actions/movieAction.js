import { GETMOVIES,GETTRENDINGMOVIES,SETMOVIES,SETTRENDINGMOVIES,GETUPCOMINGMOVIES,SETUPCOMINGMOVIES } from "../constants";

export const GetMovieListAction=()=>{
    return {
        type:GETMOVIES
    }

}

export const SetMovieListAction=(data)=>{
    return {
        type:SETMOVIES,
        data:data
    }
}


export const GetTrendingMoviesAction=()=>{
    return {
       type: GETTRENDINGMOVIES
    }
}

export const SetTrendingMoviesAction=(data)=>{
    return {
       type: SETTRENDINGMOVIES,
       data:data
    }
}
export const GetUpcomingMoviesAction=()=>{
    return {
       type: GETUPCOMINGMOVIES,
    }
}
export const SetUpcomingMoviesAction=(data)=>{
    return {
       type: SETUPCOMINGMOVIES,
       data:data
    }
}
