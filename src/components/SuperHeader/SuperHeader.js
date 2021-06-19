import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import Spacer from "../Spacer";

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <AlignRight>
        <SearchInput />
        <Spacer size={24} />
        <HelpLink href="/help">Help</HelpLink>
        <Spacer size={24} />
        <UnstyledButton display="inline-block">
          <Icon id="shopping-bag" strokeWidth={1} />
        </UnstyledButton>
      </AlignRight>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 32px;
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MarketingMessage = styled.span`
  padding: 12px 0;
  color: ${COLORS.white};
`;

const AlignRight = styled.div`
  display: flex;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
