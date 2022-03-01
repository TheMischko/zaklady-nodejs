import * as fs from 'fs';

if(!process.argv || process.argv.length < 4){
    console.log();
    console.log("node main.mjs <source_file> <target_file>");
    console.log("Copies content of source text file to target text file.")
} else {
    const source = process.argv[2];
    const target = process.argv[3];

    fs.readFile(source, (err, data) => {
        if(err){
            console.log(err.message);
            return;
        }
        fs.writeFile(target, data, (err1) => {
            if(err1) console.log(err1.message);
        })
    });
}

