import { HOURS_IN_DAY, MIDNIGHT_HOUR, NAV_ITEMS } from './constants'

export function isTheNavValid(currentPage) {
  return NAV_ITEMS.some((el) => el[0] === currentPage)
}
export function isTimeLineItemValid({ hour }) {
  return isHourValid(hour)
}
export function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
}
export function isTimeLineItemsValid(timelineItems) {
  return timelineItems.every(isTimeLineItemValid)
}

export function isActivityValid(activity){
  return isNotEmptyString(activity)
}
export function validateActivities(activities){
  return activities.every(isActivityValid)
}



function isSelectValid({ value, label }) {
  return isNumber(value) && isString(label)
}

export function isBaseSelectValid(options) {
  return options.every(isSelectValid)
}

export function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value)
}
export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}

function isNotEmptyString(value){
  return isString(value) && value.length > 0
}

function isBetween(value, start, end) {
  return value >= start && value <= end
}

function isNull(value) {
  return value === null
}
function isUndefined(value) {
  return value === undefined
}
function isNumber(value) {
  return typeof value === 'number'
}
function isString(label) {
  return typeof label === 'string'
}
