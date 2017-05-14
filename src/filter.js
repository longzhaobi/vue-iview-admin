import Vue from 'vue'

Vue.filter("formItemFilter", (o) => {
  if (o.mtime) {
      delete o.mtime
  }
  if(o.ctime) {
      delete o.ctime
  }
  if(o.createId) {
      delete o.createId
  }
  if(o.available) {
      delete o.available
  }
  if(o.id_) {
      delete o.id_
  }
  if(o.roleIds) {
      delete o.roleIds
  }
  if(o.roleNames) {
      delete o.roleNames
  }
  if(o.salt) {
      delete o.salt
  }
  if(o._index) {
      delete o._index
  }
})
