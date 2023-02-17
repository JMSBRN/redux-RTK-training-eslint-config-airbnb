import React from 'react';
import ButtonStyled from './Button.style';

interface IButtonProps {
  text: string;
  onClick: () => void;
}
const Button = (props: IButtonProps) => {
  const { text, onClick } = props;
  return (
    <ButtonStyled type="button" onClick={onClick}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
