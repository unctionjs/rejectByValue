import reversal from "@unction/reversal"
import selectByValue from "@unction/selectbyvalue"

import type {PredicateFunctionType} from "types"
import type {UnaryFunctionType} from "types"
import type {EnumerableType} from "types"

export default function rejectByValue (predicate: PredicateFunctionType): UnaryFunctionType {
  return function rejectByValuePredicate (enumerable: EnumerableType): EnumerableType {
    if (enumerable.reject) {
      return enumerable.reject(predicate)
    }

    return selectByValue(reversal(predicate))(enumerable)
  }
}
