# unique-array-by

Filters an array by testing uniqueness with a callback, an index, or a key.

Optionally lets you set a numeric limit on total unique values returned.

If you merely need to remove duplicate values from an array, use the simpler [deduplicate](https://github.com/lamansky/deduplicate) module instead.

## Installation

```bash
npm install unique-array-by --save
```

The module exports a single function.

## Usage Example

Let’s say you have an array of person objects and you only want one person with any given name.

```javascript
const uniqueArrayBy = require('unique-array-by')

const people = [
  {name: 'John'},
  {name: 'John'},
  {name: 'Stephen'},
]

uniqueArrayBy(people, 'name') // [{name: 'John'}, {name: 'Stephen'}]
```

Or you can use a callback that retrieves the significant value:

```javascript
uniqueArrayBy(people, person => person.name) // [{name: 'John'}, {name: 'Stephen'}]
```

You can also use the `limit` argument to cap the number of total unique values returned:

```javascript
uniqueArrayBy(people, 'name', {limit: 1}) // [{name: 'John'}]
```

## Related Projects

* [deduplicate](https://github.com/lamansky/deduplicate)
* [unique-iterable](https://github.com/lamansky/unique-iterable)
* [unique-iterable-by](https://github.com/lamansky/unique-iterable-by)
* [unique-map](https://github.com/lamansky/unique-map)
* [unique-map-by](https://github.com/lamansky/unique-map-by)
