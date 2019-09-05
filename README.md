# @unction/rejectByValue

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> PredicateFunctionType<A> => EnumerableType<A> => EnumerableType<A>

Takes an enumerable and a predicate, returning an enumerable with items that returned false from the predicate.

``` javascript
rejectByValue(type("Number"))([1, "A", 2, "B"]) // ["A", "B"]
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/rejectByValue.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/rejectByValue.svg?maxAge=2592000&style=flat-square
