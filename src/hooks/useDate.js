const useDate = () => {
  const returnDate = (dateItem) => {
    const date = new Date(dateItem);

    let year = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return `${mm}/${dd}/${year}`;
  };

  const returnTime = (timeItem) => {
    const date = new Date(timeItem);

    return date.toLocaleTimeString();
  };

  return { returnDate, returnTime };
};

export default useDate;
