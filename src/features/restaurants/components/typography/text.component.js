import styled from 'styled-components';

const defaultTextStyles = theme => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const body = theme => `
    font-size: ${theme.fontSizes.body};
`;

const hint = theme => `
    font-size: ${theme.fontSizes.body};
`;

const error = theme => `
    color: ${theme.colors.text.error};
`;

const caption = theme => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = theme => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

// I'm referencing the objects created above inside the object variants and putting those keys on the object 'variants'.
const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

// When we create a new <Text /> element, it will automatically load defaultTextStyles which we defined above, and we are passing theme as a property so that it can load from the themes which we created. We can also call one of the variants when creating the object <Text /> which will then call the function with that name, and we are passing the theme to that function as well, as it needs it to grab the necessary properties.
export const Text = styled.Text`
  ${({theme}) => defaultTextStyles(theme)}
  ${({variant, theme}) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: 'body',
};
