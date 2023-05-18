 // Create a classic editor instance
 const editor =  ClassicEditor.create(
    document.getElementById("textarea")
  );

  // Configure the Grammarly Text Editor SDK
  Grammarly.init().then((grammarly) => {
    grammarly.addPlugin(editor.ui.getEditableElement(), {
      autocomplete: "on",
      documentDialect: "canadian"
    });
  });

  /*import * as Grammarly from "./package-lock.json";

await Grammarly.init("client_MwkwrPLsbt9oTavevWb2dF");

Grammarly.addPlugin(
  document.querySelector("textarea"),
  { documentDialect: "british" },
);*/