export type Color =
  | 'primary'
  | 'secondary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'white-ter'
  | 'white'
  | 'gray'
  | 'gray-dark'
  | 'gray-darker'
  | 'black'
  | 'black-ter'
  | 'custom';

export type OverlayColor =
  | 'moonPurple'
  | 'shifter'
  | 'quepal'
  | 'pinkFlavour'
  | 'orangeFun'
  | 'digitalWater'
  | 'purpink'
  | 'blueSkies'
  | 'nelson'
  | 'aqualicious'
  | 'kyoto'
  | 'mojito'
  | 'lush';

export type FontWeight = 'light' | 'normal' | 'semi-bold' | 'bold';

export type FontSize = 'small' | 'normal' | 'large' | 'extra-large';

export type TextTransformation =
  | 'none'
  | 'italic'
  | 'underline'
  | 'uppercase'
  | 'lowercase';

export type TextAlign = 'left' | 'right' | 'centered';

export type ThemeProps = {
  text: string,
  children: React.Node,
  href: string,
  styles: {
    textColor?: Color,
    textColorCustom?: string,
    fontWeight?: FontWeight,
    fontSize?: FontSize,
    textTransformation?: TextTransformation,
    textAlign?: TextAlign,
    raw?: string | string[],
  },
};

export type GatsbyImageSizes = {
  sizes?: {
    aspectRatio: string,
    sizes: string,
    src: string,
    srcSet: string,
    srcSetWebp: string,
    srcSetWebp: string,
    base64: string,
  },
};
