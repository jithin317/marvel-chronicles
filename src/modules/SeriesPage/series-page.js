import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeries } from "../../redux/features/seriesSlice";
import CharacterLoader from "../../components/loaders/character-loader";
import Pagination from "../../components/pagination/pagination";

export default function Series() {
  const dispatch = useDispatch();
  const { isLoading, series, error } = useSelector((state) => state.series);
  const [limit] = useState(12);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    dispatch(fetchSeries(limit, offset));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch, offset]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
          Series
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {isLoading ? (
            <CharacterLoader />
          ) : (
            series.map((seriesObj) => {
              const { startYear, endYear, creators } = seriesObj;
              let names = [];
              // let rate = 0;
              if (creators.available > 0) {
                creators.items.map((ele) => {
                  names.push(ele.name);
                });
              }
              const name = names.join(", ");
              // if (prices.length > 0) {
              //   prices.map((price) => (rate += price.price));
              // }
              return (
                <div key={seriesObj.id} className="group relative">
                  <div className="w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={`${seriesObj.thumbnail.path}.${seriesObj.thumbnail.extension}`}
                      alt={`${seriesObj.title} img`}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div className="w-full flex flex-col gap-1">
                      <h3 className="text-md text-gray-700 truncate whitespace-nowrap overflow-hidden">
                        {/* <a href="#"> */}
                        <span aria-hidden="true" className="absolute inset-0" />
                        {seriesObj.title}
                        {/* </a> */}
                      </h3>
                      {names.length !== 0 && (
                        <p className="w-[70%] text-sm text-gray-600 truncate whitespace-nowrap overflow-hidden">
                          {name}
                        </p>
                      )}
                      {seriesObj.description && (
                        <p className="w-full text-sm text-gray-600 truncate whitespace-nowrap overflow-hidden">
                          {seriesObj.description}
                        </p>
                      )}
                      <div>
                        <p className="mr-2 text-lg font-medium text-gray-900">
                          {startYear === endYear
                            ? startYear
                            : `${startYear} - ${endYear}`}
                        </p>
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
          totalCount={14753}
        />
      </div>
    </div>
  );
}
