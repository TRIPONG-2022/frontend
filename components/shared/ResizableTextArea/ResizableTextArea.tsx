import React, { forwardRef, useCallback, useLayoutEffect, useRef } from 'react';
import useComposedRef from '@/hooks/useComposedRef';

interface ResizableTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  resize?: 'none' | 'vertical' | 'both';
  preventEnterNewLine?: boolean;
}

const ResizableTextArea = forwardRef<
  HTMLTextAreaElement,
  ResizableTextAreaProps
>(
  (
    {
      resize = 'none',
      style,
      onChange,
      preventEnterNewLine,
      onKeyDown,
      ...props
    },
    forwardedRef,
  ) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const ref = useComposedRef(textareaRef, forwardedRef);

    const resizeTextarea = () => {
      const textareaElement = textareaRef.current;
      if (!textareaElement) return;
      textareaElement.style.height = 'auto';
      textareaElement.style.height = `${textareaElement.scrollHeight}px`;
    };

    const handleResizeWhenChangeValue = (
      event: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
      resizeTextarea();
      onChange && onChange(event);
    };

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (preventEnterNewLine && event.key === 'Enter' && !event.shiftKey) {
          event.preventDefault();
          return;
        }
        onKeyDown && onKeyDown(event);
      },
      [onKeyDown, preventEnterNewLine],
    );

    useLayoutEffect(() => {
      resizeTextarea();
    }, []);

    return (
      <textarea
        style={{ ...style, overflow: 'hidden', resize: resize }}
        onChange={handleResizeWhenChangeValue}
        onKeyDown={handleKeyDown}
        ref={ref}
        {...props}
      />
    );
  },
);

ResizableTextArea.displayName = 'ResizableTextArea';

export default ResizableTextArea;
