export default function paginate(apiData, pageNo) {
  if (apiData) {
    const itemsPerPage = 8;
    const start = (pageNo - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const result = apiData.slice(start, end);
    // console.log("result:", result);
    return result;
  }
  return;
}
