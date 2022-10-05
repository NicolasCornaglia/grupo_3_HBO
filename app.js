let express = require('express');
let app = express();
var cors = require('cors')
const PORT = 3001;
const path = require('path');
const methodOverride = require('method-override');
const routes = require("./routes/routes");
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const apiUsersRoutes = require("./routes/apiUsersRoutes")
const apiProductsRoutes = require("./routes/apiProductsRoutes")
const cookies = require("cookie-parser")
const session = require("express-session");
const publicPath = path.resolve(__dirname, "./public");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");

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

// Middlewares
app.use(session({
    secret: "Informacion confidencial",
    resave: false,
    saveUninitialized: false,
}));
app.use(express.static(publicPath));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookies());
app.use(userLoggedMiddleware);
app.use(cors())

//Template Engine
app.set('view engine', 'ejs');
app.set("views", path.resolve(__dirname, "./views"));

app.use('/', routes);
app.use('/u', userRoutes);
app.use('/p', productRoutes);
// apis for dashboard
app.use('/api/users', apiUsersRoutes);
app.use('/api/products', apiProductsRoutes);

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});

