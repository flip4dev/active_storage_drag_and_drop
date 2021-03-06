
export function dispatchEvent(element, type, eventInit = {}) {
  const { bubbles, cancelable, detail } = eventInit
  const event = document.createEvent("Event")
  event.initEvent(type, bubbles || true, cancelable || true)
  event.detail = detail || {}
  element.dispatchEvent(event)
  return event
}

export function hasClassnameInHeirarchy(element, classname) {
  if(element && element.classList) {
    if (element.classList.contains(classname)) {
      return true
    } else {
      return hasClassnameInHeirarchy(element.parentNode, classname)
    }
  } else {
    return false
  }
}

export function getClassnameFromHeirarchy(element, classname) {
  if(element && element.classList) {
    if (element.classList.contains(classname)) {
      return element
    } else {
      return getClassnameFromHeirarchy(element.parentNode, classname)
    }
  } else {
    return null
  }
}

//export function disable(input) {
//  input.disabled = true
//}

//export function enable(input) {
//  input.disabled = false
//}

//export function toArray(value) {
//  if (Array.isArray(value)) {
//    return value
//  } else if (Array.from) {
//    return Array.from(value)
//  } else {
//    return [].slice.call(value)
//  }
//}

//export function findElements(root, selector) {
//  if (typeof root == "string") {
//    selector = root
//    root = document
//  }
//  const elements = root.querySelectorAll(selector)
//  return toArray(elements)
//}

//export function findElement(root, selector) {
//  if (typeof root == "string") {
//    selector = root
//    root = document
//  }
//  return root.querySelector(selector)
//}

