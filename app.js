let express = require('express');
let app = express();
const PORT = 3000;
const path = require('path');
const methodOverride = require('method-override');
const routes = require("./routes/_routes");
const busboyBodyParser = require('busboy-body-parser');


const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));
app.use(methodOverride('_method'));

// LiveReload
if (process.argv[2] !== 'prod') {
    const livereload = require("livereload");
    const connectLiveReload = require("connect-livereload");

    const liveReloadServer = livereload.createServer();
    liveReloadServer.server.once("connection", () => {
        setTimeout(() => {
            liveReloadServer.refresh("/");
        }, 50);
    });

    // LiveReload middleware
    app.use(connectLiveReload());
}

app.set('view engine', 'ejs');
app.set("views", path.resolve(__dirname, "./views"));

// middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(busboyBodyParser());

// app.use('/', homeRoutes);
// app.use('/productDetail', productDetailRoutes);
// app.use('/login', loginRoutes);
// app.use('/register', registerFormRoutes);
// app.use('/productCart', productCartRoutes);
// app.use('/creacion', creacionRoutes);

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});


// const fs = require('fs');
// const products = JSON.parse(fs.readFileSync(path.join(__dirname, '/DB/products.json'), 'utf-8'));

// console.log('Productos antes de actualizar', products);
// products.forEach(product => {
//     product.category_id = Math.floor(Math.random() * 3)+1;;
// })
// console.log('Productos actualizados', products);
// fs.writeFileSync(path.join(__dirname, '/DB/products.json'), JSON.stringify(products));