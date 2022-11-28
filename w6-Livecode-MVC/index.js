// console.log(process.argv);

// node app.js editNama 3 ali
// node app.js delete 3

const mahasiswaController = require('./controller/controller');
switch (process.argv[2]) {
    case 'help':
            console.log(`all # Melihat list Karakter dalam Fosan Game
add <name> <job> # Menambahkan karakter dalam game
delete <name> # Menghilangkan karakter dalam game
change <name> <job> # Mengganti job pada karakter yang dipiih
levelup <name> <Level> # Menambah jumlah level pada karakter yang dipilih
            `);
        break;
    case 'all':
            mahasiswaController.addMahasiswa(process.argv[3], process.argv[4], process.argv[5])
    break;
    case 'editNama':
            mahasiswaController.editNama(process.argv[3], process.argv[4]);
    break;
    case 'delete':
        mahasiswaController.delete(process.argv[3]);
    break;
    default:
        console.log('maaf command tidak ada!');
        break;
}

