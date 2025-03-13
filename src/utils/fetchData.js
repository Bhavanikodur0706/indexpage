export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '42671c7718msh23a4e417f83cdb1p1efd14jsn0c8876ce2115',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
