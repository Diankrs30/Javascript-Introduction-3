const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "January",
      "February",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};

const showMonth = (error, element) => {
  if (element.length > 0) {
    let show = "";
    element.map((month) => show += month + " ");
    console.log(show);
    return;
  }
  return console.log(error.message);
};

getMonth(showMonth);
