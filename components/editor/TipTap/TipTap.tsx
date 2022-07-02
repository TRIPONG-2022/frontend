import StarterKit from '@tiptap/starter-kit';
import { useEditor, EditorContent } from '@tiptap/react';
import * as Styled from './TipTap.styled';

interface TipTapProps {
  content?: string;
  onChange: (content: string) => void;
}

export default function TipTap({
  content: initalContent,
  onChange,
}: TipTapProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4],
        },
      }),
    ],
    content: '내용을 작성하세요.',
    autofocus: false,
    onUpdate: ({ editor }) => {
      const content = editor.getHTML();
      onChange(content);
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <Styled.EditorContentContainer>
      <EditorContent editor={editor} />
    </Styled.EditorContentContainer>
  );
}

const sampleContent = `<h2>
Hi there,
</h2>
<p>
this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
<li>
  That’s a bullet list with one …
</li>
<li>
  … or two list items.
</li>
</ul>
<p>
Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
Wow, that’s amazing. Good work, boy! 👏
<br />
— Mom
</blockquote>`;
