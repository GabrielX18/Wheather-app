import { useState, useEffect } from "react";
import Info from "./Info";
import "../styles/form.css"

function Form() {
  const [input, setInput] = useState("");
  const [city, setCity] = useState(null);
  useEffect(() => {
    document.title = `Wheather| ${city ? city.location.name : "Clime"}`;
  }, [city]);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const request = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=d373d4f7778d4dcba02182405221606&q=${input}&lang=es`
    );
    const data = await request.json();
    setCity(data);
    console.log(city);
  };

  const handlerChanges = (e) => {
    let value = e.target.value;
    setInput(value);
  };

  return (
    <div className="wheather_content_main">
      <form onSubmit={handlerSubmit} className="form_content">
        <input
          type="text"
          placeholder="Buscar ciudad"
          onChange={handlerChanges}
          className="form_content-inputText"
        />
        {/* <input 
        type="button" 
        value="Buscar" 
        onClick={handlerSubmit} 
        className="form_content-inputButton" /> */}
      </form>

     <div className="main_info_content">
        <Info API={city}/>
     </div>
    
     </div>

  );
}

export default Form;
