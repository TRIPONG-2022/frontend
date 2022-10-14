import { css } from 'styled-components';

export const markdownStyles = css`
  font-size: 0.875rem;
  line-height: 1.5;

  em {
    font-style: italic;
  }

  strong {
    font-weight: bold;
  }

  a {
    color: #4a90e2;
    text-decoration: underline;
  }

  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 2em;
  }

  ol {
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 2em;
  }

  h1 {
    font-size: 2em;
    font-weight: bold;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-block-start: 0.75em;
    margin-block-end: 0.75em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  h3 {
    font-size: 1.25em;
    font-weight: bold;
    margin-block-start: 0.75em;
    margin-block-end: 0.75em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  hr {
    border: none;
    border-top: 2px solid ${({ theme }) => theme.colors.blackAlpha[100]};
    margin: 2rem 0;
  }

  blockquote {
    border-left: 2px solid ${({ theme }) => theme.colors.blackAlpha[100]};
    padding-left: 1rem;
  }

  img {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    margin-block-start: 1.5em;
    margin-block-end: 1.5em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  p {
    margin-block-start: 0.75em;
    margin-block-end: 0.75em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;
