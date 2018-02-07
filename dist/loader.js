'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.build=build;exports.toObject=toObject;exports.defaultBuildValue=defaultBuildValue;exports.processSettings=processSettings;exports.buildSettings=buildSettings;function build(variables){var separator=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'_';var regex=arguments.length>2&&arguments[2]!==undefined?arguments[2]:/^GPLATFORM_SETTINGS_/;var buildValue=arguments.length>3&&arguments[3]!==undefined?arguments[3]:defaultBuildValue;var filteredVariables=processSettings(variables,regex,buildValue);return buildSettings(filteredVariables,separator)}function toObject(defaults,json){return json?JSON.parse(defaults):require(defaults)}var json=/^(\[|\{).*(\]|\})$/;function defaultBuildValue(value){return json.test((value||'').trim())?JSON.parse(value):value}function processSettings(variables){var regex=arguments.length>1&&arguments[1]!==undefined?arguments[1]:/^GPLATFORM_SETTINGS_/;var buildValue=arguments.length>2&&arguments[2]!==undefined?arguments[2]:defaultBuildValue;var result={};for(var key in variables){if(regex.test(key)){result[key.replace(regex,'')]=buildValue(variables[key])}}return result}function buildSettings(variables){var separator=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'_';var settings={};for(var key in variables){var value=variables[key];var fields=key.split(separator);var base=settings;var last=null;var field=null;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=fields[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){field=_step.value;last=base;base[field]=base[field]||{};base=base[field]}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}last[field]=value}return settings}