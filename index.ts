import reversal from "@unction/reversal";
import selectByValue from "@unction/selectbyvalue";

import {PredicateFunctionType} from "./types";

export default function rejectByValue<A> (predicate: PredicateFunctionType<A>) {
  return function rejectByValuePredicate (enumerable: Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string): Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string {
    if (enumerable.reject) {
      return enumerable.reject(predicate);
    }

    return selectByValue(reversal(predicate))(enumerable);
  };
}
