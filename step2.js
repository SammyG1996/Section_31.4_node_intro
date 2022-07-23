const fs = require('fs');
const axios = require('axios');
const argv = process.argv;


function cat(path) {
  fs.readFile(path, 'utf-8', (err, data)=>{
    if(err){
      console.log(err);
      process.exit(1)
    }
    console.log(`file contents: ${data}`);
  })
}

function webCat(url) {
  axios.get(`${url}`).then(function(resp) {
  console.log(resp.data.slice(0, 80), '...');
});

}

if(argv[argv.length-1].includes('http')){
  webCat(argv[argv.length-1])
} else{
  cat(process.argv[process.argv.length-1]);
}



