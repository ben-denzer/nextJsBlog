---
title: 'First Post'
date: '2020-07-03'
---

Here is my first post. I can have come code here.

Inside of `App.ts` you'll need to add...

And some multiline code too

```
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
  border-color: red;
`;

const CodeBlock = (props: Props) => {
  const { value, style } = props;
  const x = `my value is ${value}`

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
```
