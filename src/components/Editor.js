import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
  SourceEditing,
  GeneralHtmlSupport,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";

const Editor = () => {
  const [data, setData] = useState("<p>Hello from CKEditor 5 in React!</p>");

  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: {
          items: ["undo", "redo", "|", "bold", "italic", "sourceEditing"],
        },
        plugins: [
          Bold,
          Essentials,
          Italic,
          Mention,
          Paragraph,
          Undo,
          SourceEditing,
          GeneralHtmlSupport,
        ],
        htmlSupport: {
          allow: [
            {
              name: "div",
              styles: true,
            },
            {
              name: "p",
              styles: true,
            },
          ],
        },
        initialData: data,
      }}
      data={data}
      onChange={(_, editor) => {
        const data = editor.getData();
        setData(data);
      }}
    />
  );
};

export default Editor;
