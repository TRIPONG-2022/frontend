import SVGIcon from '@/components/shared/SVGIcon';
import useScreenType from '@/hooks/useScreenType';
import React from 'react';

import * as S from './Pagination.styled';

interface PaginationProps {
  total: number;
  page: number;
  size: number;
  movePage: (n: number) => void;
}

const Pagination = ({ movePage, page, size, total }: PaginationProps) => {
  const { isDesktop, isMobile } = useScreenType();
  const buttonGroupSize = isDesktop ? 5 : isMobile ? 3 : 3;

  const totalPage = Math.ceil(total / size);
  const isFirst = page === 0;
  const isLast = page >= totalPage - 1;
  const buttonGroup = buttonGroupSize > totalPage ? totalPage : buttonGroupSize;

  const startNumber = Math.floor(page / buttonGroup) * buttonGroup;
  let lastNumber = Math.floor(page / buttonGroup + 1) * buttonGroup;
  if (lastNumber > totalPage) lastNumber = totalPage;

  const next = page + 1;
  const prev = page - 1;

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const move = (n: number) => {
    movePage(n);
    scrollTop();
  };

  const nextPage = () => {
    if (page < totalPage - 1) move(next);
  };

  const prevPage = () => {
    if (!isFirst) move(prev);
  };

  const changePage = (n: number) => move(n);

  return (
    <S.PaginationContainer>
      <S.Page onClick={prevPage} disabled={isFirst}>
        <SVGIcon icon="ChevronLeftIcon" />
      </S.Page>
      {Array.from(
        { length: lastNumber - startNumber },
        (_, idx) => startNumber + idx + 1,
      ).map((n, index) => (
        <S.Page
          key={n}
          page={n - 1 === page}
          onClick={() => changePage(startNumber + index)}
        >
          {n}
        </S.Page>
      ))}
      <S.Page onClick={nextPage} disabled={isLast}>
        <SVGIcon icon="ChevronRightIcon" />
      </S.Page>
    </S.PaginationContainer>
  );
};

export default React.memo(Pagination);
