import reversal from "@unction/reversal";
import selectByValue from "@unction/selectbyvalue";

import {PredicateFunctionType} from "./types";

export default function rejectByValue<A> (predicate: PredicateFunctionType<A>) {
  return function rejectByValuePredicate (enumerable: Array<A> | Set<A> | RecordType<unknown, A> | string): Array<A> | Set<A> | RecordType<unknown, A> | string {
    if (enumerable.reject) {
      return enumerable.reject(predicate);
    }

    return selectByValue(reversal(predicate))(enumerable);
  };
}
