import { BUTTON_TYPES, HOURS_IN_DAY, MIDNIGHT_HOUR, NAV_ITEMS } from './constants'
import { ICONS } from './icons'

export function isTheNavValid(page) {
  return NAV_ITEMS.some(navItem => navItem.page === page)
}
export function isIconValid(icon){
  return Object.keys(ICONS).includes(icon)
}
export function isTheNavItemValid(navItem) {
  return NAV_ITEMS.includes(navItem)
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

export function isNotEmptyString(value) {
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
