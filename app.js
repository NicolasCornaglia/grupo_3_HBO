let express = require('express');
let app = express();
const PORT = 3000;
const path = require('path');
const routes = require("./routes/_routes");


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


// app.use('/', homeRoutes);
// app.use('/productDetail', productDetailRoutes);
// app.use('/login', loginRoutes);
// app.use('/register', registerFormRoutes);
// app.use('/productCart', productCartRoutes);
// app.use('/creacion', creacionRoutes);

app.use('', routes);

app.listen(PORT, ()=>{
   console.log(`Servidor funcionando en el puerto ${PORT}`);
});


