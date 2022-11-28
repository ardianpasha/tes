// property 
//  id: sebagai code unik yang dimulai dari angka 1, setiap penambahan id bertambah 1
//  name: sebagai nama user karakter dalam game
//  job: sebagai pekerjaan karakter dalam game
//  level: saat awal level bernilai 1, nanti level bertambah setiap ada command yang dijalan

const fs = require('fs');


class ModelGaming{
    constructor(id=1, name='', job='', level=1) {
        this.id = id
        this.name = name
        this.job = job
        this.level = level
    }
    static getData(){
        return new Promise((ya,tidak)=>{
            fs.readFile('./data.json', 'utf-8', (err, data)=>{
                if(err){
                    tidak(err);
                }else{
                    ya(JSON.parse(data));
                }
            })
        })  
    }

    static saveData(data){
        return new Promise((ya,tidak)=>{
         fs.writeFile('./data.json', JSON.stringify(data, null, 2), function(err) {
            if(err){
                tidak(err);
            }else{
                ya('berhasil');
            }
         })
        })  
    }
}


module.exports = ModelGaming;