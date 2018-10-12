import * as R from 'rambda'

export * from './src/allFalse'
export * from './src/allTrue'
export * from './src/change'
export * from './src/compact'
export * from './src/composeAsync'
export * from './src/defaultWhen'
export * from './src/debounce'
export const DELAY = 'RAMBDAX_DELAY'
export * from './src/delay'
export * from './src/evolve'
export * from './src/findInObject'
export * from './src/greater'
export * from './src/headObject'
export * from './src/ifElseAsync'
export * from './src/inject'
export * from './src/intersection'
export * from './src/is'
export * from './src/isInit'
export * from './src/isPromise'
export * from './src/isType'
export * from './src/isValid'
export * from './src/less'
export * from './src/mapAsync'
export * from './src/mapFastAsync'
export * from './src/memoize'
export * from './src/mergeAll'
export * from './src/mergeRight'
export * from './src/multiline'
export * from './src/ok'
export * from './src/omitBy'
export * from './src/once'
export * from './src/pickBy'
export * from './src/produce'
export * from './src/random'
export * from './src/rangeBy'
export * from './src/renameProps'
export * from './src/resolve'
export * from './src/resolveSecure'
export * from './src/runTests'
export * from './src/s'
export * from './src/shuffle'
export * from './src/switcher'
export * from './src/tapAsync'
export * from './src/template'
export * from './src/throttle'
export * from './src/validate'
export * from './src/when'
export * from './src/whenAsync'
export * from './src/where'
//Follows code generated by `run rambda`
export const add = R.add
export const addIndex = R.addIndex
export const adjust = R.adjust
export const all = R.all
export const allPass = R.allPass
export const always = R.always
export const any = R.any
export const anyPass = R.anyPass
export const append = R.append
export const assoc = R.assoc
export const both = R.both
export const complement = R.complement
export const compose = R.compose
export const concat = R.concat
export const contains = R.contains
export const curry = R.curry
export const dec = R.dec
export const defaultTo = R.defaultTo
export const dissoc = R.dissoc
export const divide = R.divide
export const drop = R.drop
export const dropLast = R.dropLast
export const either = R.either
export const endsWith = R.endsWith
export const equals = R.equals
export const F = R.F
export const filter = R.filter
export const find = R.find
export const findIndex = R.findIndex
export const flatten = R.flatten
export const flip = R.flip
export const forEach = R.forEach
export const groupBy = R.groupBy
export const has = R.has
export const head = R.head
export const identity = R.identity
export const ifElse = R.ifElse
export const inc = R.inc
export const includes = R.includes
export const indexBy = R.indexBy
export const indexOf = R.indexOf
export const init = R.init
export const isNil = R.isNil
export const join = R.join
export const keys = R.keys
export const last = R.last
export const lastIndexOf = R.lastIndexOf
export const length = R.length
export const map = R.map
export const match = R.match
export const merge = R.merge
export const max = R.max
export const maxBy = R.maxBy
export const min = R.min
export const minBy = R.minBy
export const modulo = R.modulo
export const multiply = R.multiply
export const none = R.none
export const not = R.not
export const nth = R.nth
export const omit = R.omit
export const partialCurry = R.partialCurry
export const path = R.path
export const pathOr = R.pathOr
export const pick = R.pick
export const pickAll = R.pickAll
export const pipe = R.pipe
export const pluck = R.pluck
export const prepend = R.prepend
export const prop = R.prop
export const propEq = R.propEq
export const range = R.range
export const reduce = R.reduce
export const reject = R.reject
export const repeat = R.repeat
export const replace = R.replace
export const reverse = R.reverse
export const sort = R.sort
export const sortBy = R.sortBy
export const split = R.split
export const splitEvery = R.splitEvery
export const startsWith = R.startsWith
export const subtract = R.subtract
export const T = R.T
export const tail = R.tail
export const take = R.take
export const takeLast = R.takeLast
export const tap = R.tap
export const test = R.test
export const times = R.times
export const toLower = R.toLower
export const toString = R.toString
export const toUpper = R.toUpper
export const trim = R.trim
export const type = R.type
export const uniq = R.uniq
export const uniqWith = R.uniqWith
export const update = R.update
export const values = R.values
export const without = R.without
export const zip = R.zip
export const zipObj = R.zipObj
// Follows code generated by `run rambda`
export const add = R.add
export const addIndex = R.addIndex
export const adjust = R.adjust
export const all = R.all
export const allPass = R.allPass
export const always = R.always
export const any = R.any
export const anyPass = R.anyPass
export const append = R.append
export const assoc = R.assoc
export const both = R.both
export const complement = R.complement
export const compose = R.compose
export const concat = R.concat
export const contains = R.contains
export const curry = R.curry
export const dec = R.dec
export const defaultTo = R.defaultTo
export const dissoc = R.dissoc
export const divide = R.divide
export const drop = R.drop
export const dropLast = R.dropLast
export const either = R.either
export const endsWith = R.endsWith
export const equals = R.equals
export const F = R.F
export const filter = R.filter
export const find = R.find
export const findIndex = R.findIndex
export const flatten = R.flatten
export const flip = R.flip
export const forEach = R.forEach
export const groupBy = R.groupBy
export const has = R.has
export const head = R.head
export const identity = R.identity
export const ifElse = R.ifElse
export const inc = R.inc
export const includes = R.includes
export const indexBy = R.indexBy
export const indexOf = R.indexOf
export const init = R.init
export const isNil = R.isNil
export const join = R.join
export const keys = R.keys
export const last = R.last
export const lastIndexOf = R.lastIndexOf
export const length = R.length
export const map = R.map
export const match = R.match
export const merge = R.merge
export const max = R.max
export const maxBy = R.maxBy
export const min = R.min
export const minBy = R.minBy
export const modulo = R.modulo
export const multiply = R.multiply
export const none = R.none
export const not = R.not
export const nth = R.nth
export const omit = R.omit
export const partialCurry = R.partialCurry
export const path = R.path
export const pathOr = R.pathOr
export const pick = R.pick
export const pickAll = R.pickAll
export const pipe = R.pipe
export const pluck = R.pluck
export const prepend = R.prepend
export const prop = R.prop
export const propEq = R.propEq
export const range = R.range
export const reduce = R.reduce
export const reject = R.reject
export const repeat = R.repeat
export const replace = R.replace
export const reverse = R.reverse
export const sort = R.sort
export const sortBy = R.sortBy
export const split = R.split
export const splitEvery = R.splitEvery
export const startsWith = R.startsWith
export const subtract = R.subtract
export const T = R.T
export const tail = R.tail
export const take = R.take
export const takeLast = R.takeLast
export const tap = R.tap
export const test = R.test
export const times = R.times
export const toLower = R.toLower
export const toString = R.toString
export const toUpper = R.toUpper
export const trim = R.trim
export const type = R.type
export const uniq = R.uniq
export const uniqWith = R.uniqWith
export const update = R.update
export const values = R.values
export const without = R.without
export const zip = R.zip
export const zipObj = R.zipObj