# type-filter-clsx

This library makes [clsx](https://github.com/lukeed/clsx) allow only specified class names.

## Install

```bash
npm install @alker0/type-filter-clsx
```

Just once, run this somewhere in your typescript project.

```ts
import '@alker0/type-filtered-clsx';
```

## Usage

```ts
import clsx, { Clsx } from 'clsx';

const cn: Clsx<'foo' | 'bar'> = clsx;
const cnQux: Clsx<'qux'> = clsx;

console.log(cn('foo')); // => foo
console.log(cn('foo', 'bar')); // => foo bar
console.log(cn('qux')); // error !
console.log(cnQux('qux')); // => qux
```

If you use [babel-plugin-optimize-clsx](https://github.com/merceyz/babel-plugin-optimize-clsx), all `clsx` brother's names you created must be included in `functionNames` option.

`babel.config.json` or `.babelrc.json`:
```json
{
  "plugins": [
    [
      "optimize-clsx",
      {
        "functionNames": ["clsx", "cn", "cnQux"]
      }
    ]
  ]
}
```

## License
MIT
