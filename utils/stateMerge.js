data = {
  pageNo: 1,
  seriesDetails: [
    { imdbId: 2443434, title: "batman", year: 1999, plot: "abc" },
    { imdbId: 2, title: "batman", year: 1, plot: "abc" },
  ],
};

const ten = [
  { imdbId: 10, title: "batman", year: 1999, plot: "abc" },
  { imdbId: 11, title: "batman", year: 1999, plot: "abc" },
  { imdbId: 12, title: "batman", year: 1999, plot: "abc" },
  { imdbId: 13, title: "batman", year: 1999, plot: "abc" },
];

Array.prototype.push.apply(data.seriesDetails, ten);

console.log(data.seriesDetails);
