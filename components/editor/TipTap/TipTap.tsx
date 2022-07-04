import StarterKit from '@tiptap/starter-kit';
import { useEditor, EditorContent } from '@tiptap/react';
import TipTapLink from '@tiptap/extension-link';
import TipTapImage from '@tiptap/extension-image';
import TipTapMenu from '../TipTapMenu';
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
          levels: [1, 2, 3],
        },
        dropcursor: {
          width: 2,
          color: 'rgba(0, 0, 0, 0.4)',
        },
      }),
      TipTapLink.configure({
        autolink: true,
        openOnClick: true,
        protocols: ['http', 'https'],
        validate: (href) => /^(https|http)?:\/\//.test(href),
      }),
      TipTapImage.configure({
        inline: false,
        allowBase64: true,
      }),
    ],
    injectCSS: true,
    content: initalContent || '',
    onUpdate: ({ editor }) => {
      const content = editor.getHTML();
      onChange(content);
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <Styled.Container>
      <TipTapMenu editor={editor} />
      <Styled.EditorContentContainer onClick={() => editor.chain().focus()}>
        <EditorContent editor={editor} />
      </Styled.EditorContentContainer>
    </Styled.Container>
  );
}
