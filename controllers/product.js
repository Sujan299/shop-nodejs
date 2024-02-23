// const products = []; I am doing these things from modals project.js
const Product = require('../modals/products');
// const products = [];
exports.getAddProducts = (req, res, next)=>{
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    res.render('add-product', {docTitle: "Add Product", path: '/admin/add-product', activeProduct: true})
}

exports.postAddProducts = (req, res, next)=>{
    console.log(req.body);
    // products.push({title: req.body.title}) I am doing these things from modals project.js
    const products = new Product(req.body.title);
    products.save();


    res.redirect('/');
}

exports.getProducts = (req, res, next)=> {
    Product.fetchAll((products) =>{
    res.render('shop', {prods: products, docTitle: 'Shop', path:'/', activeShop: true});
    }); // used static while creating fetchAll function that's why we accessed
    // directly.
}
