const mahasiswaModel = require('../model/model');
const mahasiswaView = require('../view/view');

class Controller{
    static async getMahasiswa(){
        try {
            let data = await mahasiswaModel.getData();
            mahasiswaView.tampilMahasiswa(data);
        } catch (error) {
            mahasiswaView.tampilpesan(error);
        }
    }

    static async addMahasiswa(id, nama, alamat){
        try {
            let data = await mahasiswaModel.getData();
            data.push({id, nama, alamat})
            let hasil = await mahasiswaModel.saveData(data);
            mahasiswaView.tampilpesan(hasil);
        } catch (error) {
            mahasiswaView.tampilpesan(error);
        } 
    }

    static async editNama(id, nama){
        try {
            let data = await mahasiswaModel.getData();
            let err=false;
            data.forEach((element, index) => {
                if(element.id == id){
                    data[index].nama=nama;
                    err=true;
                }
            });
            // data.push({id, nama, alamat})
            if(err == false){
                mahasiswaView.tampilpesan("id tidak ada");
            }else{
                let hasil = await mahasiswaModel.saveData(data);
                mahasiswaView.tampilpesan(hasil);
              
            }
            // console.log(data);
        } catch (error) {
            mahasiswaView.tampilpesan(error);
        }
      
    }

    static async delete(id){
        try {
            let data = await mahasiswaModel.getData();
            let err=false;
            data.forEach((element, index) => {
                if(element.id == id){
                    data.splice(index, 1); // 2nd parameter means remove one item only
                    err=true;
                }
            });
            // data.push({id, nama, alamat})
            if(err == false){
                mahasiswaView.tampilpesan("id tidak ada");
         
            }else{
                let hasil = await mahasiswaModel.saveData(data);
                mahasiswaView.tampilpesan(hasil);
            }// console.log(data);
        } catch (error) {
            mahasiswaView.tampilpesan(error);
        }
      
    }
}

module.exports = Controller;