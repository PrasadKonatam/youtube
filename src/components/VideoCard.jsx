import React from "react";

export const formatNumber = (num) => {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num;
};

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;
  return (
    <div className="m-1  ml-2 shadow w-[400px] ">
      <div>
        <img
          className="rounded-l-lg w-full"
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
      </div>
      <div>
        <ul>
          <li
            className="font-bold overflow-hidden text-ellipsis min-h-[3rem]"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {title}
          </li>
          <li>{channelTitle}</li>
          <li>{formatNumber(statistics.viewCount)} views</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
