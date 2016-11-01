import React from 'react'

export function toArray(children) {
  if (Array.isArray(children)) {
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
  for (let i = 0; i < c.length; i++) {
    if (c[i].key === activeKey) {
      return i
    }
  }
  return -1
}
/* 时间格式化 */
export function formatDate(date, fmt) {
  const o = {
    'M+': date.getMonth() + 1, // month
    'd+': date.getDate(),  // day
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  Object.keys(o).forEach((k) => {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  })
  return fmt
}
