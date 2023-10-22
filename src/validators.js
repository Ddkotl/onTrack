import { BUTTON_TYPES, HOURS_IN_DAY, MIDNIGHT_HOUR, NAV_ITEMS } from './constants'

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

export function isActivityValid({ id, name, secondsToComplete }) {
  if(isNull(id)){
    return true
  }
  return [isNotEmptyString(id), isNotEmptyString(name), isNumber(secondsToComplete)].every(Boolean)
}
export function validateActivities(activities) {
  return activities.every(isActivityValid)
}

export function isSelectValid({ value, label }) {
  return isNumber(value) || (isNotEmptyString(value) && isNotEmptyString(label))
}

export function isBaseSelectValid(options) {
  return options.every(isSelectValid)
}

export function isSelectValueValid(value){
  return isNotEmptyString(value) || isNull(value) ||isNumber(value)
}

export function isButtonTypeValid(type) {
  return BUTTON_TYPES.includes(type)
}
export function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value)
}
export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}

function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}

function isBetween(value, start, end) {
  return value >= start && value <= end
}

export function isNull(value) {
  return value === null
}
export function isUndefined(value) {
  return value === undefined
}
export function isNumber(value) {
  return typeof value === 'number'
}
function isString(label) {
  return typeof label === 'string'
}
