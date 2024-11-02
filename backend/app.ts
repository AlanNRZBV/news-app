import * as mongoose from "mongoose";
import {config} from "./config";
import express from 'express'

const app = express()

const run = async ()=>{
  await mongoose.connect(config.mongoose.db);

  app.listen(config.port, () => {
    console.log(`server started on ${config.port} port`);
  });

  process.on('exit', () => {
    mongoose.disconnect();
  });

}

void run()