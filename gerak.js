const khodamList = [
    "khodam macan putih",
    "khodam macan tutul",
    "khodam kumbang",
    "khodam singa putih",
    "khodam harimau",
    "khodam jin qorin",
    "khodam jin terkuat",
    "khodam jin terlemah",
    "khodam bidadari",
    "khodam peri",
    "khodam malaikat",
    "khodam syaitan",
    "khodam ifrit",
    "khodam marid",
    "khodam shaitan",
    "khodam jembatan",
    "khodam bumi",
    "khodam api",
    "khodam air",
    "khodam angin",
    "khodam tanah",
    "khodam laut",
    "khodam gunung",
    "khodam hutan",
    "khodam sungai",
    "khodam awan",
    "khodam hebat",
];

function pilihkhodam(event){
    event.preventDefault();
    const nama = document.getElementById("nama").value;
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = ""; 
    if (nama) {
        const randomIndex = Math.floor(Math.random() * khodamList.length);
        const khodamterpilih = khodamList[randomIndex];
        resultDiv.textContent = `Nama anda adalah ${nama} dan khodam pilihan anda adalah ${khodamterpilih}.`;

        setTimeout(() => {
            resultDiv.textContent = "";
        }, 5000);
    } else { 
        resultDiv.textContent = "Nama tidak boleh kosong";

        
        setTimeout(() => {
            resultDiv.textContent = "";
        }, 5000);
    }
}

document.getElementById("khodamForm").addEventListener("submit", pilihkhodam);