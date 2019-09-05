import reversal from "@unction/reversal";
import selectByValue from "@unction/selectbyvalue";

import {PredicateFunctionType} from "./types";
import {EnumerableType} from "./types";

export default function rejectByValue<A> (predicate: PredicateFunctionType<A>) {
  return function rejectByValuePredicate (enumerable: EnumerableType<A>): EnumerableType<A> {
    if (enumerable.reject) {
      return enumerable.reject(predicate);
    }

    return selectByValue(reversal(predicate))(enumerable);
  };
}
