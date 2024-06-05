import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Card from "../components/Card";

const Main = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: () => api.get("/movies").then((res) => res.data),
  });

  return (
    <div>
      <Hero />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        data.movies.map((movie, key) => <Card movie={movie} key={key} />)
      )}
    </div>
  );
};

export default Main;
