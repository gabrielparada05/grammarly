 // Create a classic editor instance
 import * as Grammarly from "./package-lock.json";
 
 const editor =  ClassicEditor.create(     //await delete before classic
    document.getElementById("textarea")
  );

  // Configure the Grammarly Text Editor SDK
  Grammarly.init().then((grammarly) => {
    grammarly.addPlugin(editor.ui.getEditableElement(), {
      autocomplete: "on",
      documentDialect: "canadian"
    });
  });

  /*

await Grammarly.init("client_MwkwrPLsbt9oTavevWb2dF");

Grammarly.addPlugin(
  document.querySelector("textarea"),
  { documentDialect: "british" },
);*/