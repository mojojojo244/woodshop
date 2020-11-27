module.exports = {
    index(req, res, next){
        res.render("static/index", {title: "Crutcher Woodcrafts"});
    },
    about(req, res, next) {
        res.render("static/about", {title: "About Us"});
    },
    products(req, res, next) {
        res.render("static/products", {title: "Products"});   
    },
}