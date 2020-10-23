// formula
// from = ( currentPage - 1 ) * itemsPerPage

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const itemsPerPage = 8;

const currentPage = 1;

const start = (currentPage - 1) * itemsPerPage;

const end = start + itemsPerPage;

const result = data.slice(start, end);

console.log("result :", result);
