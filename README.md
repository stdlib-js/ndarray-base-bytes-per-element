<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Bytes per Element

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the number of bytes per element provided an underlying [array data type][@stdlib/ndarray/dtypes].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import bytesPerElement from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-bytes-per-element@esm/index.mjs';
```

#### bytesPerElement( dtype )

Returns the number of bytes per element provided an underlying [array data type][@stdlib/ndarray/dtypes].

```javascript
var nbytes = bytesPerElement( 'float64' );
// returns 8

nbytes = bytesPerElement( 'generic' );
// returns null
```

If provided an unknown or unsupported data type, the function returns `null`.

```javascript
var nbytes = bytesPerElement( 'foobar' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import bytesPerElement from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-bytes-per-element@esm/index.mjs';

var dtypes;
var nbytes;
var i;

dtypes = [
    'float64',
    'float32',
    'int8',
    'uint8',
    'uint8c',
    'int16',
    'uint16',
    'int32',
    'uint32',
    'binary',
    'generic',
    'foobar'
];

for ( i = 0; i < dtypes.length; i++ ) {
    nbytes = bytesPerElement( dtypes[ i ] );
    nbytes = ( nbytes ) ? nbytes+' bytes' : 'null';
    console.log( '%s => %s', dtypes[ i ], nbytes );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-bytes-per-element.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-bytes-per-element

[test-image]: https://github.com/stdlib-js/ndarray-base-bytes-per-element/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-bytes-per-element/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-bytes-per-element/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-bytes-per-element?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-bytes-per-element.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-bytes-per-element/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-bytes-per-element/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-base-bytes-per-element/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-base-bytes-per-element/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-base-bytes-per-element/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-bytes-per-element/main/LICENSE

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes/tree/esm

</section>

<!-- /.links -->
