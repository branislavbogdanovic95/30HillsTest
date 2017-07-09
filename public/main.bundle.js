webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"margin-left:0px!important;\">\n\n  <!-- Main content -->\n  <section class=\"content\">\n\n    <!-- Graph & Statistics -->\n    <div class=\"row\">\n      <!-- Left col -->\n      <div class=\"col-md-12\">\n        <div class=\"box box-success\">\n          <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">Friendship graph</h3>\n            <div class=\"box-tools pull-right\">\n              <button class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i></button>\n              <button class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n            </div>\n          </div>\n\n          <!-- /.box-header -->\n\n          <div class=\"box-body no-padding\">\n            <div class=\"row\">\n              <div class=\"col-md-8 col-sm-12\">\n                <div class=\"pad\" style=\"width:100%;height:450px;\">\n                  <test30hills-graph></test30hills-graph>\n                </div>\n              </div>\n\n              <div class=\"col-md-4 col-sm-12\">\n                <div class=\"pad\">\n\n                  <!-- choosen user -->\n                  <div *ngIf=\"user!=undefined\">\n                    <!-- small box -->\n                    <div class=\"small-box bg-aqua\">\n                      <div class=\"inner\">\n                        <h3>{{user.name.first + \" \" + user.name.last}}</h3>\n                        <p>Gender: {{user.gender}} - Age: {{user.age != -1 ? user.age : 'unknown' }}</p>\n                        <p>Selected user</p>\n                      </div>\n                      <div class=\"icon\">\n                        <i class=\"ion ion-android-person\"></i>\n                      </div>\n                    </div>\n                  </div>\n\n                  <!-- direct friends -->\n                  <div *ngIf=\"user!=undefined\">\n                    <!-- small box -->\n                    <div class=\"small-box bg-green\">\n                      <div class=\"inner\">\n                        <h3>{{user.friends.length}}</h3>\n                        <p>Direct friends of {{user.name.first + \" \" + user.name.last}}</p>\n                      </div>\n                      <div class=\"icon\">\n                        <i class=\"ion ion-android-people\"></i>\n                      </div>\n                    </div>\n                  </div>\n\n                  <!-- friends of friends -->\n                  <div *ngIf=\"friendsOfFriends!=undefined\">\n                    <div class=\"small-box bg-red\">\n                      <div class=\"inner\">\n                        <h3>{{friendsOfFriends.length}}</h3>\n                        <p>Friends of friends</p>\n                      </div>\n                      <div class=\"icon\">\n                        <i class=\"ion ion-android-people\"></i>\n                      </div>\n                    </div>\n                  </div>\n\n                  <!-- suggested friends -->\n                  <div *ngIf=\"suggestedFriends!=undefined\">\n                    <!-- small box -->\n                    <div class=\"small-box bg-yellow\">\n                      <div class=\"inner\">\n                        <h3>{{suggestedFriends.length}}</h3>\n                        <p>Suggested friends</p>\n                      </div>\n                      <div class=\"icon\">\n                        <i class=\"ion ion-person-add\"></i>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n              <!-- /.col -->\n            </div>\n            <!-- /.row -->\n          </div>\n          <!-- /.box-body -->\n        </div>\n        <!-- /.box -->\n\n\n      </div>\n      <!-- /.col -->\n    </div>\n\n    <!-- Direct friends, friends of friends  & suggested friends-->\n\n    <div class=\"row\">\n      <!-- direct friends -->\n      <div *ngIf=\"user!=undefined && mutual != undefined\" class=\"col-md-4 col-xs-12\">\n        <!-- TABLE: LATEST ORDERS -->\n        <div class=\"box box-info\">\n          <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">Direct friends of {{user.name.first + \" \" + user.name.last}}</h3>\n            <div class=\"box-tools pull-right\">\n              <button class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i></button>\n              <button class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n            </div>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body\">\n            <div class=\"table-responsive\">\n              <table class=\"table no-margin\">\n                <thead>\n                  <tr>\n                    <th>User ID</th>\n                    <th>Fullname</th>\n                    <th>Age</th>\n                    <th>Gender</th>\n                    <th>Mutual friends</th>\n                  </tr>\n                </thead>\n                <tbody *ngFor=\"let friend of user.friendsObj\">\n                  <tr>\n                    <td (click)=\"setUser(friend._id)\"><a>{{friend.id}}</a></td>\n                    <td>{{friend.name.first + \" \" + friend.name.last}}</td>\n                    <td><span class=\"label label-success\">{{friend.age != -1 ? friend.age : 'unknown' }}</span></td>\n                    <td>\n                      <div class=\"icon\">\n                        <i class=\"ion ion-{{friend.gender}}\"></i>\n                      </div>\n                    </td>\n                    <td>{{getNumberOfMutual(friend._id)}}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <!-- /.table-responsive -->\n          </div>\n          <!-- /.box-body -->\n        </div>\n        <!-- /.box -->\n      </div>\n\n      <!-- friends of friends -->\n      <div *ngIf=\"friendsOfFriends!=undefined\" class=\"col-md-4 col-xs-12\">\n        <div class=\"box box-info\">\n          <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">Friends of {{user.name.first}}'s friends</h3>\n            <div class=\"box-tools pull-right\">\n              <button class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i></button>\n              <button class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n            </div>\n          </div>\n          <div class=\"box-body\">\n            <div *ngIf=\"friendsOfFriends.length>0\" class=\"table-responsive\">\n              <table class=\"table no-margin\">\n                <thead>\n                  <tr>\n                    <th>User ID</th>\n                    <th>Fullname</th>\n                    <th>Age</th>\n                    <th>Gender</th>\n                  </tr>\n                </thead>\n                <tbody *ngFor=\"let friend of friendsOfFriends\">\n                  <tr>\n                    <td (click)=\"setUser(friend._id)\"><a>{{friend.id}}</a></td>\n                    <td>{{friend.name.first + \" \" + friend.name.last}}</td>\n                    <td><span class=\"label label-success\">{{friend.age != -1 ? friend.age : 'unknown' }}</span></td>\n                    <td>\n                      <div class=\"icon\">\n                        <i class=\"ion ion-{{friend.gender}}\"></i>\n                      </div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <div *ngIf=\"friendsOfFriends.length==0\">\n              No friends of friends!\n            </div>\n            <!-- /.table-responsive -->\n          </div>\n          <!-- /.box-body -->\n        </div>\n        <!-- /.box -->\n      </div>\n\n      <!-- suggested firends -->\n      <div *ngIf=\"suggestedFriends!=undefined\" class=\"col-md-4 col-xs-12\">\n        <!-- TABLE: LATEST ORDERS -->\n        <div class=\"box box-info\">\n          <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">Suggested friends for {{user.name.first + \" \" + user.name.last}}</h3>\n            <div class=\"box-tools pull-right\">\n              <button class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i></button>\n              <button class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n            </div>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body\">\n            <div *ngIf=\"suggestedFriends.length>0\" class=\"table-responsive\">\n              <table class=\"table no-margin\">\n                <thead>\n                  <tr>\n                    <th>User ID</th>\n                    <th>Fullname</th>\n                    <th>Age</th>\n                    <th>Gender</th>\n                  </tr>\n                </thead>\n                <tbody *ngFor=\"let friend of suggestedFriends\">\n                  <tr>\n                    <td (click)=\"setUser(friend._id)\"><a>{{friend.id}}</a></td>\n                    <td>{{friend.name.first + \" \" + friend.name.last}}</td>\n                    <td><span class=\"label label-success\">{{friend.age != -1 ? friend.age : 'unknown' }}</span></td>\n                    <td>\n                      <div class=\"icon\">\n                        <i class=\"ion ion-{{friend.gender}}\"></i>\n                      </div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <div *ngIf=\"suggestedFriends.length==0\">\n              No recommended friendsip!\n            </div>\n            <!-- /.table-responsive -->\n          </div>\n          <!-- /.box-body -->\n        </div>\n        <!-- /.box -->\n      </div>\n\n\n    </div>\n\n  </section>\n  <!-- /.content -->\n</div>\n<!-- /.content-wrapper -->"

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"width:100%;height:100%;\" id=\"outerSvg\">\n    <svg style=\"width:100%; height:100%;\"></svg>\n</div>"

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n  <div class=\"pull-right hidden-xs\">\n    <b>30Hills</b> Test\n  </div>\n  <strong>Copyright &copy; 2017 <a [routerLink]=\"['/']\">Branislav Bogdanović</a>.</strong> All rights reserved.\n</footer>"

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "<test30hills-topnav></test30hills-topnav>\n\n<test30hills-content></test30hills-content>\n\n<test30hills-footer></test30hills-footer>"

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n  <!-- Logo -->\n  <a [routerLink]=\"['/main']\" class=\"logo\"><b>Test</b></a>\n  <!-- Header Navbar: style can be found in header.less -->\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\">\n    <!-- Sidebar toggle button-->\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\n      <span class=\"sr-only\">Toggle navigation</span>\n    </a>\n    <!-- Navbar Right Menu -->\n    <div class=\"navbar-custom-menu\">\n      <ul class=\"nav navbar-nav\">\n      </ul>\n    </div>\n  </nav>\n</header>\n\n"

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(84);


/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__social_service__ = __webpack_require__(200);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__social_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocialService = (function () {
    function SocialService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.selectedUserId = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    SocialService.prototype.getRelationshipGraph = function () {
        return this.http.get('/api/social/make_graph').map(function (res) { return res.json(); });
    };
    SocialService.prototype.profileInfo = function (userId) {
        return this.http.post("/api/social/profile/" + userId, this.headers).map(function (res) { return res.json(); });
    };
    SocialService.prototype.setChoosenUser = function (userId) {
        this.selectedUserId.next(userId);
    };
    SocialService.prototype.getChoosenUser = function () {
        return this.selectedUserId.asObservable();
    };
    SocialService.prototype.getSuggestedFriends = function (userId) {
        return this.http.post("/api/social/suggested/" + userId, this.headers).map(function (res) { return res.json(); });
    };
    SocialService.prototype.getFriendsOfMyFriends = function (userId) {
        return this.http.get("/api/social/friends_of_my_friends/" + userId).map(function (res) { return res.json(); });
    };
    SocialService.prototype.getNumberOfMutualFriends = function (userId, friendId) {
        return this.http.post("/api/social/mutual/" + userId + "/" + friendId, this.headers).map(function (res) { return res.json(); });
    };
    return SocialService;
}());
SocialService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], SocialService);

