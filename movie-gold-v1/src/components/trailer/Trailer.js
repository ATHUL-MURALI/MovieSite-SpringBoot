import { useParams } from "react-router-dom";
import "./Trailer.css";

const Trailer = () => {
  const { ytTrailerId } = useParams();

  return (
    <div className="react-player-container">
      {ytTrailerId ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${ytTrailerId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p style={{ color: "white" }}>No trailer available</p>
      )}
    </div>
  );
};

export default Trailer;
