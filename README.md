Jest "Look Like" Matcher
=====================================================

A jest matcher wraps "html-looks-like" package.

Important
---------

If your code isn't targeting the latest syntax spec of JS / ES,
please use something like babel to transfer this library.

Install
-------

In `"package.json"`:

```json
{
  // ...
  "jest": {
    // ...
    "setupTestFrameworkScriptFile": "<rootDir>/tests/setup.ts"
  }
}
```

In `"<rootDir>/tests/setup.ts"`:

```typescript
import toLookLike from '@whitetrefoil/jest-look-like-matcher'

expect.extend({ toLookLike })
```

Usage
-----

```typescript jsx
it('should work', () => {
  const label = <Label text={'test-text'}/>
  expect(label).toLookLike(`
    <div class="label">test-text</div>
  `)
})
```

Changelog & Roadmap
-------------------

### v0.1.0

* Initial release.