var _a;
//# sourceMappingURL=social.service.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_main_component__ = __webpack_require__(95);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__main_main_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content_content_component__ = __webpack_require__(92);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__content_content_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topnav_topnav_component__ = __webpack_require__(96);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__topnav_topnav_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__ = __webpack_require__(94);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 83;


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(100);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services__ = __webpack_require__(199);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentComponent = (function () {
    function ContentComponent(socialService) {
        this.socialService = socialService;
    }
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.subscription = this.socialService.getChoosenUser().subscribe(function (userId) {
            _this.socialService.profileInfo(userId).subscribe(function (user) {
                _this.user = user;
            });
            _this.socialService.getFriendsOfMyFriends(userId).subscribe(function (people) {
                _this.friendsOfFriends = people.frendsOfMyFriendsWhoAreNotMyFriends;
            });
            _this.socialService.getSuggestedFriends(userId).subscribe(function (suggested) {
                _this.suggestedFriends = suggested.friendsOfMyFriendsWhoAreNotMyFriends;
                _this.mutual = suggested.mutual;
            });
        });
    };
    ContentComponent.prototype.setUser = function (userId) {
        this.socialService.setChoosenUser(userId);
    };
    ContentComponent.prototype.getNumberOfMutual = function (friendId) {
        return this.mutual.find(function (x) { return x.friend.toString() == friendId.toString(); }) != undefined ? this.mutual.find(function (x) { return x.friend.toString() == friendId.toString(); }).number : 0;
    };
    ContentComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != undefined)
            this.subscription.unsubscribe();
    };
    return ContentComponent;
}());
ContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'test30hills-content',
        template: __webpack_require__(160),
        styles: [__webpack_require__(154)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services__["a" /* SocialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services__["a" /* SocialService */]) === "function" && _a || Object])
], ContentComponent);

