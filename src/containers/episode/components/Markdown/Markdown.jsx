import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkDecorator from 'remark-gfm';

const Markdown = ({ children }) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkDecorator]}>{children}</ReactMarkdown>
  );
};

export default Markdown;
