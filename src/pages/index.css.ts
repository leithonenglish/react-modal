import { globalStyle, style } from '@vanilla-extract/css';
import { variables } from '@/theme.css';

export const wrapperStyle = style({
  margin: `auto`,
  maxWidth: `1024px`,
  padding: `0 ${variables.spacing[9]} ${variables.spacing[12]} ${variables.spacing[9]}`,
});

export const titleWrapperStyle = style({
  alignItems: `center`,
  display: `flex`,
  gap: variables.spacing[3],
  justifyContent: `flex-start`,
  margin: `${variables.spacing[10]} 0`,
});

globalStyle(`${titleWrapperStyle} > h1`, {
  margin: 0,
  padding: 0,
});

export const exampleBoxWrapper = style({
  display: `flex`,
  flexDirection: `column`,
  gap: variables.spacing[9],
});