var _a;
//# sourceMappingURL=content.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services__ = __webpack_require__(199);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GraphComponent = (function () {
    function GraphComponent(socialService) {
        var _this = this;
        this.socialService = socialService;
        this.subscription = this.socialService.getRelationshipGraph().subscribe(function (data) {
            _this.graphData = data.data;
            _this.names = data.names;
            _this.socialService.setChoosenUser(_this.names[19].id);
            var height = document.getElementById('outerSvg').offsetHeight;
            var width = document.getElementById('outerSvg').offsetWidth;
            _this.initGraph(width, height);
        });
    }
    GraphComponent.prototype.ngOnInit = function () { };
    GraphComponent.prototype.initGraph = function (width, height) {
        if (this.graphData != undefined) {
            this.svg = d3.select("svg");
            this.color = d3.scaleOrdinal(d3.schemeCategory20);
            this.simulation = d3.forceSimulation()
                .force("link", d3.forceLink().id(function (d) { return d.id; }))
                .force("charge", d3.forceManyBody())
                .force("center", d3.forceCenter(width / 2, height / 2));
            this.render(this.graphData);
        }
    };
    GraphComponent.prototype.ticked = function () {
        this.link
            .attr("x1", function (d) { return d.source.x; })
            .attr("y1", function (d) { return d.source.y; })
            .attr("x2", function (d) { return d.target.x; })
            .attr("y2", function (d) { return d.target.y; });
        this.node
            .attr("cx", function (d) { return d.x; })
            .attr("cy", function (d) { return d.y; });
    };
    GraphComponent.prototype.render = function (graph) {
        var _this = this;
        var self = this;
        this.link = this.svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(graph.links)
            .enter().append("line")
            .attr("stroke-width", function (d) { return 2; /*Math.sqrt(d.value);*/ });
        this.node = this.svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(graph.nodes)
            .enter().append("circle")
            .attr("r", 5 * 2)
            .attr("fill", function (d) { return _this.color(d.group); })
            .call(d3.drag()
            .on("start", function (d) { return _this.dragstarted(d); })
            .on("drag", function (d) { return _this.dragged(d); })
            .on("end", function (d) { return _this.dragended(d); }));
        this.text = this.svg.selectAll('.myText').data(graph.nodes)
            .enter().append("text")
            .attr("dx", function (d) {
            return d.x;
        })
            .attr("dy", function (d) {
            return d.y;
        })
            .text(function (d) {
            return self.names.find(function (x) { return x.id.toString() == d.id.toString(); }).fullname.split('.')[0];
        })
            .style("text-anchor", "middle")
            .style("fill", "#555")
            .style("font-family", "Arial")
            .style("font-size", 12)
            .call(d3.drag()
            .on("start", function (d) { return _this.dragstarted(d); })
            .on("drag", function (d) { return _this.dragged(d); })
            .on("end", function (d) { return _this.dragended(d); }));
        this.node.append("title")
            .text(function (d) {
            return self.names.find(function (x) { return x.id.toString() == d.id.toString(); }).fullname;
        });
        this.node.on("click", function (d) { _this.selected(d); });
        this.simulation
            .nodes(graph.nodes)
            .on("tick", function () { return _this.ticked(); });
        this.simulation.force("link")
            .links(graph.links);
    };
    GraphComponent.prototype.selected = function (user) {
        this.socialService.setChoosenUser(user.id);
    };
    GraphComponent.prototype.dragged = function (d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    };
    GraphComponent.prototype.dragended = function (d) {
        if (!d3.event.active)
            this.simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    };
    GraphComponent.prototype.dragstarted = function (d) {
        if (!d3.event.active)
            this.simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    };
    GraphComponent.prototype.ngOnDestroy = function () {
        if (this.subscription != undefined)
            this.subscription.unsubscribe();
    };
    return GraphComponent;
}());
GraphComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'test30hills-graph',
        template: __webpack_require__(161),
        styles: [__webpack_require__(155)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services__["a" /* SocialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services__["a" /* SocialService */]) === "function" && _a || Object])
], GraphComponent);

