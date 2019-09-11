var Budi = 190;
var Kamal = 160;
var Lutfi = 178;

function Data() {
  if (Budi>Kamal) {
    console.log("Tinggi Budi 190");
    if (Lutfi>Kamal) {
      console.log("Tinggi Lutfi 178");
      if (Kamal<Budi) {
        console.log("Tinggi Kamal 160");
      }
    }
  }
}
Data();
