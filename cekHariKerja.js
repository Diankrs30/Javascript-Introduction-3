const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// then catch
const workDay = (day) =>
  cekHariKerja(day)
    .then((res) => {
      console.log(`${res} adalah hari kerja.`);
    })
    .catch((error) => {
      console.log(error.message);
    });

// workDay("senin");

// penjelasan
/*
then dan catch
.then => digunakan untuk menjalankan resolve yaitu ketika fungsi promise terpenuhi.
.catch => digunakan untuk menjalankan reject yaitu ketika fungsi promise tidak terpenuhi.
*/

// try catch
async function cekWorkDay(day, cekFunc) {
  try {
    // validasi
    if (typeof cekFunc !== "function") throw new Error("Invalid! Data harus function.");
    if (typeof day !== "string") throw new Error("Invalid! Data harus string.");

    const result = await cekFunc(day);
    console.log(`${result} adalah hari kerja.`);
  } catch (error) {
    console.log(error.message);
  }
}
cekWorkDay("sabtu", "cekHariKerja");

// penjelasan
/*
try dan catch
untuk menghandle error pada async/await yaitu menggunakan try catch didalam fungsi yang dibuat.
.try => mendefinisikan block kode yang akan dieksekusi, dimana kode tersebut berpeluang menimbulkan error.
.catch => digunakan untuk menangkap dan menangani error yang terjadi di blok try.
apabila kode di dalam blok try tidak menghasilkan error, maka kode di dalam block catch akan diabaikan dan tidak dijalankan.
*/