import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { FaTrash } from "react-icons/fa";
import { FaRegHeart, FaRegBookmark, FaRegStar } from "react-icons/fa6";
import { BiCameraMovie } from "react-icons/bi";

const Detail = () => {
  // 1) Urlde parametre olan filmin id'sini al
  const { id } = useParams();

  // 2) api'den film verilerini al
  const { data, error, isLoading } = useQuery({
    queryKey: ["movie"],
    queryFn: () => api.get(`/movies/${id}`),
  });

  const movie = data?.data;

  return (
    <div className="p-10">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        data && (
          <>
            <div>
              <div className="flex justify-end">
                <button className="bg-red-600 text-white p-2 rounded-md hover:bg-red-400">
                  <FaTrash />
                </button>
              </div>

              <div className="flex flex-col gap-10 items-center md:flex-row">
                <div>
                  <img
                    className="rounded-md"
                    src="https://picsum.photos/250/400"
                    alt="poster"
                  />
                </div>

                <div className="flex flex-col gap-10">
                  {/* Başlık */}
                  <h1 className="text-3xl font-semibold">
                    {movie.title} <span>({movie.year})</span>
                  </h1>

                  {/* Skor */}
                  <p>
                    <span className="font-semibold me-3">İzleyici Puanı</span>
                    <span className="p-2 rounded-full text-white font-semibold bg-green-500">
                      {movie.rating}
                    </span>
                  </p>

                  {/* Butonlar */}
                  <div className="flex gap-5">
                    <button className="bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700">
                      <FaRegHeart />
                    </button>
                    <button className="bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700">
                      <FaRegBookmark />
                    </button>
                    <button className="bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700">
                      <FaRegStar />
                    </button>
                    <button className="bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700">
                      <BiCameraMovie />
                    </button>
                  </div>

                  {/* Kategoriler */}
                  <div className="flex gap-5 items-center">
                    <p className="font-semibold">Kategoriler:</p>
                    <p className="flex gap-3">
                      {movie.genre.map((genres) => (
                        <span className="bg-yellow-600 py-1 px-2 rounded-full text-white">
                          {genres}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Detail;
