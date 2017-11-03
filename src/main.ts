// tslint:disable:no-import-side-effect no-implicit-dependencies

import * as htmlLooksLike from 'html-looks-like'
import { render } from 'preact-render-to-string'

declare global {
  namespace jest {
    interface Matchers<R> {
      toLookLike(expected: string): R
    }
  }
}

export default function toLookLike(actual: JSX.Element, expected: string) {
  try {
    htmlLooksLike(render(actual), expected)
    return {
      message: () => `expected ${actual} to look like ${expected}`,
      pass   : true,
    }
  } catch (e) {
    return {
      message: () => e.message,
      pass   : false,
    }
  }
}
