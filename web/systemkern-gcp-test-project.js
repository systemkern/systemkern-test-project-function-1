const kotlin = require('./kotlin.js');
if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'systemkern-gcp-test-project'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'systemkern-gcp-test-project'.");
}
module.exports = this['systemkern-gcp-test-project'] = function (_, Kotlin) {
  'use strict';
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
    var throwCCE = Kotlin.throwCCE;
  function hello() {
    return 'Hello Kotlin World';
  }
  function processRequest(req, res) {
      var message = trimMargin('Pushed from Github<br>' + '\n' + '        |req:               ' + req.toString() + '<br>' + '\n' + '        |req.query:         ' + req.query.toString() + '<br>' + '\n' + '        |req.body:          ' + req.body.toString() + '<br>' + '\n' + '    ');
    res.status(200).send(message);
  }

    function processBody(body, res) {
        var tmp$;
        var message = trimMargin('Pushed from Github<br>' + '\n' + '        |body:               ' + (typeof (tmp$ = body) === 'string' ? tmp$ : throwCCE()) + '\n' + '    ');
        res.status(200).send(message);
    }
  _.hello = hello;
  _.processRequest = processRequest;
    _.processBody = processBody;
  Kotlin.defineModule('systemkern-gcp-test-project', _);
  return _;
}(typeof this['systemkern-gcp-test-project'] === 'undefined' ? {} : this['systemkern-gcp-test-project'], kotlin);
