"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./src/app");
const port = 5000;
app_1.app.listen(port, () => console.log("Server started on PORT 5000"));