var _a;
//# sourceMappingURL=graph.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'test30hills-footer',
        template: __webpack_require__(162),
        styles: [__webpack_require__(156)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'test30hills-main',
        template: __webpack_require__(163),
        styles: [__webpack_require__(157)]
    }),
    __metadata("design:paramtypes", [])
], MainComponent);

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopnavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopnavComponent = (function () {
    function TopnavComponent() {
    }
    TopnavComponent.prototype.ngOnInit = function () {
    };
    return TopnavComponent;
}());
TopnavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'test30hills-topnav',
        template: __webpack_require__(164),
        styles: [__webpack_require__(158)]
    }),
    __metadata("design:paramtypes", [])
], TopnavComponent);

//# sourceMappingURL=topnav.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'test30hills-root',
        template: __webpack_require__(165),
        styles: [__webpack_require__(159)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_app_routes__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_components__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_content_graph_graph_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_services__ = __webpack_require__(199);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_components__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_components__["b" /* TopnavComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_components__["c" /* ContentComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_components__["d" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_content_graph_graph_component__["a" /* GraphComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_app_app_routes__["a" /* ROUTING */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8_app_services__["a" /* SocialService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_components__ = __webpack_require__(58);
/* unused harmony export ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTING; });


var ROUTES = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_1_app_components__["a" /* MainComponent */] },
    { path: '**', redirectTo: 'main', pathMatch: 'full' }
];
var ROUTING = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(ROUTES, { useHash: true });
//# sourceMappingURL=app.routes.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.bundle.js.map