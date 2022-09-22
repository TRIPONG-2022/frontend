export const removeHTMLTag = (html: string) => {
  return html.replace(/<[^>]*>?/g, '');
};
