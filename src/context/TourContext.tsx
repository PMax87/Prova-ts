import React, { createContext, useState, useEffect } from "react";
import { url } from "../utils/url";
import axios from "axios";

interface ToursProps {
  tours: Tours[];
  isLoading: boolean;
  isError: boolean;
  deleteSingleTour: (id: string) => void;
  reloadAllTours: () => void;
  truncateInfo: (info: string) => string;
}

export interface Tours {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}

export const TourContext = createContext<ToursProps | undefined>(undefined);

export const TourProvider = (props: { children: React.ReactNode }) => {
  const [tours, setTours] = useState<Tours[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      const data = response.data;
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteSingleTour = (id: string) => {
    const newTours = tours.filter((tours) => tours.id !== id);
    setTours(newTours);
  };

  const reloadAllTours = () => {
    getData();
  };

  const truncateInfo = (info: string) => {
    return info.substring(0, 200) + " ...";
  };

  const value: ToursProps = {
    tours,
    isLoading,
    isError,
    deleteSingleTour,
    reloadAllTours,
    truncateInfo,
  };

  return (
    <TourContext.Provider value={value}>{props.children}</TourContext.Provider>
  );
};
