import React, { useCallback } from 'react';
import { Editor } from '@tiptap/react';
import SVGIcon, { SVGIconType } from '@/components/shared/SVGIcon';
import * as Styled from './TipTapMenu.styled';
import { requestUploadImage } from '@/api/post';

interface TipTapMenuItem {
  icon: SVGIconType;
  isActive?: boolean;
  onClick?: () => void;
}

interface TipTapMenuProps {
  editor: Editor;
}

export default function TipTapMenu({ editor }: TipTapMenuProps) {
  const onChangeImage = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files) {
        const imageFile = files[0];
        const imageURL = await requestUploadImage(imageFile);
        if (imageURL) {
          editor
            .chain()
            .focus()
            .setImage({ src: imageURL, alt: imageFile.name })
            .run();
        }
      }
    },
    [editor],
  );

  const setLink = useCallback(() => {
    if (editor.isActive('link')) {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);
    if (url) {
      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url, target: '_blank' })
        .run();
    }
  }, [editor]);

  const TextMenuItems: TipTapMenuItem[] = [
    {
      icon: 'EditorBoldIcon',
      isActive: editor.isActive('bold'),
      onClick: () => editor.chain().focus().toggleBold().run(),
    },
    {
      icon: 'EditorItalicIcon',
      isActive: editor.isActive('italic'),
      onClick: () => editor.chain().focus().toggleItalic().run(),
    },
    {
      icon: 'EditorStrikeIcon',
      isActive: editor.isActive('strike'),
      onClick: () => editor.chain().focus().toggleStrike().run(),
    },
    {
      icon: 'EditorFontSizeIcon',
      isActive: editor.isActive('heading', { level: 3 }),
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    },
  ];

  const ParagraphMenuItems: TipTapMenuItem[] = [
    {
      icon: 'EditorH1Icon',
      isActive: editor.isActive('heading', { level: 1 }),
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    },
    {
      icon: 'EditorH2Icon',
      isActive: editor.isActive('heading', { level: 2 }),
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
      icon: 'EditorParagraphIcon',
      isActive: editor.isActive('paragraph'),
      onClick: () => editor.chain().focus().setParagraph().run(),
    },
    {
      icon: 'EditorBulletListIcon',
      isActive: editor.isActive('bulletList'),
      onClick: () => editor.chain().focus().toggleBulletList().run(),
    },
    {
      icon: 'EditorOrderedListIcon',
      isActive: editor.isActive('orderedList'),
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
    },
  ];

  const OtherMenuItems: TipTapMenuItem[] = [
    {
      icon: 'EditorBlockQuoteIcon',
      isActive: editor.isActive('blockquote'),
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
    },
    {
      icon: 'EditorHorizontalRuleIcon',
      isActive: editor.isActive('horizontalrule'),
      onClick: () => editor.chain().focus().setHorizontalRule().run(),
    },
    {
      icon: 'EditorLinkIcon',
      isActive: editor.isActive('link'),
      onClick: setLink,
    },
  ];

  return (
    <React.Fragment>
      <Styled.MenuContainer>
        {TextMenuItems.map(({ icon, isActive, onClick }) => (
          <Styled.MenuButton
            key={`menu-${icon}`}
            $isActive={isActive}
            onClick={onClick}
          >
            <SVGIcon icon={icon} size={20} />
          </Styled.MenuButton>
        ))}
        <Styled.Divider />
        {ParagraphMenuItems.map(({ icon, isActive, onClick }) => (
          <Styled.MenuButton
            key={`menu-${icon}`}
            $isActive={isActive}
            onClick={onClick}
          >
            <SVGIcon icon={icon} size={20} />
          </Styled.MenuButton>
        ))}
        <Styled.Divider />
        {OtherMenuItems.map(({ icon, isActive, onClick }) => (
          <Styled.MenuButton
            key={`menu-${icon}`}
            $isActive={isActive}
            onClick={onClick}
          >
            <SVGIcon icon={icon} size={20} />
          </Styled.MenuButton>
        ))}
        <Styled.MenuButtonLabel htmlFor="upload-image">
          <SVGIcon icon="EditorImageIcon" size={20} />
          <input
            id="upload-image"
            type="file"
            accept="image/*"
            hidden
            onChange={onChangeImage}
          />
        </Styled.MenuButtonLabel>
      </Styled.MenuContainer>
    </React.Fragment>
  );
}
