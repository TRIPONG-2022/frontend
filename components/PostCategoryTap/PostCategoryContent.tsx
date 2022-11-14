import { useRef, SetStateAction, MutableRefObject } from 'react';

import { PostCategory } from '@/types/post';

import * as Styled from './PostCategoryTap.styled';

interface PostCategoryContentProps {
  active: boolean;
  label: string;
  keyValue: string;
  containerRef: MutableRefObject<HTMLDivElement | null>;
  scrollX: MutableRefObject<number | undefined>;
  setPostCategory: React.Dispatch<SetStateAction<PostCategory | ''>>;
}

const PostCategoryContent = ({
  active,
  label,
  keyValue,
  containerRef,
  scrollX,
  setPostCategory,
}: PostCategoryContentProps) => {
  const ref = useRef<HTMLButtonElement | null>(null);

  return (
    <Styled.Button
      ref={ref}
      active={active}
      onClick={() => {
        setPostCategory(keyValue as PostCategory);

        scrollX.current = ref.current?.getBoundingClientRect().x;
        containerRef.current?.scrollTo({
          behavior: 'smooth',
          left: containerRef.current?.scrollLeft + scrollX.current! - 20,
        });
      }}
    >
      {label}
    </Styled.Button>
  );
};

export default PostCategoryContent;
