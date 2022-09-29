const cariOjol = (jarak) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const driverReady = true;
      if (driverReady == 1 && jarak <= 2) return resolve(5000);
      if (driverReady == 1 && jarak > 2) return resolve((jarak - 2) * 3000 + 5000);
      return reject(new Error("Maaf, untuk saat ini driver tidak tersedia."));
    }, 2000);
  });
};

async function ongkosOjol(jarak, cekFunc) {
  try {
    // validasi
    if (typeof cekFunc !== "function") throw new Error("Invalid! Data harus funtion"); 
    if (typeof jarak !== "number") throw new Error("Invalid! Data harus number"); 
    const result = await cekFunc(jarak);
    return `Selamat, driver telah ditemukan! 
Biaya = Rp ${result}`;
  } catch (error) {
    return error.message; 
  }
}

const ongkos = async () => {
  console.log(await ongkosOjol("5", cariOjol));
};
ongkos();
