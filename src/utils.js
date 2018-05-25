import * as R from 'rambda'

let addSelector = ({ selector, value }) =>
  value.map(val => selector.concat(`-${val}`))

let reduceStrings = R.reduce((str, nextStr) => R.concat(str)(` ${nextStr}`), '')

let createClassname = styleObject => R.join('-', R.values(styleObject))

let createClassnames = ({ selector, value, other }) => {
  let formattedClassnames = R.compose(
    R.trim,
    reduceStrings,
    addSelector({ selector })
  )(value)

  let result = R.ifElse(
    R.isNil(other),
    ({ formattedClassnames }) => formattedClassnames,
    ({ other, formattedClassnames }) =>
      R.concat(`${other} `)(formattedClassnames)
  )({ other, formattedClassnames })
  return result
}

let formatStyle = ({ selector, value, other }) =>
  R.ifElse(
    R.is(Array, value),
    ({ selector, value, other }) =>
      createClassnames({ selector, value, other }),
    ({ selector, value }) => createClassname({ selector, value })
  )({ selector, value, other })

export let createStyle = ({ selector, value, other }) =>
  R.ifElse(
    ({ value }) => R.isNil(value),
    () => '',
    ({ selector, value, other }) => formatStyle({ selector, value, other })
  )({ selector, value, other })

let addStyle = ({ selector, value, other }, nextValue) =>
  R.concat(createStyle({ selector, value, other }))(nextValue)

let bulmaClassnames = ({
  color,
  column,
  offset,
  flex,
  inlineFlex,
  block,
  inlineBlock,
  inline,
  textColor,
  textSize,
  textWeight,
  textTransformation,
  textAlign,
  backgroundColor,
  is,
  has,
  raw,
} = {}) => {
  let bulmaStyles = [
    {
      selector: 'is-color',
      value: color,
    },
    {
      selector: 'column',
      value: column,
      other: 'column',
    },
    {
      selector: 'is-offset',
      value: offset,
    },
    {
      selector: 'is-flex',
      value: flex,
    },
    {
      selector: 'is-inline-flex',
      value: inlineFlex,
    },
    {
      selector: 'is-block',
      value: block,
    },
    {
      selector: 'is-inline-block',
      value: inlineBlock,
    },
    {
      selector: 'is-inline',
      value: inline,
    },
    {
      selector: 'has-text',
      value: textColor,
    },
    {
      selector: 'is',
      value: textSize,
    },
    {
      selector: 'has-background',
      value: backgroundColor,
    },
    {
      selector: 'has-text-weight',
      value: textWeight,
    },
    {
      selector: 'is',
      value: textTransformation,
    },
    {
      selector: 'has-text',
      value: textAlign,
    },
    {
      selector: 'is',
      value: is,
    },
    {
      selector: 'has',
      value: has,
    },
  ]

  let formattedBulmaStyles = R.compose(
    R.replace(/^\s+|\s+$|\s+(?=\s)/g, ''),
    R.join(' '),
    R.map(style =>
      createStyle({ selector: style.selector, value: style.value })
    )
  )(bulmaStyles)

  if (raw) {
    let rawStyle = createStyle({
      selector: '',
      value: raw,
    }).slice(1, 1000)
    return formattedBulmaStyles.concat(' ' + rawStyle)
  }

  return formattedBulmaStyles
}

export default bulmaClassnames
