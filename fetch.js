function getData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((responseJson) => {
      responseJson.forEach((data) => {
        console.log(`${data.name}`);
      });
    })
    .catch((error) => console.log(error));
}
getData();