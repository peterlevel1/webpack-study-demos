import coco from "./mock/coco";
import dataDev from "./mock/dataDev";
import dataSource from "./mock/dataSource";
import opCenter from "./mock/opCenter";
import app from "./mock/app";

export default {
  ...app,
  ...coco,
  ...dataDev,
  ...dataSource,
  ...opCenter
};
