require('app-module-path').addPath(__dirname + "/../");

import * as markoRequire from "marko/node-require"
markoRequire.install()
import * as lasso from "lasso"

import * as express from "express";
import * as compression from "compression";
import * as bodyParser from "body-parser";
import * as errorhandler from "errorhandler";
import * as methodOverride from "method-override";
import * as serveStatic from "serve-static"

import * as index from "./v2/backend/pages/home";

//import * as db from "./db";

var app = express();

// Configuration
console.log(__dirname + '/static');
lasso.configure({
    plugins: ['lasso-marko', 'lasso-less','lasso-stylus'],
    minify: false,
    outputDir: __dirname + '/static',
    bundlingEnabled: false,
    fingerprintsEnabled: false,
    bundles: [ // Create separate JS bundles. Only needed to guage the size of each library.
        {
            name: 'marko',
            dependencies: [
                'require: marko'
            ]
        },
        {
            name: 'marko-widgets',
            dependencies: [
                'require: marko-widgets'
            ]
        },
        {
            name:'common-lib',
            dependencies: [

                'require: idb-wrapper',
                'require: bluebird',
                'require: marko-widgets',
                'require: framework7'
            ]
        },
        {
            name: 'framework7IOSCSS',
            dependencies:[
                { "path": "framework7/dist/css/framework7.ios.css", "slot": "ios-slot" },
                {"path":"framework7/dist/css/framework7.ios.colors.css","slot":"ios-slot"}
            ]
        },
        {
            name: 'framework7MaterialCSS',
            dependencies:[
                {"path":"framework7/dist/css/framework7.material.min.css","slot":"material-slot"},
                {"path":"framework7/dist/css/framework7.material.colors.min.css","slot":"material-slot"}
            ]
        }


    ]
});





app.use(compression());
app.use(bodyParser.json());
app.use(methodOverride());


app.use('/static', serveStatic(__dirname + '/static/') as any);

app.use(errorhandler({
    log:true
}))




// Routes

app.get('/', index.get);


app.use( (err:any,req,res,next)=>{

    res.status(err.statusCode).send(err.message)
})


app.listen(3000, function(){
    console.log("Demo Express server listening on port %d in %s mode", 3000, app.settings.env);
});

export var App = app;