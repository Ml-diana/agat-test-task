import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addPointAction } from "../store/action";

export default function DataInputForm() {
  const nameRef=useRef(null);
  const widthRef=useRef(null);
  const longitudeRef=useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const name = nameRef.current.value;
    const width = widthRef.current.value;
    const longitude = longitudeRef.current.value;
    
    const newShape = {
      type: "Feature",
      properties: { id: Date.now(), name },
      geometry: {
        type: "Point",
        coordinates: [parseFloat(longitude), parseFloat(width)],
      },
    };

    dispatch(addPointAction(newShape));
  
    nameRef.current.value = "";
    widthRef.current.value = "";
    longitudeRef.current.value = "";
  };
    return (
      <div className="data-input-form-wrapper">
        <form className="data-input-form" id="form-points" onSubmit={handleSubmit}>
            <p><b>Добавить маркер</b></p>
            <input type="text" className="input-name" form="form-points" placeholder="Имя" ref={nameRef}/>
            <input type="text" className="input-width" form="form-points" placeholder="Широта" ref={widthRef} required/>
            <input type="text" className="input-longitude" form="form-points" placeholder="Долгота" ref={longitudeRef} required/>
            <button className="button-style">Сохранить</button>
        </form> 
      </div>
    );
  }