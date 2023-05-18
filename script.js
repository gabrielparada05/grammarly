import * as Grammarly from "./package-lock.json";

await Grammarly.init("client_MwkwrPLsbt9oTavevWb2dF");

grammarly.addPlugin(
    document.querySelector("textarea"),
    { documentDialect: "british" },
  );
