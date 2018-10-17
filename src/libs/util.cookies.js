import Cookies from 'js-cookie'
import setting from '@/setting.js'
import WebStorageCache from 'web-storage-cache'

const cookies = {}
// const runElectron = process.env.RUN_ELECTRON
const runElectron = true

let wsCache
const defExp = 24 * 60 * 60
if (runElectron) {
  wsCache = new WebStorageCache({
    storage: 'localStorage',
    exp: defExp
  })
  console.log('runElectron', wsCache.isSupported())
}

/**
 * @description 存储 cookie 值
 * @param {String} name cookie name
 * @param {String} value cookie value
 * @param {Object} setting cookie setting
 */
cookies.set = function (name = 'default', value = '', cookieSetting = {}) {
  if (runElectron) {
    const {
      expires: exp = defExp
    } = cookieSetting
    wsCache.set(`d2admin-${setting.releases.version}-${name}`, value, {
      exp
    })
  } else {
    let currentCookieSetting = {
      expires: 1
    }
    Object.assign(currentCookieSetting, cookieSetting)
    Cookies.set(`d2admin-${setting.releases.version}-${name}`, value, currentCookieSetting)
  }
}

/**
 * @description 拿到 cookie 值
 * @param {String} name cookie name
 */
cookies.get = function (name = 'default') {
  if (runElectron) {
    return wsCache.get(`d2admin-${setting.releases.version}-${name}`)
  } else {
    return Cookies.get(`d2admin-${setting.releases.version}-${name}`)
  }
}

/**
 * @description 拿到 cookie 全部的值
 */
cookies.getAll = function () {
  if (runElectron) {
    return null
  } else {
    return Cookies.get()
  }
}

/**
 * @description 删除 cookie
 * @param {String} name cookie name
 */
cookies.remove = function (name = 'default') {
  if (runElectron) {
    wsCache.delete(`d2admin-${setting.releases.version}-${name}`)
  } else {
    return Cookies.remove(`d2admin-${setting.releases.version}-${name}`)
  }
}

export default cookies
