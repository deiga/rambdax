import R from 'rambda'

import isTypeMethod from './modules/isType'

export {default as compact} from './modules/compact'
export {default as composeAsync} from './modules/composeAsync'
export {default as debounce} from './modules/debounce'
export const DELAY = 'RAMBDAX_DELAY'
export {default as delay} from './modules/delay'
export {default as evolve} from './modules/evolve'
export {default as ifElseAsync} from './modules/ifElseAsync'
export {default as intersection} from './modules/intersection'
export const isArray = x => isTypeMethod('Array', x)
export const isObject = x => isTypeMethod('Object', x)
export const isString = x => isTypeMethod('String', x)
export const isType = isTypeMethod
export {default as isPromiseLike} from './modules/isPromiseLike'
export {default as isValid} from './modules/isValid'
export {default as mapAsync} from './modules/mapAsync'
export {default as mapFastAsync} from './modules/mapFastAsync'
export {default as memoize} from './modules/memoize'
export {default as mergeAll} from './modules/mergeAll'
export {default as omitBy} from './modules/omitBy'
export {default as once} from './modules/once'
export {default as pickBy} from './modules/pickBy'
export {default as produce} from './modules/produce'
export {default as random} from './modules/random'
export {default as rangeBy} from './modules/rangeBy'
export {default as renameProps} from './modules/renameProps'
export {default as resolve} from './modules/resolve'
export {default as resolveSecure} from './modules/resolveSecure'
export {default as shuffle} from './modules/shuffle'
export {default as tapAsync} from './modules/tapAsync'
export {default as throttle} from './modules/throttle'
export {default as when} from './modules/when'
export {default as where} from './modules/where'

// Follows code generated by `run rambda`
export const add = R.add
export const always = R.always
export const complement = R.complement
export const concat = R.concat
export const divide = R.divide
export const endsWith = R.endsWith
export const F = R.F
export const identity = R.identity
export const includes = R.includes
export const join = R.join
export const lastIndexOf = R.lastIndexOf
export const length = R.length
export const modulo = R.modulo
export const multiply = R.multiply
export const not = R.not
export const padEnd = R.padEnd
export const padStart = R.padStart
export const reverse = R.reverse
export const startsWith = R.startsWith
export const subtract = R.subtract
export const T = R.T
export const toLower = R.toLower
export const toString = R.toString
export const toUpper = R.toUpper
export const trim = R.trim
export const addIndex = R.addIndex
export const adjust = R.adjust
export const all = R.all
export const allPass = R.allPass
export const anyPass = R.anyPass
export const any = R.any
export const append = R.append
export const both = R.both
export const compose = R.compose
export const contains = R.contains
export const curry = R.curry
export const dec = R.dec
export const defaultTo = R.defaultTo
export const drop = R.drop
export const dropLast = R.dropLast
export const either = R.either
export const inc = R.inc
export const equals = R.equals
export const filter = R.filter
export const find = R.find
export const findIndex = R.findIndex
export const flatten = R.flatten
export const flip = R.flip
export const has = R.has
export const head = R.head
export const ifElse = R.ifElse
export const isNil = R.isNil
export const indexOf = R.indexOf
export const init = R.init
export const last = R.last
export const map = R.map
export const match = R.match
export const merge = R.merge
export const omit = R.omit
export const partialCurry = R.partialCurry
export const path = R.path
export const pathOr = R.pathOr
export const pick = R.pick
export const pipe = R.pipe
export const pluck = R.pluck
export const prepend = R.prepend
export const prop = R.prop
export const propEq = R.propEq
export const range = R.range
export const reduce = R.reduce
export const repeat = R.repeat
export const replace = R.replace
export const sort = R.sort
export const sortBy = R.sortBy
export const split = R.split
export const splitEvery = R.splitEvery
export const tap = R.tap
export const tail = R.tail
export const take = R.take
export const takeLast = R.takeLast
export const test = R.test
export const type = R.type
export const typedPathOr = R.typedPathOr
export const typedDefaultTo = R.typedDefaultTo
export const uniq = R.uniq
export const update = R.update
export const values = R.values