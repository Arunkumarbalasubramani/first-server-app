// const sum =(a,b)=>{a+ b};
// let [,,x,y]= process.argv;
// console.log('The Sum  is ',sum(+x,+y));
// inbuilt Packages

//OS
// const os = require('os');
// console.log('free Memory in GB', os.freemem()/1024/1024/1024);
// console.log('Total Memory in GB', os.totalmem()/1024/1024/1024);
// console.log('Version', os.version());
// console.log('Cpus', os.cpus());

//FS - to CRUD a File
// const fs = require('fs');
// const quote = `'“Today we don’t fight for one life, we fight for all of them.”
// ~ Black Panther, Avengers: Infinity War'`;

// const quote2 = "Live more, worry less 😄😊";


// // fs.writeFile('./marvel.html', quote, err =>{console.log('Completed writing!!!!!')});
// let [, , num] = process.argv;
// for (let index = 1; index <=num; index++) {
//  fs.writeFile(`./backup/text-${index}.html`, quote2, err =>{console.log('Completed writing!!!!!')});
// }
   

// fs.readFile('./backup/text-1.html','utf-8',(err, data)=>{
//     if(err){ console.log(err)}
//     else{
//         console.log(data)
//     }
// })



// fs.appendFile('./backup/text-1.html','\n'+ quote,(err)=>{console.log('Completed appending')});


// fs.unlink('./backup/text-2.html', err =>{
//     if(err){
//         console.log(err)
//     }else(console.log('File Deleted Successfully'))
// })
