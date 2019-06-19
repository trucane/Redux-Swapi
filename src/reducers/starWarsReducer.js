import{FETCH_START, FETCH_SUCCESS,FETCH_ERROR}from  "../actions";
const initialState = {
  characters: [],
  error:'',
  isLoading:false
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return{
        ...state,
        error:'',
        isLoading:true
      }

    case FETCH_SUCCESS:
      return{
        ...state,
        isLoading:false,
        characters:action.payload
      }


    case FETCH_ERROR:
      return{
        ...state,
        isLoading:false,
        error: "Dude you screwed up some where"
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
