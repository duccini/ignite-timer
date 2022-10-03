import styled from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger'

interface ContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  success: 'green',
  danger: 'red'
}

export const Container  = styled.button<ContainerProps>`
  width: 100px;
  height: 40px;

  margin: 0 1rem;

  border: 0;

  color: #fff;

  ${props => {
    return `background-color: ${buttonVariants[props.variant]}`
  }}

`