import React, { useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import styles from './TextEditor.module.scss';

const TextEditor = ({ 
  placeholder = "Enter your content here...", 
  value = "", 
  onChange,
  height = 300,
  title,
  enableHtml = false
}) => {
  const editorRef = useRef(null);

  const stripHtmlTags = (html) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const handleEditorChange = (content, editor) => {
    if (onChange) {
      const finalContent = enableHtml ? content : stripHtmlTags(content);
      onChange(finalContent);
    }
  };

  useEffect(() => {
    if (editorRef.current) {
      const currentContent = enableHtml ? editorRef.current.getContent() : stripHtmlTags(editorRef.current.getContent());
      const newValue = value || '';
      
      // Only update if the content is actually different and the editor is not focused
      if (currentContent !== newValue && !editorRef.current.hasFocus()) {
        editorRef.current.setContent(newValue);
      }
    }
  }, [value, enableHtml]);

  return (
    <div className={styles.textEditor}>
      <p>{title}</p>
      <Editor
        apiKey="dwwo99hcqqm1cwdot3zrdys05gzxzz2qy772bm8m1a8e3svk" // You'll need to get a free API key from TinyMCE
        onInit={(evt, editor) => editorRef.current = editor}
        value={value}
        init={{
          height: height,
          menubar: false,
          plugins: enableHtml ? [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ] : ['wordcount'],
          toolbar: enableHtml ? 
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help' :
            'undo redo',
          content_style: `
            body { 
              font-family: Outfit, sans-serif; 
              font-size: 16px; 
              line-height: 1.5;
              color: #111827;
            }
          `,
          placeholder: placeholder,
          branding: false,
          resize: false,
          statusbar: false,
          skin: 'oxide',
          content_css: 'default',
          forced_root_block: enableHtml ? 'p' : 'div',
          newline_behavior: enableHtml ? 'block' : 'linebreak',
          formats: enableHtml ? {} : {
            bold: {},
            italic: {},
            underline: {},
            strikethrough: {},
            forecolor: {},
            hilitecolor: {},
            fontname: {},
            fontsize: {},
            blockquote: {},
            removeformat: {}
          }
        }}
        onEditorChange={handleEditorChange}
      />
    </div>
  );
};

export default TextEditor;
