import { css } from 'styled-components';

export const markdownStyles = css`
  font-size: 0.875rem;
  line-height: 1.7142857;

  &:where(p):not(:where([class~='not-prose'] *)) {
    margin-top: 1.1428571em;
    margin-bottom: 1.1428571em;
  }

  &:where([class~='lead']):not(:where([class~='not-prose'] *)) {
    font-size: 1.2857143em;
    line-height: 1.5555556;
    margin-top: 0.8888889em;
    margin-bottom: 0.8888889em;
  }

  &:where(blockquote):not(:where([class~='not-prose'] *)) {
    margin-top: 1.3333333em;
    margin-bottom: 1.3333333em;
    padding-left: 1.1111111em;
  }

  &:where(h1):not(:where([class~='not-prose'] *)) {
    font-size: 2.1428571em;
    margin-top: 0;
    margin-bottom: 0.8em;
    line-height: 1.2;
  }

  &:where(h2):not(:where([class~='not-prose'] *)) {
    font-size: 1.4285714em;
    margin-top: 1.6em;
    margin-bottom: 0.8em;
    line-height: 1.4;
  }

  &:where(h3):not(:where([class~='not-prose'] *)) {
    font-size: 1.2857143em;
    margin-top: 1.5555556em;
    margin-bottom: 0.4444444em;
    line-height: 1.5555556;
  }

  &:where(h4):not(:where([class~='not-prose'] *)) {
    margin-top: 1.4285714em;
    margin-bottom: 0.5714286em;
    line-height: 1.4285714;
  }

  &:where(img):not(:where([class~='not-prose'] *)) {
    margin-top: 1.7142857em;
    margin-bottom: 1.7142857em;
  }

  &:where(video):not(:where([class~='not-prose'] *)) {
    margin-top: 1.7142857em;
    margin-bottom: 1.7142857em;
  }

  &:where(figure):not(:where([class~='not-prose'] *)) {
    margin-top: 1.7142857em;
    margin-bottom: 1.7142857em;
  }

  &:where(figure > *):not(:where([class~='not-prose'] *)) {
    margin-top: 0;
    margin-bottom: 0;
  }

  &:where(figcaption):not(:where([class~='not-prose'] *)) {
    font-size: 0.8571429em;
    line-height: 1.3333333;
    margin-top: 0.6666667em;
  }

  &:where(code):not(:where([class~='not-prose'] *)) {
    font-size: 0.8571429em;
  }

  &:where(h2 code):not(:where([class~='not-prose'] *)) {
    font-size: 0.9em;
  }

  &:where(h3 code):not(:where([class~='not-prose'] *)) {
    font-size: 0.8888889em;
  }

  &:where(pre):not(:where([class~='not-prose'] *)) {
    font-size: 0.8571429em;
    line-height: 1.6666667;
    margin-top: 1.6666667em;
    margin-bottom: 1.6666667em;
    border-radius: 0.25rem;
    padding-top: 0.6666667em;
    padding-right: 1em;
    padding-bottom: 0.6666667em;
    padding-left: 1em;
  }

  &:where(ol):not(:where([class~='not-prose'] *)) {
    padding-left: 1.5714286em;
  }

  &:where(ul):not(:where([class~='not-prose'] *)) {
    padding-left: 1.5714286em;
  }

  &:where(li):not(:where([class~='not-prose'] *)) {
    margin-top: 0.2857143em;
    margin-bottom: 0.2857143em;
  }

  &:where(ol > li):not(:where([class~='not-prose'] *)) {
    padding-left: 0.4285714em;
  }

  &:where(ul > li):not(:where([class~='not-prose'] *)) {
    padding-left: 0.4285714em;
  }

  & > :where(ul > li p):not(:where([class~='not-prose'] *)) {
    margin-top: 0.5714286em;
    margin-bottom: 0.5714286em;
  }

  & > :where(ul > li > *:first-child):not(:where([class~='not-prose'] *)) {
    margin-top: 1.1428571em;
  }

  & > :where(ul > li > *:last-child):not(:where([class~='not-prose'] *)) {
    margin-bottom: 1.1428571em;
  }

  & > :where(ol > li > *:first-child):not(:where([class~='not-prose'] *)) {
    margin-top: 1.1428571em;
  }

  & > :where(ol > li > *:last-child):not(:where([class~='not-prose'] *)) {
    margin-bottom: 1.1428571em;
  }

  & :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~='not-prose'] *)) {
    margin-top: 0.5714286em;
    margin-bottom: 0.5714286em;
  }

  &:where(hr):not(:where([class~='not-prose'] *)) {
    margin-top: 2.8571429em;
    margin-bottom: 2.8571429em;
  }

  &:where(hr + *):not(:where([class~='not-prose'] *)) {
    margin-top: 0;
  }

  &:where(h2 + *):not(:where([class~='not-prose'] *)) {
    margin-top: 0;
  }

  &:where(h3 + *):not(:where([class~='not-prose'] *)) {
    margin-top: 0;
  }

  &:where(h4 + *):not(:where([class~='not-prose'] *)) {
    margin-top: 0;
  }

  &:where(table):not(:where([class~='not-prose'] *)) {
    font-size: 0.8571429em;
    line-height: 1.5;
  }

  &:where(thead th):not(:where([class~='not-prose'] *)) {
    padding-right: 1em;
    padding-bottom: 0.6666667em;
    padding-left: 1em;
  }

  & :where(thead th:first-child):not(:where([class~='not-prose'] *)) {
    padding-left: 0;
  }

  &:where(thead th:last-child):not(:where([class~='not-prose'] *)) {
    padding-right: 0;
  }

  &:where(tbody td):not(:where([class~='not-prose'] *)) {
    padding-top: 0.6666667em;
    padding-right: 1em;
    padding-bottom: 0.6666667em;
    padding-left: 1em;
  }

  & :where(tbody td:first-child):not(:where([class~='not-prose'] *)) {
    padding-left: 0;
  }

  &:where(tbody td:last-child):not(:where([class~='not-prose'] *)) {
    padding-right: 0;
  }

  & > :where(:first-child):not(:where([class~='not-prose'] *)) {
    margin-top: 0;
  }

  & > :where(:last-child):not(:where([class~='not-prose'] *)) {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    & {
      font-size: 1rem;
      line-height: 1.75;
    }

    &:where(p):not(:where([class~='not-prose'] *)) {
      margin-top: 1.25em;
      margin-bottom: 1.25em;
    }

    &:where([class~='lead']):not(:where([class~='not-prose'] *)) {
      font-size: 1.25em;
      line-height: 1.6;
      margin-top: 1.2em;
      margin-bottom: 1.2em;
    }

    &:where(blockquote):not(:where([class~='not-prose'] *)) {
      margin-top: 1.6em;
      margin-bottom: 1.6em;
      padding-left: 1em;
    }

    &:where(h1):not(:where([class~='not-prose'] *)) {
      font-size: 2.25em;
      margin-top: 0;
      margin-bottom: 0.8888889em;
      line-height: 1.1111111;
    }

    &:where(h2):not(:where([class~='not-prose'] *)) {
      font-size: 1.5em;
      margin-top: 2em;
      margin-bottom: 1em;
      line-height: 1.3333333;
    }

    &:where(h3):not(:where([class~='not-prose'] *)) {
      font-size: 1.25em;
      margin-top: 1.6em;
      margin-bottom: 0.6em;
      line-height: 1.6;
    }

    &:where(h4):not(:where([class~='not-prose'] *)) {
      margin-top: 1.5em;
      margin-bottom: 0.5em;
      line-height: 1.5;
    }

    &:where(img):not(:where([class~='not-prose'] *)) {
      margin-top: 2em;
      margin-bottom: 2em;
    }

    &:where(video):not(:where([class~='not-prose'] *)) {
      margin-top: 2em;
      margin-bottom: 2em;
    }

    &:where(figure):not(:where([class~='not-prose'] *)) {
      margin-top: 2em;
      margin-bottom: 2em;
    }

    &:where(figure > *):not(:where([class~='not-prose'] *)) {
      margin-top: 0;
      margin-bottom: 0;
    }

    &:where(figcaption):not(:where([class~='not-prose'] *)) {
      font-size: 0.875em;
      line-height: 1.4285714;
      margin-top: 0.8571429em;
    }

    &:where(code):not(:where([class~='not-prose'] *)) {
      font-size: 0.875em;
    }

    &:where(h2 code):not(:where([class~='not-prose'] *)) {
      font-size: 0.875em;
    }

    &:where(h3 code):not(:where([class~='not-prose'] *)) {
      font-size: 0.9em;
    }

    &:where(pre):not(:where([class~='not-prose'] *)) {
      font-size: 0.875em;
      line-height: 1.7142857;
      margin-top: 1.7142857em;
      margin-bottom: 1.7142857em;
      border-radius: 0.375rem;
      padding-top: 0.8571429em;
      padding-right: 1.1428571em;
      padding-bottom: 0.8571429em;
      padding-left: 1.1428571em;
    }

    &:where(ol):not(:where([class~='not-prose'] *)) {
      padding-left: 1.625em;
    }

    &:where(ul):not(:where([class~='not-prose'] *)) {
      padding-left: 1.625em;
    }

    &:where(li):not(:where([class~='not-prose'] *)) {
      margin-top: 0.5em;
      margin-bottom: 0.5em;
    }

    &:where(ol > li):not(:where([class~='not-prose'] *)) {
      padding-left: 0.375em;
    }

    &:where(ul > li):not(:where([class~='not-prose'] *)) {
      padding-left: 0.375em;
    }

    & > :where(ul > li p):not(:where([class~='not-prose'] *)) {
      margin-top: 0.75em;
      margin-bottom: 0.75em;
    }

    & > :where(ul > li > *:first-child):not(:where([class~='not-prose'] *)) {
      margin-top: 1.25em;
    }

    & > :where(ul > li > *:last-child):not(:where([class~='not-prose'] *)) {
      margin-bottom: 1.25em;
    }

    & > :where(ol > li > *:first-child):not(:where([class~='not-prose'] *)) {
      margin-top: 1.25em;
    }

    & > :where(ol > li > *:last-child):not(:where([class~='not-prose'] *)) {
      margin-bottom: 1.25em;
    }

    & :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~='not-prose'] *)) {
      margin-top: 0.75em;
      margin-bottom: 0.75em;
    }

    &:where(hr):not(:where([class~='not-prose'] *)) {
      margin-top: 3em;
      margin-bottom: 3em;
    }

    &:where(hr + *):not(:where([class~='not-prose'] *)) {
      margin-top: 0;
    }

    &:where(h2 + *):not(:where([class~='not-prose'] *)) {
      margin-top: 0;
    }

    &:where(h3 + *):not(:where([class~='not-prose'] *)) {
      margin-top: 0;
    }

    &:where(h4 + *):not(:where([class~='not-prose'] *)) {
      margin-top: 0;
    }

    &:where(table):not(:where([class~='not-prose'] *)) {
      font-size: 0.875em;
      line-height: 1.7142857;
    }

    &:where(thead th):not(:where([class~='not-prose'] *)) {
      padding-right: 0.5714286em;
      padding-bottom: 0.5714286em;
      padding-left: 0.5714286em;
    }

    & :where(thead th:first-child):not(:where([class~='not-prose'] *)) {
      padding-left: 0;
    }

    & :where(thead th:last-child):not(:where([class~='not-prose'] *)) {
      padding-right: 0;
    }

    &:where(tbody td):not(:where([class~='not-prose'] *)) {
      padding-top: 0.5714286em;
      padding-right: 0.5714286em;
      padding-bottom: 0.5714286em;
      padding-left: 0.5714286em;
    }

    & :where(tbody td:first-child):not(:where([class~='not-prose'] *)) {
      padding-left: 0;
    }

    & :where(tbody td:last-child):not(:where([class~='not-prose'] *)) {
      padding-right: 0;
    }

    & > :where(:first-child):not(:where([class~='not-prose'] *)) {
      margin-top: 0;
    }

    & > :where(:last-child):not(:where([class~='not-prose'] *)) {
      margin-bottom: 0;
    }
  }
`;
