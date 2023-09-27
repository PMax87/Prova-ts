import { useState } from "react";
import { Tours, useTours } from "../context";

const SingleTour = (props: { tour: Tours }) => {
  const { tour } = props;

  const { deleteSingleTour, truncateInfo } = useTours();

  const [isReadMore, setIsReadMore] = useState<boolean>(false);

  return (
    <article className="single-tour">
      <img className="img" alt={tour.name} src={tour.image} />
      <span className="tour-price">{tour.price} €</span>
      <div className="tour-info">
        <h5>{tour.name}</h5>
        <p>
          {isReadMore ? tour.info : truncateInfo(tour.info)}
          <button
            type="button"
            className="info-btn"
            onClick={() => setIsReadMore(!isReadMore)}
          >
            {isReadMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          type="button"
          className="delete-btn btn-block btn"
          onClick={() => deleteSingleTour(tour.id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default SingleTour;
