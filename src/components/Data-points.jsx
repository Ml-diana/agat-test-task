import { useDispatch} from "react-redux";
import { deletePointAction } from "../store/action";

export default function DataPoints(shapes) {
  const dispatch = useDispatch();
  
   return (
      <div className="data-points-wrapper">
        <div className="data-points-box">
        {shapes.data.length === 0 && <div><b>Список пуст.Добавить маркер</b></div>}
          {shapes.data.map((item) => (
            <div className="data-points" key={item.properties.id}>
              <div className="data-point" key={item.properties.id}>
                {item.properties.name}
              </div>
              <div className="data-point-button">
                <button
                  type="button"
                  onClick={() => {
                    dispatch(deletePointAction(item.properties.id))
                  }}
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}