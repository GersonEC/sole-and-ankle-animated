/* eslint-disable no-unused-vars */
import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <SubLink href="/terms">Terms and Conditions</SubLink>
          <SubLink href="/privacy">Privacy Policy</SubLink>
          <SubLink href="/contact">Contact Us</SubLink>
        </Footer>
      </Content>
    </Wrapper>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  } 
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  } 
  to {
    transform: translateX(0%);

  }
`;

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  display: flex;
  justify-content: flex-end;
  animation: ${fadeIn} 500ms;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--color-backdrop);
`;
const Content = styled(DialogContent)`
  position: relative;
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 500ms both cubic-bezier(0, 0.83, 0.46, 0.98);
  animation-delay: 200ms;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
