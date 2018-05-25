export type ThemeProps = {
  text: string,
  children: React.Node,
  href: string,
  styles: {
    textColor?:
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
      | 'custom',
    textColorCustom?: string,
    fontWeight?: 'light' | 'normal' | 'semi-bold' | 'bold',
    fontSize?: 'small' | 'normal' | 'large' | 'extra-large',
    textTransformation?:
      | 'none'
      | 'italic'
      | 'underline'
      | 'uppercase'
      | 'lowercase',
    textAlign?: 'left' | 'right' | 'center',
    raw?: string | string[],
  },
}
