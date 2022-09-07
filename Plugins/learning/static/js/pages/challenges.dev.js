/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"pages/challenges": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/js";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./assets/js/pages/challenges.js","helpers","vendor","default~pages/challenges~pages/main~pages/notifications~pages/scoreboard~pages/settings~pages/setup~~6822bf1f"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/pages/challenges.js":
/*!***************************************!*\
  !*** ./assets/js/pages/challenges.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;
eval("\n\n__webpack_require__(/*! ./main */ \"./assets/js/pages/main.js\");\n\n__webpack_require__(/*! bootstrap/js/dist/tab */ \"./node_modules/bootstrap/js/dist/tab.js\");\n\n__webpack_require__(/*! bootstrap/js/dist/modal */ \"./node_modules/bootstrap/js/dist/modal.js\");\n\n__webpack_require__(/*! bootstrap/js/dist/collapse */ \"./node_modules/bootstrap/js/dist/collapse.js\");\n\nvar _ezq = __webpack_require__(/*! core/ezq */ \"../CTFd/CTFd/themes/core/assets/js/ezq.js\");\n\nvar _utils = __webpack_require__(/*! core/utils */ \"../CTFd/CTFd/themes/core/assets/js/utils.js\");\n\nvar _dayjs = _interopRequireDefault(__webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\"));\n\nvar _relativeTime = _interopRequireDefault(__webpack_require__(/*! dayjs/plugin/relativeTime */ \"./node_modules/dayjs/plugin/relativeTime.js\"));\n\nvar _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\"));\n\nvar _CTFd = _interopRequireDefault(__webpack_require__(/*! core/CTFd */ \"../CTFd/CTFd/themes/core/assets/js/CTFd.js\"));\n\nvar _config = _interopRequireDefault(__webpack_require__(/*! core/config */ \"../CTFd/CTFd/themes/core/assets/js/config.js\"));\n\nvar _highlight = _interopRequireDefault(__webpack_require__(/*! highlight.js */ \"./node_modules/highlight.js/lib/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n_dayjs[\"default\"].extend(_relativeTime[\"default\"]);\n\nvar api_func = {\n  teams: function teams(x) {\n    return _CTFd[\"default\"].api.get_team_solves({\n      teamId: x\n    });\n  },\n  users: function users(x) {\n    return _CTFd[\"default\"].api.get_user_solves({\n      userId: x\n    });\n  }\n};\n_CTFd[\"default\"]._internal.challenge = {};\nvar challenges = [];\nvar user_solves = [];\n\nvar loadChal = function loadChal(id) {\n  var chal = _jquery[\"default\"].grep(challenges, function (chal) {\n    return chal.id == id;\n  })[0];\n\n  if (chal.type === \"hidden\") {\n    (0, _ezq.ezAlert)({\n      title: \"Challenge Hidden!\",\n      body: \"You haven't unlocked this challenge yet!\",\n      button: \"Got it!\"\n    });\n    return;\n  }\n\n  displayChal(chal);\n};\n\nvar loadChalByName = function loadChalByName(name) {\n  var idx = name.lastIndexOf(\"-\");\n  var pieces = [name.slice(0, idx), name.slice(idx + 1)];\n  var id = pieces[1];\n\n  var chal = _jquery[\"default\"].grep(challenges, function (chal) {\n    return chal.id == id;\n  })[0];\n\n  displayChal(chal);\n};\n\nvar displayChal = function displayChal(chal) {\n  return Promise.all([_CTFd[\"default\"].api.get_challenge({\n    challengeId: chal.id\n  }), _jquery[\"default\"].getScript(_config[\"default\"].urlRoot + chal.script), _jquery[\"default\"].get(_config[\"default\"].urlRoot + chal.template)]).then(function (responses) {\n    var challenge = _CTFd[\"default\"]._internal.challenge;\n    (0, _jquery[\"default\"])(\"#challenge-window\").empty(); // Inject challenge data into the plugin\n\n    challenge.data = responses[0].data; // Call preRender function in plugin\n\n    challenge.preRender(); // Build HTML from the Jinja response in API\n\n    (0, _jquery[\"default\"])(\"#challenge-window\").append(responses[0].data.view);\n    (0, _jquery[\"default\"])(\"#challenge-window #challenge-input\").addClass(\"form-control\");\n    (0, _jquery[\"default\"])(\"#challenge-window #challenge-submit\").addClass(\"btn btn-md btn-outline-secondary float-right\");\n    var modal = (0, _jquery[\"default\"])(\"#challenge-window\").find(\".modal-dialog\");\n\n    if (window.init.theme_settings && window.init.theme_settings.challenge_window_size) {\n      switch (window.init.theme_settings.challenge_window_size) {\n        case \"sm\":\n          modal.addClass(\"modal-sm\");\n          break;\n\n        case \"lg\":\n          modal.addClass(\"modal-lg\");\n          break;\n\n        case \"xl\":\n          modal.addClass(\"modal-xl\");\n          break;\n\n        default:\n          break;\n      }\n    }\n\n    (0, _jquery[\"default\"])(\".challenge-solves\").click(function (event) {\n      getSolves((0, _jquery[\"default\"])(\"#challenge-id\").val());\n    });\n    (0, _jquery[\"default\"])(\".nav-tabs a\").click(function (event) {\n      event.preventDefault();\n      (0, _jquery[\"default\"])(this).tab(\"show\");\n    }); // Handle modal toggling\n\n    (0, _jquery[\"default\"])(\"#challenge-window\").on(\"hide.bs.modal\", function (event) {\n      (0, _jquery[\"default\"])(\"#challenge-input\").removeClass(\"wrong\");\n      (0, _jquery[\"default\"])(\"#challenge-input\").removeClass(\"correct\");\n      (0, _jquery[\"default\"])(\"#incorrect-key\").slideUp();\n      (0, _jquery[\"default\"])(\"#correct-key\").slideUp();\n      (0, _jquery[\"default\"])(\"#already-solved\").slideUp();\n      (0, _jquery[\"default\"])(\"#too-fast\").slideUp();\n    });\n    (0, _jquery[\"default\"])(\".load-hint\").on(\"click\", function (event) {\n      loadHint((0, _jquery[\"default\"])(this).data(\"hint-id\"));\n    });\n    (0, _jquery[\"default\"])(\"#challenge-submit\").click(function (event) {\n      event.preventDefault();\n      (0, _jquery[\"default\"])(\"#challenge-submit\").addClass(\"disabled-button\");\n      (0, _jquery[\"default\"])(\"#challenge-submit\").prop(\"disabled\", true);\n\n      _CTFd[\"default\"]._internal.challenge.submit().then(renderSubmissionResponse).then(loadChals).then(markSolves);\n    });\n    (0, _jquery[\"default\"])(\"#challenge-input\").keyup(function (event) {\n      if (event.keyCode == 13) {\n        (0, _jquery[\"default\"])(\"#challenge-submit\").click();\n      }\n    });\n    (0, _jquery[\"default\"])(\".input-field\").bind({\n      focus: function focus() {\n        (0, _jquery[\"default\"])(this).parent().addClass(\"input--filled\");\n      },\n      blur: function blur() {\n        var $this = (0, _jquery[\"default\"])(this);\n\n        if ($this.val() === \"\") {\n          $this.parent().removeClass(\"input--filled\");\n          var $label = $this.siblings(\".input-label\");\n          $label.removeClass(\"input--hide\");\n        }\n      }\n    });\n    challenge.postRender();\n    (0, _jquery[\"default\"])(\"#challenge-window\").find(\"pre code\").each(function (_idx) {\n      _highlight[\"default\"].highlightBlock(this);\n    });\n    window.location.replace(window.location.href.split(\"#\")[0] + \"#\".concat(chal.name, \"-\").concat(chal.id));\n    (0, _jquery[\"default\"])(\"#challenge-window\").modal();\n  });\n};\n\nfunction renderSubmissionResponse(response) {\n  var result = response.data;\n  var result_message = (0, _jquery[\"default\"])(\"#result-message\");\n  var result_notification = (0, _jquery[\"default\"])(\"#result-notification\");\n  var answer_input = (0, _jquery[\"default\"])(\"#challenge-input\");\n  result_notification.removeClass();\n  result_message.text(result.message);\n\n  if (result.status === \"authentication_required\") {\n    window.location = _CTFd[\"default\"].config.urlRoot + \"/login?next=\" + _CTFd[\"default\"].config.urlRoot + window.location.pathname + window.location.hash;\n    return;\n  } else if (result.status === \"incorrect\") {\n    // Incorrect key\n    result_notification.addClass(\"alert alert-danger alert-dismissable text-center\");\n    result_notification.slideDown();\n    answer_input.removeClass(\"correct\");\n    answer_input.addClass(\"wrong\");\n    setTimeout(function () {\n      answer_input.removeClass(\"wrong\");\n    }, 3000);\n  } else if (result.status === \"correct\") {\n    // Challenge Solved\n    result_notification.addClass(\"alert alert-success alert-dismissable text-center\");\n    result_notification.slideDown();\n\n    if ((0, _jquery[\"default\"])(\".challenge-solves\").text().trim()) {\n      // Only try to increment solves if the text isn't hidden\n      (0, _jquery[\"default\"])(\".challenge-solves\").text(parseInt((0, _jquery[\"default\"])(\".challenge-solves\").text().split(\" \")[0]) + 1 + \" Solves\");\n    }\n\n    answer_input.val(\"\");\n    answer_input.removeClass(\"wrong\");\n    answer_input.addClass(\"correct\");\n  } else if (result.status === \"already_solved\") {\n    // Challenge already solved\n    result_notification.addClass(\"alert alert-info alert-dismissable text-center\");\n    result_notification.slideDown();\n    answer_input.addClass(\"correct\");\n  } else if (result.status === \"paused\") {\n    // CTF is paused\n    result_notification.addClass(\"alert alert-warning alert-dismissable text-center\");\n    result_notification.slideDown();\n  } else if (result.status === \"ratelimited\") {\n    // Keys per minute too high\n    result_notification.addClass(\"alert alert-warning alert-dismissable text-center\");\n    result_notification.slideDown();\n    answer_input.addClass(\"too-fast\");\n    setTimeout(function () {\n      answer_input.removeClass(\"too-fast\");\n    }, 3000);\n  }\n\n  setTimeout(function () {\n    (0, _jquery[\"default\"])(\".alert\").slideUp();\n    (0, _jquery[\"default\"])(\"#challenge-submit\").removeClass(\"disabled-button\");\n    (0, _jquery[\"default\"])(\"#challenge-submit\").prop(\"disabled\", false);\n  }, 3000);\n}\n\nfunction markSolves() {\n  return api_func[_CTFd[\"default\"].config.userMode](\"me\").then(function (response) {\n    var solves = response.data;\n\n    for (var i = solves.length - 1; i >= 0; i--) {\n      var btn = (0, _jquery[\"default\"])('a[value=\"' + solves[i].challenge_id + '\"]');\n\n      if (!btn.hasClass(\"solved-challenge\")) {\n        btn.addClass(\"solved-challenge\");\n        btn.find(\"li\").append(\"<i class='fas fa-check corner-button-check'></i>\");\n      }\n    }\n  });\n}\n\nfunction loadUserSolves() {\n  if (_CTFd[\"default\"].user.id == 0) {\n    return Promise.resolve();\n  }\n\n  return api_func[_CTFd[\"default\"].config.userMode](\"me\").then(function (response) {\n    var solves = response.data;\n\n    for (var i = solves.length - 1; i >= 0; i--) {\n      var chal_id = solves[i].challenge_id;\n      user_solves.push(chal_id);\n    }\n  });\n}\n\nfunction getSolves(id) {\n  return _CTFd[\"default\"].api.get_challenge_solves({\n    challengeId: id\n  }).then(function (response) {\n    var data = response.data;\n    (0, _jquery[\"default\"])(\".challenge-solves\").text(parseInt(data.length) + \" Solves\");\n    var box = (0, _jquery[\"default\"])(\"#challenge-solves-names\");\n    box.empty();\n\n    for (var i = 0; i < data.length; i++) {\n      var _id = data[i].account_id;\n      var name = data[i].name;\n      var date = (0, _dayjs[\"default\"])(data[i].date).fromNow();\n      var account_url = data[i].account_url;\n      box.append('<tr><td><a href=\"{0}\">{2}</td><td>{3}</td></tr>'.format(account_url, _id, (0, _utils.htmlEntities)(name), date));\n    }\n  });\n}\n\nfunction natural_sort(a, b) {\n  var ax = [],\n      bx = [];\n  a.replace(/(\\d+)|(\\D+)/g, function (_, $1, $2) {\n    ax.push([$1 || Infinity, $2 || \"\"]);\n  });\n  b.replace(/(\\d+)|(\\D+)/g, function (_, $1, $2) {\n    bx.push([$1 || Infinity, $2 || \"\"]);\n  });\n\n  while (ax.length && bx.length) {\n    var an = ax.shift();\n    var bn = bx.shift();\n    var nn = an[0] - bn[0] || an[1].localeCompare(bn[1]);\n    if (nn) return nn;\n  }\n\n  return ax.length - bx.length;\n}\n\nfunction natural_sort_object(a, b) {\n  return natural_sort(a.name, b.name);\n}\n\nfunction loadChals() {\n  return _CTFd[\"default\"].api.get_challenge_list().then(function (response) {\n    var categories = [];\n    var $challenges_board = (0, _jquery[\"default\"])(\"#challenges-board\");\n    challenges = response.data; // Get the target of a currently expanded row to expand it later\n\n    var targets = [];\n    (0, _jquery[\"default\"])(\".card-header[data-expanded=true]\").each(function (i, e) {\n      targets.push((0, _jquery[\"default\"])(e).attr(\"data-target\"));\n    });\n    $challenges_board.empty();\n    var template = '<div class=\"card\">\\n' + '    <div class=\"card-header cursor-p\" role=\"tab\" data-toggle=\"collapse\">\\n' + '        <h5 class=\"mb-0\">\\n' + '            <a data-toggle=\"collapse\" href=\"#collapseOne\" class=\"card-link\">\\n' + \"            </a>\\n\" + \"        </h5>\\n\" + \"    </div>\\n\" + '    <div id=\"collapseOne\" class=\"collapse card-block\" role=\"tabpanel\">\\n' + '        <div class=\"card-body\">\\n' + \"        </div>\\n\" + \"    </div>\\n\" + \"</div>\";\n\n    for (var i = 0; i < challenges.length; i++) {\n      challenges[i].solves = 0;\n\n      if (_jquery[\"default\"].inArray(challenges[i].category, categories) == -1) {\n        var category = challenges[i].category;\n        categories.push(category);\n      }\n    }\n\n    categories = categories.sort(natural_sort);\n\n    for (var _i = 0; _i < categories.length; _i++) {\n      var _category = categories[_i];\n\n      var category_id = _category.replace(/ /g, \"-\").hashCode();\n\n      var category_target = \"#\" + category_id;\n      var category_block = (0, _jquery[\"default\"])(template);\n      category_block.find(\".card-link\").attr(\"data-target\", category_target).text(_category);\n      category_block.find(\".card-header\").attr(\"data-target\", category_target);\n      category_block.find(\".card-header\").attr(\"data-expanded\", false);\n      category_block.find(\".card-block\").attr(\"id\", category_id); // If this is a previously known category that's expanded\n      // we should re-expand it.\n\n      if (targets.includes(category_target)) {\n        category_block.find(\".card-header\").attr(\"data-expanded\", true);\n        category_block.find(\".card-block\").addClass(\"show\");\n      }\n\n      (0, _jquery[\"default\"])(\"#challenges-board\").append(category_block);\n    } // Change sorting order of challenges based on theme settings\n\n\n    if (window.init.theme_settings && window.init.theme_settings.challenge_ordering) {\n      switch (window.init.theme_settings.challenge_ordering) {\n        case \"points\":\n          break;\n\n        case \"name\":\n          challenges = challenges.sort(natural_sort_object);\n          break;\n\n        default:\n          break;\n      }\n    }\n\n    for (var _i2 = 0; _i2 < challenges.length; _i2++) {\n      var chalinfo = challenges[_i2];\n      var chalid = chalinfo.name.replace(/ /g, \"-\").hashCode();\n      var catid = chalinfo.category.replace(/ /g, \"-\").hashCode();\n      var chalwrap = (0, _jquery[\"default\"])('<ul class=\"list-group\"></ul>'.format(chalid));\n      var chalbutton = void 0;\n\n      if (user_solves.indexOf(chalinfo.id) == -1) {\n        chalbutton = (0, _jquery[\"default\"])(\"<a class='challenge-button cursor-p pb-2' value='{0}'><li class='list-group-item' value='{0}'>{1} - {2} pts</li></a>\".format(chalinfo.id, chalinfo.name, chalinfo.value));\n      } else {\n        chalbutton = (0, _jquery[\"default\"])(\"<a class='solved-challenge challenge-button cursor-p pb-2' value='{0}'><li class='list-group-item text-muted' value='{0}'>{1} - {2} pts <i class='fas fa-check corner-button-check'></i></li></a>\".format(chalinfo.id, chalinfo.name, chalinfo.value));\n      }\n\n      for (var j = 0; j < chalinfo.tags.length; j++) {\n        var tag = \"tag-\" + chalinfo.tags[j].value.replace(/ /g, \"-\");\n        chalwrap.addClass(tag);\n      }\n\n      chalwrap.append(chalbutton);\n      (0, _jquery[\"default\"])(\"#\" + catid).find(\".card-body\").append(chalwrap);\n    }\n\n    (0, _jquery[\"default\"])(\"[data-toggle=collapse]\").on(\"click\", function (e) {\n      var target = (0, _jquery[\"default\"])(this).data(\"target\");\n      (0, _jquery[\"default\"])(target).collapse(\"toggle\");\n      var exp = (0, _jquery[\"default\"])(this).attr(\"data-expanded\");\n\n      if (exp === \"false\") {\n        (0, _jquery[\"default\"])(this).attr(\"data-expanded\", true);\n      } else {\n        (0, _jquery[\"default\"])(this).attr(\"data-expanded\", false);\n      }\n    });\n    (0, _jquery[\"default\"])(\".challenge-button\").click(function (event) {\n      $value = (0, _jquery[\"default\"])(this).attr(\"value\");\n      loadChal($value);\n      getSolves($value);\n    });\n  });\n}\n\nfunction update() {\n  return loadUserSolves() // Load the user's solved challenge ids\n  .then(loadChals) //  Load the full list of challenges\n  .then(markSolves);\n}\n\n(0, _jquery[\"default\"])(function () {\n  update().then(function () {\n    if (window.location.hash.length > 0) {\n      loadChalByName(decodeURIComponent(window.location.hash.substring(1)));\n    }\n  });\n  (0, _jquery[\"default\"])(\"#challenge-input\").keyup(function (event) {\n    if (event.keyCode == 13) {\n      (0, _jquery[\"default\"])(\"#challenge-submit\").click();\n    }\n  });\n  (0, _jquery[\"default\"])(\".nav-tabs a\").click(function (event) {\n    event.preventDefault();\n    (0, _jquery[\"default\"])(this).tab(\"show\");\n  });\n  (0, _jquery[\"default\"])(\"#challenge-window\").on(\"hidden.bs.modal\", function (event) {\n    (0, _jquery[\"default\"])(\".nav-tabs a:first\").tab(\"show\");\n    history.replaceState(\"\", window.document.title, window.location.pathname);\n  });\n  (0, _jquery[\"default\"])(\".challenge-solves\").click(function (event) {\n    getSolves((0, _jquery[\"default\"])(\"#challenge-id\").val());\n  });\n  (0, _jquery[\"default\"])(\"#challenge-window\").on(\"hide.bs.modal\", function (event) {\n    (0, _jquery[\"default\"])(\"#challenge-input\").removeClass(\"wrong\");\n    (0, _jquery[\"default\"])(\"#challenge-input\").removeClass(\"correct\");\n    (0, _jquery[\"default\"])(\"#incorrect-key\").slideUp();\n    (0, _jquery[\"default\"])(\"#correct-key\").slideUp();\n    (0, _jquery[\"default\"])(\"#already-solved\").slideUp();\n    (0, _jquery[\"default\"])(\"#too-fast\").slideUp();\n  });\n});\nsetInterval(update, 300000); // Update every 5 minutes.\n\nvar displayHint = function displayHint(data) {\n  (0, _ezq.ezAlert)({\n    title: \"Hint\",\n    body: data.html,\n    button: \"Got it!\"\n  });\n};\n\nvar displayUnlock = function displayUnlock(id) {\n  (0, _ezq.ezQuery)({\n    title: \"Unlock Hint?\",\n    body: \"Are you sure you want to open this hint?\",\n    success: function success() {\n      var params = {\n        target: id,\n        type: \"hints\"\n      };\n\n      _CTFd[\"default\"].api.post_unlock_list({}, params).then(function (response) {\n        if (response.success) {\n          _CTFd[\"default\"].api.get_hint({\n            hintId: id\n          }).then(function (response) {\n            displayHint(response.data);\n          });\n\n          return;\n        }\n\n        (0, _ezq.ezAlert)({\n          title: \"Error\",\n          body: response.errors.score,\n          button: \"Got it!\"\n        });\n      });\n    }\n  });\n};\n\nvar loadHint = function loadHint(id) {\n  _CTFd[\"default\"].api.get_hint({\n    hintId: id\n  }).then(function (response) {\n    if (response.data.content) {\n      displayHint(response.data);\n      return;\n    }\n\n    displayUnlock(id);\n  });\n};\n\n//# sourceURL=webpack:///./assets/js/pages/challenges.js?");

