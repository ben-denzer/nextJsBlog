import React from 'react';

const Index = (props) => {
  return <div>My blog about {props.blogCategory}</div>;
};

Index.getInitialProps = () => ({ blogCategory: 'coding' });
export default Index;
