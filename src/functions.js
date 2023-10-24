import {
  SECONDS_IN_MINUTE,
  MINUTS_IN_HOUR,
  MILLISECONDS_IN_SECOND
} from './constants'
import { isNull } from './validators'
import {LOW_PERSENT,MEDIUM_PERSENT,HUNDRED_PERSENT} from './constants'

export function id() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function normalizeSelectValue(value) {
  return isNull(value) || isNaN(value) ? value : +value
}

export function generatePeriodSelectOptions() {
  const periodsInMinutes = [
    15, 30, 45, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480
  ]
  return periodsInMinutes.map((periodsInMinutes) => {
    return {
      value: periodsInMinutes * SECONDS_IN_MINUTE,
      label: generatePeriodSelectOptionsLabel(periodsInMinutes)
    }
  })
}

function generatePeriodSelectOptionsLabel(periodsInMinutes) {
  const hours = Math.floor(periodsInMinutes / MINUTS_IN_HOUR)
    .toString()
    .padStart(2, 0)
  const minutes = (periodsInMinutes % MINUTS_IN_HOUR).toString().padStart(2, 0)
  return `${hours}:${minutes}`
}

export function formatSeconds(seconds) {
  const date = new Date()
  date.setTime(Math.abs(seconds) * MILLISECONDS_IN_SECOND)

  const utc = date.toUTCString()

  return utc.substring(utc.indexOf(':') - 2, utc.indexOf(':') + 6)
}

export function currentHour(){
  return new Date().getHours()
}

export function getProgressColorClass(percentage){
  if(percentage<LOW_PERSENT) return 'bg-red-500';
  if(percentage<MEDIUM_PERSENT) return 'bg-yellow-500';
  if(percentage<HUNDRED_PERSENT) return 'bg-blue-500';
  return 'bg-green-500';
}