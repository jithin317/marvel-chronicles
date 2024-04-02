import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComics } from "../../redux/features/comicsSlice";
import CharacterLoader from "../../components/loaders/character-loader";
import Pagination from "../../components/pagination/pagination";

export default function Comics() {
  const dispatch = useDispatch();
  const { isLoading, comics, error } = useSelector((state) => state.comics);
  const [limit] = useState(12);
  const [offset, setOffset] = useState(0);

  // console.log(isLoading, comics, error);
  // console.log(comics);
  useEffect(() => {
    dispatch(fetchComics(limit, offset));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch, offset]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Comics
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {isLoading ? (
            <CharacterLoader />
          ) : (
            comics.map((comic) => {
              const { creators, prices } = comic;
              let names = [];
              let rate = 0;
              if (creators.available > 0) {
                creators.items.map((ele) => {
                  names.push(ele.name);
                });
              }
              if (prices.length > 0) {
                prices.map((price) => (rate += price.price));
              }
              const name = names.join(", ");
              return (
                <div key={comic.id} className="group relative">
                  <div className="w-full shadow-xl shadow-rose-500/20 overflow-hidden border-8 border-black bg-gray-200 lg:aspect-none group-hover:opacity-75">
                    <img
                      src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                      alt={`${comic.title} img`}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div className="w-full flex flex-col gap-1">
                      <h3 className="text-md text-gray-700 truncate whitespace-nowrap overflow-hidden">
                        <a href="#">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {comic.title}
                        </a>
                      </h3>
                      {names.length !== 0 && (
                        <p className="w-[70%] text-sm text-gray-600 truncate whitespace-nowrap overflow-hidden">
                          {name}
                        </p>
                      )}
                      <div>
                        {rate > 0 && (
                          <p className="mr-2 text-lg font-semibold text-gray-900">
                            ${rate}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <Pagination
          setOffset={setOffset}
          limit={limit}
          offset={offset}
          totalCount={59728}
        />
      </div>
    </div>
  );
}
