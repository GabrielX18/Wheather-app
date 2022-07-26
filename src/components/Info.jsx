import "../styles/info.css";
export default function Info({ API }) {
  return (
    <>
      <div className="info_countryName">{API ? API.location.name : ""}</div>

      <div className="info_conditions">
        <div className="">
          {API ? (
            <img src={`https://${API.current.condition.icon}`} alt="Clime" className="info_left_icon" />
          ) : (
            ""
          )}
        </div>

        <div className="info_right">
          <div className="info_right_descriptions">
            {API ? API.current.condition.text : ""}
          </div>
          <div className="info_right_temperture">
            {API ? API.current.temp_c + "º" : ""}
          </div>
        </div>
      </div>

      <div className="info_map">
        {
          API?
          <iframe
          title="map"
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30192.07992629946!2d${API.location.lon}1!3d${API.location.lat}65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sdo!4v1657320932997!5m2!1ses-419!2sdo`}
          width="100%"
          height="380"
          style={{border: 1}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        :""
        }
        
      </div>
    </>
  );
}
