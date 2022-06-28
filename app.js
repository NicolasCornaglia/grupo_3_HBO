let express = require('express');
let app = express();
const PORT = 3000;
const path = require('path');
const homeRoutes = require("./routes/home");
const productDetailRoutes = require("./routes/productDetail");
const loginRoutes = require("./routes/login");
const registerFormRoutes = require("./routes/registerForm");
const productCartRoutes = require("./routes/productCart");
const creacionRoutes = require("./routes/creacion");

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

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


app.use('/', homeRoutes);
app.use('/productDetail', productDetailRoutes);
app.use('/login', loginRoutes);
app.use('/register', registerFormRoutes);
app.use('/productCart', productCartRoutes);
app.use('/creacion', creacionRoutes);


app.listen(PORT, ()=>{
   console.log(`Servidor funcionando en el puerto ${PORT}`);
});


