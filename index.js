import reversal from "@unction/reversal";
import selectByValue from "@unction/selectbyvalue";
export default function rejectByValue (predicate) {
  return function rejectByValuePredicate (enumerable) {
    if (enumerable.reject) {
      return enumerable.reject(predicate);
    }

    return selectByValue(reversal(predicate))(enumerable);
  };
}
