import * as Grammarly from "@grammarly/editor-sdk";

await Grammarly.init("client_MwkwrPLsbt9oTavevWb2dF");

grammarly.addPlugin(
    document.querySelector("textarea"),
    { documentDialect: "british" },
  );
