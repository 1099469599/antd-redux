import AV from 'leancloud-storage'
import { leancloud  } from '../config/app.js'

AV.init({
  appId: leancloud.appId,
  appKey: leancloud.appKey
})

export default {
  currentUser() {
    return AV.User.current()
  },
  logIn(username,  password) {
    return AV.User.logIn(username, password)
  },
  logOut() {
    AV.User.logOut()
  }
}

