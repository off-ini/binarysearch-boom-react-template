import React from 'react'

import Editor from "@monaco-editor/react";

const jscode = `
// j'ai trois notes dans un tableau
var notes = [20,10,15];
var somme = 0;

// je fais une boucle avec i=0 puis i=1 et enfin i=2
for(var i = 0; i<3;i++){
  somme = somme + notes[i];  // somme = 20, puis 20+10 = 30, puis 30 +15 = 45
}

// je divise par le nombre de notes
var moyenne = somme/3;
// dans la console
console.log("la moyenne est de "+moyenne);
// ou dans le body
document.body.innerHTML = "La moyenne est de "+ moyenne;
`

function CodeEditor() {
  const handleEditorChange = (value, event) => {
    // here is the current value
  }

  const handleEditorDidMount = (editor, monaco) => {
    console.log("onMount: the editor instance:", editor);
    console.log("onMount: the monaco instance:", monaco)
  }

  const handleEditorWillMount = (monaco) => {
    console.log("beforeMount: the monaco instance:", monaco);
  }

  const handleEditorValidation = (markers) => {
    // model markers
    // markers.forEach(marker => console.log('onValidate:', marker.message));
  }

  return (
   <Editor
      className='w-full'
      height="85%"
      defaultLanguage="javascript"
      defaultValue={jscode}
      onChange={handleEditorChange}
      onMount={handleEditorDidMount}
      beforeMount={handleEditorWillMount}
      onValidate={handleEditorValidation}
   />
  );
}

export default CodeEditor;