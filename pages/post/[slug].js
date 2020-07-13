import React from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../components/CodeBlock';

const PostTemplate = (props) => {
  const { data, content } = props;
  return (
    <>
      <header>
        <h1>{data.title}</h1>
      </header>

      <main>
        {/* STYLES FOR THIS SECTION ARE IN THE SASS FOLDER */}
        <ReactMarkdown source={content} renderers={{ code: CodeBlock }} />
      </main>
    </>
  );
};

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;
  const content = await import(`../../content/${slug}.md`);
  const data = matter(content.default);
  return { ...data };
};

export default PostTemplate;
