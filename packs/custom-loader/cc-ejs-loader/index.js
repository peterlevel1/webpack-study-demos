var ejs = require("ejs-tj")
var loaderUtils = require("loader-utils")
var path = require("path")
var qs = require("querystring")
var hasOwn = Object.prototype.hasOwnProperty
var ejsOptList = [
  'cache', 'filename', 'delimiter',
  'scope', 'context', 'debug',
  'compileDebug', 'client', '_with'
]

function guard(local, arr) {
  var l = arr.length
  var p
  while (l-- > 0) {
    p = arr[l]
    local[p] = null
  }
}

function copy(a, b) {
  for (var p in b) {
    if (hasOwn.call(b, p)) {
      a[p] = b[p]
    }
  }
}

module.exports = function (source) {
  this.cacheable && this.cacheable()

  var srcLocal = this.query.local || {}
  var local = {}
  copy(local, srcLocal)

  var filename = path.basename(this.resourcePath)
    .replace(path.extname(this.resourcePath), "")
  var config = this.query.config
  var opts

  if (config) {
    if (this.resourceQuery && this.resourceQuery[0] === "?") {
      var obj = qs.parse(this.resourceQuery.slice(1))
      var conf = !obj.config
        ? filename
        : obj.config
      opts = config[conf]
    } else {
      opts = config[filename]
    }
  }

  var ret
  if (opts) {
    copy(local, opts)
    guard(local, ejsOptList)
    ret = 'module.exports = `' + ejs.render(source, local) + '`'
  } else {
    ret = ejs.compile(source, {
      client: true,
      // compileDebug: true
    })
    ret = 'module.exports = ' + ret.toString()
  }

  return ret
}

// ---------------------------------------------
// this.query
// query : the ccejs options
// -------
// resourcePath: '/Users/cc/Desktop/t/tf-wsd/packs/custom-loader/src/a.ejs',
// resourceQuery: '?local=aaa',
// async: [Function: async],
// callback: [Function],
// cacheable: [Function: cacheable],
// addDependency: [Function: addDependency],
// dependency: [Function: addDependency],
// addContextDependency: [Function: addContextDependency],
// getDependencies: [Function: getDependencies],
// getContextDependencies: [Function: getContextDependencies],
// clearDependencies: [Function: clearDependencies],
// resource: [Getter/Setter],
// request: [Getter],
// remainingRequest: [Getter],
// currentRequest: [Getter],
// previousRequest: [Getter],
// query: [Getter],
// data: [Getter]
// ---------------------------------------------

/**
var _ = require('lodash');
var loaderUtils = require('loader-utils');

module.exports = function(source) {
  this.cacheable && this.cacheable();
  var query = loaderUtils.parseQuery(this.query);
  var options = this.options.ejsLoader || {};

  ['escape', 'interpolate', 'evaluate'].forEach(function(templateSetting) {
    var setting = query[templateSetting];
    if (_.isString(setting)) {
      query[templateSetting] = new RegExp(setting, 'g');
    }
  });

  var template = _.template(source, _.extend({}, query, options));
  return 'module.exports = ' + template;
};
*/
