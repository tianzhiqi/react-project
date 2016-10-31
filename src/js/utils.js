import React from 'react'

export function toArray(children) {
  if(Array.isArray(children)) {
    return children.filter(c => !!c)
  }
  const c = []
  React.Children.forEach(children, child => {
    if (child) {
      c.push(child)
    }
  })
  return c
}
export function getActiveIndex(children, activeKey) {
  const c = toArray(children)
  for(let i = 0; i < c.length; i++) {
    if (c[i].key === activeKey) {
      return i
    }
  }
  return -1
}
