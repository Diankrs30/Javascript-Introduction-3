const cariBuku = (book) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const books = [
        { title: "The Da Vinci Code", author: "Dan Brown", place: "1A" },
        { title: "The Ghost", author: "Robert Harris", place: "4B" },
        { title: "White Teeth", author: "Zadie Smith", place: "14A" },
        { title: "Fifty Shades of Grey", author: "E. L. James", place: "5C" },
        { title: "Jamie's Italy", author: "Jamie Oliver", place: "8A" },
        { title: "I Can Make You Thin", author: "Paul McKenna", place: "7B" },
        { title: "Harry Potter and the Deathly Hallows", author: "J.K Rowling", place: "4C"},
      ];

      const getBook = books.filter((item) => {
        return item.title === book;
      });

      if (getBook.length > 0) {
        return resolve(getBook);
      } else {
        return reject(new Error("Buku tidak ditemukan"));
      }
    }, 1000);
  });
};

async function findBook(book, cekFunc) {
  try {
    if (typeof cekFunc !== "function")
      throw new Error("Invalid! Data harus function.");
    if (typeof book !== "string")
      throw new Error("Invalid! Data harus string.");

    const result = await cekFunc(book);
    const data = result[0];
    const { title, place } = data;
    return `Buku "${data.title}" ada di rak no. ${data.place}.`;
  } catch (error) {
    return error.message;
  }
}

const buku = async () => {
  console.log(await findBook("I Can Make You Thin", cariBuku));
};
buku(); 