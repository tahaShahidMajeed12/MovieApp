import { GetMoviesListRequest,GetTrendingMoviesListRequest, GetUpcomingMoviesListRequest } from "../requests";
import {SetMovieListAction,SetTrendingMoviesAction,SetUpcomingMoviesAction} from '../actions/movieAction'
import { takeEvery,all ,call,put} from "@redux-saga/core/effects";
import { GETMOVIES, GETTRENDINGMOVIES,GETUPCOMINGMOVIES} from "../constants";


function* MovieListSaga(){
    const dataCall=yield call(()=>GetMoviesListRequest());
    const {data}=dataCall;
   yield put (SetMovieListAction(data.results));

}


function* TrendingMovieListSaga(){
    const dataCall=yield call(()=>GetTrendingMoviesListRequest());
    const {data}=dataCall;
   yield put (SetTrendingMoviesAction(data.results));

}


function* UpcomingMovieListSaga(){
 
    const dataCall=yield call(()=>GetUpcomingMoviesListRequest());
    const {data}=dataCall;
   yield put (SetUpcomingMoviesAction(data.results));

}


function* RootSaga(){
 yield   all([takeEvery(GETMOVIES,MovieListSaga),takeEvery(GETTRENDINGMOVIES,TrendingMovieListSaga),takeEvery(GETUPCOMINGMOVIES,UpcomingMovieListSaga)])

}



export default RootSaga;
