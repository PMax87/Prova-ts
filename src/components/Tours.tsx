import { useTours } from "../context/useTours";
import SingleTour from "./SingleTour";

const Tours = () => {
  const { tours } = useTours();

  return (
    <div className="tours">
      {tours.map((tour) => (
        <SingleTour tour={tour} key={tour.id} />
      ))}
    </div>
  );
};

export default Tours;
