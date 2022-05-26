import React, { FC } from "react";
import styled from "styled-components";
import type { ButtonProps } from "./Button.model";


const Button: FC<ButtonProps> = ({
  text,
  icon,
  disabled,
  clickHandler,
  className,
}) => {

  return (
    <StyledButton
      disabled={ disabled }
      onClick={ clickHandler }
      className={ className }
    >
      { icon }
      { text }
    </StyledButton>
  );
};
export default Button;

const StyledButton = styled.button`
  background-color: linear-gradient(to right, rgba(var(--tmdbLightGreen), 1) 0%, rgba(var(--tmdbLightBlue), 1) 100%);
  color: white;
  padding: 6px 12px;
  cursor: pointer;
  white-space: nowrap;
  line-height: 1.5;

  &:hover {
    color: black;
  }
`;
