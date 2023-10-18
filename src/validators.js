import { HOURS_IN_DAY, MIDNIGHT_HOUR, NAV_ITEMS } from './constants'

export function isTheNavValid(currentPage) {
  return NAV_ITEMS.some((el) => el[0] === currentPage)
}
export function isTimeLineItemValid(timelineItem) {
  return (
    typeof timelineItem.hour === 'number' &&
    timelineItem.hour >= MIDNIGHT_HOUR &&
    timelineItem.hour < HOURS_IN_DAY
  )
}
export function isTimeLineItemsValid(timelineItems) {
    return timelineItems.every(isTimeLineItemValid)
}

function isSelectValid({value,label}){
    return typeof value === 'number' && typeof label === 'string'
}

export function isBaseSelectValid(options) {
  return options.every(isSelectValid)
}
