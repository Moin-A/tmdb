import config from "../config.json";

export default (movielist) => {
  function ourFunc(item, genrelist) {
    return item.genre_ids.map((item) =>
      genrelist.filter((name) => name.id == item).map((moin) => moin.name)
    );
  }

  return movielist.map((item) => ({
    ...item,
    genre_ids: ourFunc(item, config.genrelist.genres),
  }));
};
