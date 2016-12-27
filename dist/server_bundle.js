/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';\n\nvar _express = __webpack_require__(1);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _expressGraphql = __webpack_require__(2);\n\nvar _expressGraphql2 = _interopRequireDefault(_expressGraphql);\n\nvar _mongoose = __webpack_require__(3);\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _graphql = __webpack_require__(4);\n\nvar _graphql2 = _interopRequireDefault(_graphql);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\napp.use('/graphiql', _express2.default.static(__dirname + '/graphiql.html'));\napp.use('/graphiql.js', _express2.default.static(__dirname + '/graphiql.js'));\napp.use('/graphiql.css', _express2.default.static(__dirname + '/graphiql.css'));\n\napp.use('/', (0, _expressGraphql2.default)(function (req) {\n    return {\n        schema: _graphql2.default,\n        pretty: true\n    };\n}));\n\n_mongoose2.default.connect('mongodb://localhost/inaba');\n\nvar server = app.listen(8080, function () {\n    console.log('listening port ', server.address().port);\n});\n/* WEBPACK VAR INJECTION */}.call(exports, \"/\"))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/server.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/server.js?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("module.exports = require(\"express\");\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"express\"\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22express%22?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("module.exports = require(\"express-graphql\");\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"express-graphql\"\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22express-graphql%22?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("module.exports = require(\"mongoose\");\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"mongoose\"\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _graphql = __webpack_require__(5);\n\nvar _mutations = __webpack_require__(6);\n\nvar _mutations2 = _interopRequireDefault(_mutations);\n\nvar _queries = __webpack_require__(11);\n\nvar _queries2 = _interopRequireDefault(_queries);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = new _graphql.GraphQLSchema({\n    query: new _graphql.GraphQLObjectType({\n        name: 'Query',\n        fields: _queries2.default\n    }),\n    mutation: new _graphql.GraphQLObjectType({\n        name: 'Mutation',\n        fields: _mutations2.default\n    })\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/graphql/index.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/graphql/index.js?");

/***/ },
/* 5 */
/***/ function(module, exports) {

	eval("module.exports = require(\"graphql\");\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"graphql\"\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22graphql%22?");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _sample = __webpack_require__(7);\n\nvar _sample2 = _interopRequireDefault(_sample);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _extends({}, _sample2.default);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/graphql/mutations/index.js\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/graphql/mutations/index.js?");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _add = __webpack_require__(8);\n\nvar _add2 = _interopRequireDefault(_add);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n    addSample: _add2.default\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/graphql/mutations/sample/index.js\n ** module id = 7\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/graphql/mutations/sample/index.js?");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _graphql = __webpack_require__(5);\n\nvar _sample_input_type = __webpack_require__(9);\n\nvar _sample_input_type2 = _interopRequireDefault(_sample_input_type);\n\nvar _sample_model = __webpack_require__(10);\n\nvar _sample_model2 = _interopRequireDefault(_sample_model);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nexports.default = {\n    description: \"Adds a single sample given the title, the _id is automatic from mongoose\",\n    type: _graphql.GraphQLBoolean,\n    args: {\n        data: {\n            name: 'data',\n            type: new _graphql.GraphQLNonNull(_sample_input_type2.default)\n        }\n    },\n    resolve: function resolve(root, params, ctx, options) {\n        var _this = this;\n\n        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {\n            var sampleModel, newSample;\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            sampleModel = new _sample_model2.default(params.data);\n                            _context.next = 3;\n                            return sampleModel.save();\n\n                        case 3:\n                            newSample = _context.sent;\n\n                            if (newSample) {\n                                _context.next = 6;\n                                break;\n                            }\n\n                            throw new Error('Error adding new blog post');\n\n                        case 6:\n                            return _context.abrupt('return', true);\n\n                        case 7:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, _this);\n        }))();\n    }\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/graphql/mutations/sample/add.js\n ** module id = 8\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/graphql/mutations/sample/add.js?");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _graphql = __webpack_require__(5);\n\nexports.default = new _graphql.GraphQLInputObjectType({\n    name: 'SampleInput',\n    fields: {\n        _id: { type: _graphql.GraphQLID },\n        title: { type: _graphql.GraphQLString }\n    }\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/graphql/types/sample_input_type.js\n ** module id = 9\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/graphql/types/sample_input_type.js?");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _mongoose = __webpack_require__(3);\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar sampleSchema = new _mongoose2.default.Schema({\n    title: { type: String, required: true }\n});\n\nexports.default = _mongoose2.default.model('Sample', sampleSchema);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/models/sample_model.js\n ** module id = 10\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/models/sample_model.js?");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _sample = __webpack_require__(12);\n\nvar _sample2 = _interopRequireDefault(_sample);\n\nvar _translation = __webpack_require__(17);\n\nvar _translation2 = _interopRequireDefault(_translation);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _extends({}, _sample2.default, _translation2.default);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/graphql/queries/index.js\n ** module id = 11\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/graphql/queries/index.js?");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _single = __webpack_require__(13);\n\nvar _single2 = _interopRequireDefault(_single);\n\nvar _multiple = __webpack_require__(16);\n\nvar _multiple2 = _interopRequireDefault(_multiple);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n    sample: _single2.default,\n    samples: _multiple2.default\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/graphql/queries/sample/index.js\n ** module id = 12\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/graphql/queries/sample/index.js?");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _graphql = __webpack_require__(5);\n\nvar _sample_type = __webpack_require__(14);\n\nvar _sample_type2 = _interopRequireDefault(_sample_type);\n\nvar _sample_model = __webpack_require__(10);\n\nvar _sample_model2 = _interopRequireDefault(_sample_model);\n\nvar _get_projection = __webpack_require__(15);\n\nvar _get_projection2 = _interopRequireDefault(_get_projection);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n    description: 'Gets a single sample given a mongo objectID',\n    type: _sample_type2.default,\n    args: {\n        id: {\n            name: 'id',\n            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)\n        }\n    },\n    resolve: function resolve(root, params, ctx, options) {\n\n        var projection = (0, _get_projection2.default)(options.fieldASTs[0]);\n        console.log(projection);\n        return _sample_model2.default.findById(params.id).select(projection).exec();\n    }\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/graphql/queries/sample/single.js\n ** module id = 13\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/graphql/queries/sample/single.js?");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _graphql = __webpack_require__(5);\n\nexports.default = new _graphql.GraphQLObjectType({\n    name: 'Sample',\n    fields: {\n        _id: {\n            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)\n        },\n        title: {\n            type: _graphql.GraphQLString\n        }\n    }\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/graphql/types/sample_type.js\n ** module id = 14\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/graphql/types/sample_type.js?");

