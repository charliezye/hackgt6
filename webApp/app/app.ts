// lib/app.ts
import express = require('express');
import * as indexRoute from '../app/routes/index';
import * as dialogRoute from '../app/routes/dialog';

// Create a new express application instance
const app: express.Application = express();
const router = express.Router();
const index: indexRoute.Index = new indexRoute.Index();
const dialog: dialogRoute.Dialog = new dialogRoute.Dialog();


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
 
/**
 * On start up this points to the initial home page.
 */

 // This is the home page
 router.get("/", index.index.bind(index.index));
 
 // This is the dialog page
//  router.get('/', dialog.dialog.bind(dialog.dialog));
 app.use(router);




app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
