"use strict";

import { parse } from "./parser/jsFxxk";
import { generate } from "escodegen";
import fs from "fs";

if (process.argv.length !== 3) {
  console.log("引数にファイル名を指定してください");
  process.exit(1);
}

try {
  const fileName = process.argv[2] || "";
  const jsFxxk = String(fs.readFileSync(fileName));
  const result = parse(jsFxxk);
  const resultJson = JSON.stringify(result, null, 2);
  const resultJS = generate(result, {
    format: {
      quotes: "double",
    },
  });
  fs.writeFileSync("output.json", resultJson + "\n");
  fs.writeFileSync("output.js", resultJS + "\n");
} catch (error) {
  console.error(error);
}
