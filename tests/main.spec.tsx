// tslint:disable:no-import-side-effect no-implicit-dependencies

jest.resetModules()

import { h } from 'preact'
import toLookLike from '../src/main'

it('should work', () => {
  expect.extend({ toLookLike })
  const Label = () => <div>test</div>

  expect(<Label/>).toLookLike(`
    <div>test</div>
  `)

  expect(<Label/>).not.toLookLike(`
    <div>asdf</div>
  `)
})
