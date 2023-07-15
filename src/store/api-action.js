import axios from 'axios';
import USER from './const';

export const fetchShapes = () => async (dispatch) => {
    try {
        const response = await axios.get('/src/shapes.json');
      dispatch({
        type: USER.LOAD_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: USER.LOAD_ERROR,
        payload: error.message,
      });
    }
  };