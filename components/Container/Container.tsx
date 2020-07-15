import React from 'react';
import styled from 'styled-components';
import { onSmallLaptop, onMobile } from '../../config/globalStyles';

interface Props {
  children: React.ReactChild | React.ReactChildren;
}

export const ContainerWrapper = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  min-width: 700px;

  ${onSmallLaptop} {
    background: yellow;
    width: 80%;
    min-width: 500px;
  }

  ${onMobile} {
    width: 95%;
    min-width: unset;
  }
`;

const Container = (props: Props) => {
  return <ContainerWrapper>{props.children}</ContainerWrapper>;
};

export default Container;
