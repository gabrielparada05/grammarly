 // Create a classic editor instance
 const editor = await ClassicEditor.create(
    document.getElementById("textarea")
  );

  // Configure the Grammarly Text Editor SDK
  Grammarly.init().then((grammarly) => {
    grammarly.addPlugin(editor.ui.getEditableElement(), {
      autocomplete: "on",
      documentDialect: "canadian"
    });
  });