import styled from 'styled-components';

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}: ${value}`;
};
// When creating the spacer object, we pass 2 props: position and size. We then return the function 'getVariant' passing in those position and size. The function returns a string where the position is used to get the position from positionVariant, and the size is taken from sizeVariant. We also set default values for the Spacer object.

export const Spacer = styled.View`
  ${({position, size, theme}) => getVariant(position, size, theme)}
`;

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};
