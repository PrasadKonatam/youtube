export const API_KEY = "AIzaSyAD_4mENcgsPXPocQxkMa3zV8ukSWAMmGQ";
export const YOUTUBE_VIDEOS_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
// "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";

export const MOST_POPULAR_API = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key=${API_KEY}`;