/***/ },
/* 15 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = getProjection;\nfunction getProjection(fieldASTs) {\n  return fieldASTs.selectionSet.selections.reduce(function (projections, selection) {\n    projections[selection.name.value] = 1;\n    return projections;\n  }, {});\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/graphql/get_projection.js\n ** module id = 15\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/graphql/get_projection.js?");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _graphql = __webpack_require__(5);\n\nvar _sample_type = __webpack_require__(14);\n\nvar _sample_type2 = _interopRequireDefault(_sample_type);\n\nvar _sample_model = __webpack_require__(10);\n\nvar _sample_model2 = _interopRequireDefault(_sample_model);\n\nvar _get_projection = __webpack_require__(15);\n\nvar _get_projection2 = _interopRequireDefault(_get_projection);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n    description: \"it returns multiple samples, can be queried by any field\",\n    type: new _graphql.GraphQLList(_sample_type2.default),\n    args: {\n        title: {\n            name: 'title',\n            type: _graphql.GraphQLString\n        }\n    },\n    resolve: function resolve(root, params, ctx, options) {\n        var projection = (0, _get_projection2.default)(options.fieldASTs[0]);\n        return _sample_model2.default.find(params).select(projection).exec();\n    }\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/graphql/queries/sample/multiple.js\n ** module id = 16\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/graphql/queries/sample/multiple.js?");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _single = __webpack_require__(18);\n\nvar _single2 = _interopRequireDefault(_single);\n\nvar _multiple = __webpack_require__(21);\n\nvar _multiple2 = _interopRequireDefault(_multiple);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n    translation: _single2.default,\n    translations: _multiple2.default\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/graphql/queries/translation/index.js\n ** module id = 17\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/graphql/queries/translation/index.js?");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _graphql = __webpack_require__(5);\n\nvar _translation_type = __webpack_require__(19);\n\nvar _translation_type2 = _interopRequireDefault(_translation_type);\n\nvar _translation_model = __webpack_require__(20);\n\nvar _translation_model2 = _interopRequireDefault(_translation_model);\n\nvar _get_projection = __webpack_require__(15);\n\nvar _get_projection2 = _interopRequireDefault(_get_projection);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n    description: \"return a label list given a language id\",\n    type: _translation_type2.default,\n    args: {\n        lang: {\n            name: \"lang\",\n            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)\n        }\n    },\n    resolve: function resolve(root, params, ctx, options) {\n\n        // return labelModel\n        //         .find(params)\n        //         .exec();\n        var projection = (0, _get_projection2.default)(options.fieldASTs[0]);\n        return _translation_model2.default.findOne(params).select(projection).exec();\n    }\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/graphql/queries/translation/single.js\n ** module id = 18\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/graphql/queries/translation/single.js?");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _graphql = __webpack_require__(5);\n\nvar label = new _graphql.GraphQLObjectType({\n    name: 'Label',\n    description: \"key value pair for label list\",\n    fields: {\n        label_id: {\n            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)\n        },\n        value: {\n            type: _graphql.GraphQLString\n\n        }\n    }\n});\n\nexports.default = new _graphql.GraphQLObjectType({\n    name: 'Translation',\n    description: \"Holds labels for a particular language to be loaded on the site\",\n    fields: {\n        lang: {\n            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)\n        },\n        labels: {\n            type: new _graphql.GraphQLList(label)\n        }\n    }\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/graphql/types/translation_type.js\n ** module id = 19\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/graphql/types/translation_type.js?");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _mongoose = __webpack_require__(3);\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar translationSchema = new _mongoose2.default.Schema({\n    lang: { type: String, required: true, unique: true },\n    labels: [{\n        label_id: { type: String, required: true, unique: true },\n        value: { type: String, required: true }\n    }]\n});\n\nexports.default = _mongoose2.default.model('Translation', translationSchema);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/models/translation_model.js\n ** module id = 20\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/models/translation_model.js?");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _graphql = __webpack_require__(5);\n\nvar _translation_type = __webpack_require__(19);\n\nvar _translation_type2 = _interopRequireDefault(_translation_type);\n\nvar _translation_model = __webpack_require__(20);\n\nvar _translation_model2 = _interopRequireDefault(_translation_model);\n\nvar _get_projection = __webpack_require__(15);\n\nvar _get_projection2 = _interopRequireDefault(_get_projection);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n    description: \"returns multiple languages, mainly for listing avaliable translations\",\n    type: new _graphql.GraphQLList(_translation_type2.default),\n    args: {},\n    resolve: function resolve(root, params, ctx, options) {\n        //const projection = getProjection(options.fieldASTs[0]);\n        return _translation_model2.default.find().select({ lang: 1 }).exec();\n    }\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/graphql/queries/translation/multiple.js\n ** module id = 21\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/graphql/queries/translation/multiple.js?");

/***/ }
/******/ ]);