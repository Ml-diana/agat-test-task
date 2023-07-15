import USER from "./const";

export const deletePointAction = (pointId) => {
    return {
      type: USER.DELETE_POINT,
      payload: pointId,
    };
  };

  export const addPointAction = (newPoint) => {
    console.log(newPoint);
    return {
      type: USER.ADD_POINT,
      payload: newPoint,
    };
  };
  


  