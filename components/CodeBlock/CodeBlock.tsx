import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy, okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { AppContext } from '../../pages/_app';
import { Themes } from '../../types/general';
import styled from 'styled-components';

interface Props {
  value: string;
  style?: any;
}

const WithBorder = styled.div`
  border: 1px solid;
  border-color: ${(p) => p.theme.textColor};
`;

const CodeBlock = (props: Props) => {
  const { value, style } = props;
  return (
    <WithBorder>
      <SyntaxHighlighter language="javascript" style={style}>
        {value}
      </SyntaxHighlighter>
    </WithBorder>
  );
};

const CodeBlockWrapper = (props: Props) => {
  return (
    <AppContext.Consumer>
      {(value) => {
        const codeStyle = value.theme === Themes.LIGHT ? coy : okaidia;
        return <CodeBlock {...props} style={codeStyle} />;
      }}
    </AppContext.Consumer>
  );
};

export default CodeBlockWrapper;
