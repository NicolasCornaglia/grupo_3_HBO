let express = require('express');
let app = express();
const PORT = 3000;
const path = require('path');
const homeRoutes = require("./routes/home");
const productDetailRoutes = require("./routes/productDetail");
const loginRoutes = require("./routes/login");
const registerFormRoutes = require("./routes/registerForm");
const productCartRoutes = require("./routes/productCart");
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.set('view engine', 'ejs');
app.set("views", path.resolve(__dirname, "./views"));


app.use('/', homeRoutes);
app.use('/productDetail', productDetailRoutes);
app.use('/login', loginRoutes);
app.use('/register', registerFormRoutes);
app.use('/productCart', productCartRoutes);


app.listen(PORT, ()=>{
   console.log(`Servidor funcionando en el puerto ${PORT}`);
});


