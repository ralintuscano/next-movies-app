// formula
// from = ( currentPage - 1 ) * itemsPerPage

// import PaginateSeries from "../components/PaginateSeries";

// const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// data = {
//   pageNo: 1,
//   seriesDetails: [
//     { imdbId: 2443434, title: "batman", year: 1999, plot: "abc" },
//     { imdbId: 2, title: "batman", year: 1, plot: "abc" },
//     { imdbId: 3, title: "batman", year: 1999, plot: "abc" },
//     { imdbId: 4, title: "batman", year: 1999, plot: "abc" },
//     { imdbId: 5, title: "batman", year: 1999, plot: "abc" },
//     { imdbId: 6, title: "batman", year: 1999, plot: "abc" },
//     { imdbId: 7, title: "batman", year: 1999, plot: "abc" },
//     { imdbId: 8, title: "batman", year: 1999, plot: "abc" },
//     { imdbId: 9, title: "batman", year: 1999, plot: "abc" },
//   ],
// };

// const itemsPerPage = 8;

// const currentPage = 1;

// const start = (currentPage - 1) * itemsPerPage;

// const end = start + itemsPerPage;

// const result = data.seriesDetails.slice(start, end);

// console.log("result :", result);

export default function paginate(apiData, pageNo) {
  if (apiData) {
    const itemsPerPage = 8;
    const start = (pageNo - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const result = apiData.slice(start, end);
    return result;
  }
  return;
  //   console.log("result :", result);
}
