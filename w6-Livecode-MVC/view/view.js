class View{
    static tampilMahasiswa(data){
        for (let i = 0; i < data.length; i++) {
           console.log(`Nama Mahasiswa: ${data[i].nama}`);
           console.log(`Alamat Mahasiswa: ${data[i].alamat}`);
           console.log("");
        }
    }
    static tampilpesan(data){
        console.log(data);
       
    }
}

module.exports = View;