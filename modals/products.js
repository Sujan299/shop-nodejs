const fs = require('fs');
const path = require('path');


const products = [];

module.exports = class Product{
    constructor(t){
        this.title = t;
    }
    save(){
        const p = path.join(path.dirname(process.mainModule.filename),'data','product.json');
        // path.dirname(process.mainModule.filename) represents root file.
        fs.readFile(p, (err, fileContent)=>{
            let products = [];
            if(!err){
                products = JSON.parse(fileContent); // parse converts json to array
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products),(err)=>{ // stringify converts array to json
                console.log(err);
            });
        })
        // products.push(this) // here this represents object which we'll create using this Product class
    }
    static fetchAll(callback){ // a asynchronous function
        const p = path.join(path.dirname(process.mainModule.filename),'data','product.json');
        fs.readFile(p, (err, fileContent)=>{
            if(err){
                callback([]);
            }
            callback(JSON.parse(fileContent));
        })
        // return products;
    }
}