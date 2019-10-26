"use strict";

import * as express from "express";

module Route {

  export class Dialog {

    public dialog(req: express.Request, res: express.Response, next: express.NextFunction) {
      //render page
      res.render("dialog");
    }
  }
}

export = Route;