import { useState, useEffect } from "react";

export default function useFetchGigsByCity(city) {
  const [isLoading, setIsLoading] = useState(false);
  const [gigs, setGigs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch("api/gigs");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const filteredGigs = data.data.filter(
          (item) => item.city.toLowerCase() === city.toLowerCase()
        );
        setGigs(filteredGigs);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [city]); // Effect runs when 'city' changes

  return { isLoading, gigs, error };
}
