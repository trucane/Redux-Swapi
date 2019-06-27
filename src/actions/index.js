// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

// our action creator will be a function that returns a function

export const fetchers = () => dispatch =>{
    dispatch({type:FETCH_START});

    // the url to fetch characters from is `https://swapi.co/api/people/`
    axios
    .get(`https://swapi.co/api/people/`)
    .then(res =>{
        //console.log('i am from actions', res.data.results)
        dispatch({type:FETCH_SUCCESS, payload:res.data.results});
    })
    .catch(err => dispatch({type:FETCH_ERROR}))
}
// remember that now we have controll over our thunk-based action creator
