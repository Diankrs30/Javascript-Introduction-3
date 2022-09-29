function getData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((responseJson) => {
      // console.log(responeJson); //mengecek data fetch sudah masuk atau belum
      let dataUser = responseJson.forEach((data) => {
        console.log(`${data.name}`);
      });
    })
    .catch((error) => console.log(error));
}

getData();