/***/ }),

/***/ "./assets/js/pages/main.js":
/*!*********************************!*\
  !*** ./assets/js/pages/main.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;
eval("\n\nvar _CTFd = _interopRequireDefault(__webpack_require__(/*! core/CTFd */ \"../CTFd/CTFd/themes/core/assets/js/CTFd.js\"));\n\nvar _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\"));\n\nvar _dayjs = _interopRequireDefault(__webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\"));\n\nvar _advancedFormat = _interopRequireDefault(__webpack_require__(/*! dayjs/plugin/advancedFormat */ \"./node_modules/dayjs/plugin/advancedFormat.js\"));\n\nvar _nunjucks = _interopRequireDefault(__webpack_require__(/*! nunjucks */ \"./node_modules/nunjucks/browser/nunjucks.js\"));\n\nvar _howler = __webpack_require__(/*! howler */ \"./node_modules/howler/dist/howler.js\");\n\nvar _events = _interopRequireDefault(__webpack_require__(/*! core/events */ \"../CTFd/CTFd/themes/core/assets/js/events.js\"));\n\nvar _config = _interopRequireDefault(__webpack_require__(/*! core/config */ \"../CTFd/CTFd/themes/core/assets/js/config.js\"));\n\nvar _styles = _interopRequireDefault(__webpack_require__(/*! core/styles */ \"../CTFd/CTFd/themes/core/assets/js/styles.js\"));\n\nvar _times = _interopRequireDefault(__webpack_require__(/*! core/times */ \"../CTFd/CTFd/themes/core/assets/js/times.js\"));\n\nvar _helpers = _interopRequireDefault(__webpack_require__(/*! core/helpers */ \"../CTFd/CTFd/themes/core/assets/js/helpers.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n_dayjs[\"default\"].extend(_advancedFormat[\"default\"]);\n\n_CTFd[\"default\"].init(window.init);\n\nwindow.CTFd = _CTFd[\"default\"];\nwindow.helpers = _helpers[\"default\"];\nwindow.$ = _jquery[\"default\"];\nwindow.dayjs = _dayjs[\"default\"];\nwindow.nunjucks = _nunjucks[\"default\"];\nwindow.Howl = _howler.Howl;\n(0, _jquery[\"default\"])(function () {\n  (0, _styles[\"default\"])();\n  (0, _times[\"default\"])();\n  (0, _events[\"default\"])(_config[\"default\"].urlRoot);\n});\n\n//# sourceURL=webpack:///./assets/js/pages/main.js?");

/***/ })

/******/ });