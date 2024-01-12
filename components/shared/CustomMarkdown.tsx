import React, { Component, ReactNode } from "react";
import Markdown, { Components } from "react-markdown";

const CustomMarkdown = ({ content }: { content: string }) => {
  const components: Components = {
    p: ({ children }) => (
      <p className="text-primary-900 dark:text-white">{children}</p>
    ),
    a: ({ children, href }) => (
      <a
        href={href as string}
        className="text-primary-600 dark:text-grey-secondary"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="text-primary-900  dark:text-white">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-primary-900 dark:text-white">{children}</em>
    ),
    h1: ({ children }) => (
      <h1 className="text-primary-900 dark:text-white">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-primary-900  dark:text-white">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-primary-900 dark:text-white">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-primary-900 dark:text-white">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-primary-900 dark:text-white">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-primary-900 dark:text-white">{children}</h6>
    ),
    ul: ({ children }) => (
      <ul className="list-disc text-primary-900 dark:text-white">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal text-primary-900 dark:text-white">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-primary-900 dark:text-white">{children}</li>
    ),
  };

  return (
    <Markdown className="  prose" components={components}>
      {content}
    </Markdown>
  );
};

export default CustomMarkdown;
