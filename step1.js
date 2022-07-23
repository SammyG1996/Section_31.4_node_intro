const fs = require('fs');

function cat(path) {
  fs.readFile(path, 'utf-8', (err, data)=>{
    if(err){
      console.log(err);
      process.exit(1)
    }
    console.log(`file contents: ${data}`);
  })
}

cat(process.argv[process.argv.length-1]);