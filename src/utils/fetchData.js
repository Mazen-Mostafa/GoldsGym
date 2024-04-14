export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "64d7e2ce40msh0238e4273816bcdp10b582jsn1b77f3933d2d",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const videoOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "64d7e2ce40msh0238e4273816bcdp10b582jsn1b77f3933d2d",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
