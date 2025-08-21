import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams, Link } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import { MOST_POPULAR_API } from "../utils/constants";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const [upNextVideos, setUpNextVideos] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  // Fetch "Up Next" videos
  useEffect(() => {
    const fetchUpNextVideos = async () => {
      try {
        const response = await fetch(MOST_POPULAR_API);
        const data = await response.json();
        setUpNextVideos(data.items || []);
      } catch (error) {
        console.error("Error fetching up next videos:", error);
      }
    };

    fetchUpNextVideos();
  }, []);

  return (
    <div className="flex flex-col md:flex-row p-4 overflow-hidden">
      {/* Left: Video + Comments */}
      <div className="flex-1 min-w-0">
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <CommentsContainer />
      </div>

      {/* Right: Up Next Videos */}
      <div className="w-full md:w-96 md:ml-4 mt-6 md:mt-0 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-2">Up Next</h2>
        {upNextVideos.map((video) => (
          <Link
            key={video.id}
            to={`/watch?v=${video.id}`}
            className="flex mb-3 hover:bg-gray-100 p-2 rounded-lg"
          >
            {/* Thumbnail */}
            <img
              className="w-40 h-24 object-cover rounded-lg flex-shrink-0"
              src={video.snippet?.thumbnails?.medium?.url}
              alt={video.snippet?.title}
            />

            {/* Text Info */}
            <div className="ml-3 flex flex-col justify-start overflow-hidden">
              <p className="text-sm font-semibold line-clamp-2 break-words">
                {video.snippet?.title}
              </p>
              <p className="text-xs text-gray-600 truncate">
                {video.snippet?.channelTitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
