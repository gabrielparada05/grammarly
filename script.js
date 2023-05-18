import * as Grammarly from "./package-lock.json";

await Grammarly.init("client_MwkwrPLsbt9oTavevWb2dF");

Grammarly.addPlugin(
  document.querySelector("textarea"),
  { documentDialect: "british" },
);