import USER from "./const";

const initialState = {
    shapes: [],
    error: null,
  };
  
  const shapesReducer = (state = initialState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case USER.LOAD_SUCCESS:
            return {
                ...state,
                shapes: action.payload,
                error: null,
            };
        case USER.LOAD_ERROR:
            return {
                ...state,
                shapes: [],
                error: action.payload,
            };
       case USER.DELETE_POINT: 
            return {
                ...state,
                shapes: state.shapes.filter((shape) => action.payload != shape.properties.id),
                error: null,
            };
            case USER.ADD_POINT: 
            return {
                ...state,
                shapes: [...state.shapes, action.payload],
                error: null,
            };
        default:
            return state;
    }
  };

  export default shapesReducer;