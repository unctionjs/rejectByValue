/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, flowtype/require-variable-type, no-magic-numbers */
import {from} from "most"
import streamSatisfies from "@unction/streamsatisfies"

import rejectByValue from "./index"

const isOdd = (value) => value % 2 !== 0

test("rejectByValue with Array", () => {
  expect(
    rejectByValue(
      isOdd
    )([
      1,
      2,
      3,
      4,
    ])
  ).toEqual(
    [
      1,
      3,
    ]
  )
})

test("rejectByValue with Object", () => {
  expect(
    rejectByValue(
      isOdd
    )({
      aaa: 1,
      bbb: 2,
      ccc: 3,
      ddd: 4,
    })
  ).toEqual(
    {
      bbb: 2,
      ddd: 4,
    }
  )
})

test("rejectByValue with Set", () => {
  expect(
    rejectByValue(
      isOdd
    )(new Set([
      1,
      2,
      3,
      4,
    ]))
  ).toEqual(
    new Set([2, 4])
  )
})

test("rejectByValue with Map", () => {
  expect(
    rejectByValue(
      isOdd
    )(new Map([
      [
        "a",
        1,
      ],
      [
        "b",
        2,
      ],
      [
        "c",
        3,
      ],
      [
        "d",
        4,
      ],
    ]))
  ).toEqual(
    new Map([
      [
        "b",
        2,
      ],
      [
        "d",
        4,
      ],
    ])
  )
})

test("rejectByValue with Stream", () => {
  expect.assertions(3)

  streamSatisfies(
    [2, 4]
  )(
    (given) => (expected) => expect(given).toEqual(expected)
  )(
    () => true
  )(
    ({length}) => (size) => expect(length).toEqual(size)
  )(
    rejectByValue(
      isOdd
    )(from([
      1,
      2,
      3,
      4,
    ]))
  )
})
