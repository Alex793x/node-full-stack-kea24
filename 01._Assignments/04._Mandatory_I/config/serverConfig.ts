import express, { Application } from "express";
import ApiRouter from "../routers/apiRouter.js";
import HomeRouter from "../routers/homeRouter.js";

const useSetupServer = (): Application => {
  const app: Application = express();

  app.use(express.static("public"));
  app.use(express.static("dist"));
  app.use(express.json());

  app.use(HomeRouter);
  app.use(ApiRouter);

  return app;
};

export default useSetupServer;