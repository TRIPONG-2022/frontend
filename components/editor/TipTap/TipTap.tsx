import { useCallback } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import StarterKit from '@tiptap/starter-kit';
import { useEditor, EditorContent } from '@tiptap/react';
import TipTapLink from '@tiptap/extension-link';
import TipTapImage from '@tiptap/extension-image';
import TipTapMenu from '../TipTapMenu';
import { PostEditorSchema } from '@/constants/schema';
import * as Styled from './TipTap.styled';

interface TiptapProps {
  initialContent: string;
}
export default function TipTap({ initialContent }: TiptapProps) {
  const { setValue } = useFormContext<PostEditorSchema>();
  const onChange = useCallback(
    (content: string) => {
      setValue('content', content);
    },
    [setValue],
  );

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
    content: initialContent || '',
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
