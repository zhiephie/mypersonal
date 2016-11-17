// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Zhiephie!'
//   }
// })


(function () { 'use strict'
  var createApp = function () {
    // ---------------------
    // BEGIN NORMAL APP CODE
    // ---------------------

    // Main Vue instance must be returned and have a root
    // node with the id "app", so that the client-side
    // version can take over once it loads.
    return new Vue({
      template: '<div id="app"><h2>Just call me</h2> <h1>{{ message }}</h1></div>',
      data: {
        message: 'Zhiephie!'
      }
    })

    // -------------------
    // END NORMAL APP CODE
    // -------------------
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = createApp
  } else {
    this.app = createApp()
  }
}).call(this)
