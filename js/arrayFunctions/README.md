## Array Operations

### Filtering with `filter`

The `filter` method creates a new array (`filteredItems`) containing items with prices greater than or equal to 100.

### Mapping with `map`

The `map` method transforms the original array into a new array (`mappedItems`) by extracting the price of each item.

### Finding with `find`

The `find` method retrieves the first item with a price equal to 100, storing it in the variable `foundItem`.

### Testing with `some` and `every`

- `some` returns `true` if any item has a price greater than or equal to 1000, saved in `hasItemsGreaterThan100`.
- `every` returns `true` if all items have a price greater than or equal to 1000, stored in `hasAllItemsGreaterThan100`.

### Reduction with `reduce`

The `reduce` method calculates the total sum of item prices and stores it in the variable `reduceItems`.

## Variable Manipulation

### Destructuring

- Array destructuring is demonstrated with variables `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, and `rest`, assigning values from the `alpha` array.
- The `newArray` combines `alpha` and `num` arrays into a new array using the spread operator.

### Function Results

The `sumMultiply` function returns an array containing the sum and multiplication results. These results are destructured into variables `sum`, `multiply`, and `division` (with a default value).

## Immutability

- The code showcases how changes to an array (`ppl`) can affect the original array.
- An immutable copy of the array (`peopleCopy`) is created to prevent unintended changes.
- The code introduces the use of `with`, `toSorted`, `toReversed`, and `toSpliced` methods for immutable array manipulation.
