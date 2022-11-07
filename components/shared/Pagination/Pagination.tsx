import SVGIcon from '@/components/shared/SVGIcon';
import React from 'react';

import * as S from './Pagination.styled';

interface PaginationProps {
  total: number;
  page: number;
  size: number;
  movePage: (n: number) => void;
}

const Pagination = ({ movePage, page, size, total }: PaginationProps) => {
  const totalPage = Math.ceil(total / size);
  const isFirst = page === 0;
  const isLast = page >= totalPage - 1;
  const pageCount = 3 > totalPage ? totalPage : 3;

  const startNumber = Math.floor(page / pageCount);
  let lastNumber = Math.floor(page / pageCount + 1) * pageCount;
  if (lastNumber > totalPage) lastNumber = totalPage;

  const next = page + 1;
  const prev = page - 1;

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const nextPage = () => {
    if (page < totalPage - 1) {
      movePage(next);
      scrollTop();
    }
  };

  const prevPage = () => {
    if (!isFirst) {
      movePage(prev);
      scrollTop();
    }
  };

  const changePage = (n: number) => {
    movePage(n);
    scrollTop();
  };

  return (
    <S.PaginationContainer>
      <S.Page onClick={prevPage} disabled={isFirst}>
        <SVGIcon icon="ChevronLeftIcon" />
      </S.Page>
      {Array.from({ length: pageCount }, (_, idx) => startNumber + idx + 1).map(
        (n, index) => (
          <S.Page
            key={n}
            page={n - 1 === page}
            onClick={() => changePage(startNumber + index)}
          >
            {n}
          </S.Page>
        ),
      )}
      <S.Page onClick={nextPage} disabled={isLast}>
        <SVGIcon icon="ChevronRightIcon" />
      </S.Page>
    </S.PaginationContainer>
  );
};

export default Pagination;
