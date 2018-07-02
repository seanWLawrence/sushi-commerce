// @flow
import * as React from 'react'
import {withPrefix} from 'gatsby-link'

let formatString = (selector : string, value : string) => {
  switch (selector) {
    case 'backgroundColor':
      return `has-background-color-${value}`
    case 'textColor':
      return `has-text-${value}`;
    case 'textSize':
      return `is-size-${value}`;
    case 'textWeight':
      return `has-text-weight-${value}`;
    case 'textTransformation':
      return `is-${value}`;
    case 'textAlign':
      return `has-text-${value}`;
    case 'color':
      return `is-color-${value}`;
    case 'flex':
      return `is-flex-${value}`;
    case 'inlineFlex':
      return `is-inline-flex-${value}`;
    case 'block':
      return `is-block-${value}`;
    case 'inlineBlock':
      return `is-inline-block-${value}`;
    case 'inline':
      return `is-inline-${value}`;
    case 'columns':
      return `columns ${value}`;
    case 'column':
      return `column is-${value}`;
    case 'offset':
      return `is-offset-${value}`;
    case 'image':
      return `image is-${value}`;
    case 'is':
      return `is-${value}`;
    case 'has':
      return `has-${value}`;
    case 'raw':
      return value
    default:
      console.warn('An incorrect key was passed to bulmaClassnames. Refer to the API for a list of p' +
          'ossible keys and values.');
      return ''
  }
}

let formatArray = (selector : string, value : string[]) : string => {
  let addPrefixToAllValues = (prefix : string) : string => {
    return value.reduce((acc, next) => acc.concat(` ${prefix}-${next}`).trim(), "")
  };

  switch (selector) {
    case 'columns':
      return `columns ${addPrefixToAllValues('is')}`;
    case 'column':
      return `column ${addPrefixToAllValues('is')}`;
    case 'offset':
      return addPrefixToAllValues('is-offset');
    case 'flex':
      return addPrefixToAllValues('is-flex');
    case 'inlineFlex':
      return addPrefixToAllValues('is-inline-flex');
    case 'block':
      return addPrefixToAllValues('is-block');
    case 'inline-block':
      return addPrefixToAllValues('is-inline-block');
    case 'inline':
      return addPrefixToAllValues('is-offset');
    case 'image':
      return `image ${addPrefixToAllValues('is')}`;
    case 'is':
      return addPrefixToAllValues('is');
    case 'has':
      return addPrefixToAllValues('has');
    case 'textSize':
      return addPrefixToAllValues('is-size')
    default:
      console.warn('An incorrect key was passed to bulmaClassnames. Refer to the API for a list of p' +
          'ossible keys and values.');
      return ''
  }
}

let formatClassname = (selector : string, value : $FlowFixMe) : string => {
  if (typeof value === 'string') {
    return formatString(selector, value)
  }
  if (Array.isArray(value) && value.map(entry => typeof entry === 'string')) {
    return formatArray(selector, value)
  } else {
    console.warn('Invalid value has been passed to bulmaClassnames. Values can only be a string or' +
        ' array')
    return ''
  }
}

type Classnames = {
  is?: string | string[],
  has?: string | string[],
  backgroundColor?: string,
  textColor?: string,
  textSize?: string | string[],
  textWeight?: string,
  textTransformation?: string,
  textAlign?: string,
  color?: string,
  columns?: string | string[],
  column?: string | string[],
  offset?: string | string[],
  flex?: string | string[],
  inlineFlex?: string | string[],
  block?: string | string[],
  inlineBlock?: string | string[],
  inline?: string | string[],
  image?: string | string[],
  raw?: string
}

let bulmaClassnames = ({
  ...classNames
} : Classnames) : string => {
  return Object
    .entries(classNames)
    .map(entry => {
      let [selector,
        value] = entry;
      return formatClassname(selector, value)
    })
    .reduce((acc, next) => {
      return acc.concat(` ${next}`)
    })
}

type Props = {
  prop: *,
  children: React.Node | () => React.Node
}

class ConditionalRender extends React.Component < Props > {
  render() {
    let {prop, children} = this.props
    return prop
      ? children
      : null
  }
}

export let linkSrcToStaticImage = (src : string) => {

  // crop 'static' from the file name and add './' in front of it
  let formattedFileName = './'.concat(src.slice(8))

  // use 'gatsby-link' helper function to link the file to the image in the static
  // folder
  return withPrefix(formattedFileName)
}

export {ConditionalRender, bulmaClassnames as default}
