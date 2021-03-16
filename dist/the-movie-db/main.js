(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Андрей\Desktop\the-movie-db\src\main.ts */"zUnb");


/***/ }),

/***/ "0PS2":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-service.service */ "CmMg");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function (a1) { return ["/movie", a1]; };
function MainPageComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ngb-rating", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, item_r7.id))("src", ctx_r6.linkImage + item_r7.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r7.title, "", item_r7.original_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.vote_average);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", item_r7.vote_average);
} }
function MainPageComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainPageComponent_div_11_div_1_Template, 8, 8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.trendDayArray);
} }
function MainPageComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ngb-rating", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, item_r9.id))("src", ctx_r8.linkImage + item_r9.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.vote_average);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", item_r9.vote_average);
} }
function MainPageComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainPageComponent_div_12_div_1_Template, 8, 7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.trendWeekArray);
} }
function MainPageComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, item_r10.id))("src", item_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r10.vote, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.name);
} }
const _c1 = function (a1) { return ["/tv-detail", a1]; };
function MainPageComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, item_r11.id))("src", item_r11.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r11.vote, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.name);
} }
const _c2 = function (a1) { return ["/about-person", a1]; };
function MainPageComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ngb-progressbar", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, item_r12.id))("src", item_r12.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Popularity: ", item_r12.popularity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showValue", true)("value", item_r12.popularity)("max", 90000);
} }
class MainPageComponent {
    constructor(apiLink, http, config) {
        this.apiLink = apiLink;
        this.http = http;
        this.result = [];
        this.personArray = [];
        this.movies = [];
        this.linkImage = 'https://image.tmdb.org/t/p/original/';
        this.nowPlayingArray = [];
        this.tvArray = [];
        this.toogle = true;
        this.trendDayArray = [];
        this.trendWeekArray = [];
        config.max = 10;
        config.readonly = true;
    }
    ngOnInit() {
        this.apiLink.getPopularPerson().subscribe((item) => {
            this.item = item;
            this.result = this.item.results;
            this.result.forEach((element) => {
                this.name = element.name;
                this.popularity = Math.floor(element.popularity * 1000);
                this.movies = element.known_for;
                this.image = element.profile_path;
                this.personId = element.id;
                this.personArray.push({
                    name: this.name,
                    popularity: this.popularity,
                    image: this.linkImage + this.image,
                    movie: this.movies,
                    id: this.personId,
                });
            });
        });
        this.apiLink.getApiNowPlaying().subscribe((item) => {
            this.nowItem = item;
            this.nowPlayingResults = this.nowItem.results;
            this.nowPlayingResults.forEach((element) => {
                this.nowPlayingId = element.id;
                this.nowPlayingTitle = element.title;
                this.nowPlayingImage = element.poster_path;
                this.nowVote = element.vote_average;
                this.nowPlayingArray.push({
                    name: this.nowPlayingTitle,
                    id: this.nowPlayingId,
                    image: this.linkImage + this.nowPlayingImage,
                    vote: this.nowVote,
                });
            });
        });
        this.apiLink.getApiTv().subscribe((item) => {
            this.itemTv = item;
            this.tvResults = this.itemTv.results;
            this.tvResults.forEach((element) => {
                this.tvVote = element.vote_average;
                this.tvName = element.name;
                this.tvImage = element.poster_path;
                this.tvId = element.id;
                this.tvArray.push({
                    name: this.tvName,
                    id: this.tvId,
                    image: this.linkImage + this.tvImage,
                    vote: this.tvVote,
                });
            });
        });
        this.apiLink.getTrendingDay().subscribe((item) => {
            this.trendDayItem = item;
            this.trendDayResults = this.trendDayItem.results;
            this.trendDayResults.forEach((element) => {
                this.trendDayElement = element;
                this.trendDayArray.push(this.trendDayElement);
            });
        });
        this.apiLink.getTrendingWeek().subscribe((item) => {
            this.trendWeekItem = item;
            this.trendWeekResults = this.trendWeekItem.results;
            this.trendWeekResults.forEach((element) => {
                this.trendWeekElement = element;
                this.trendWeekArray.push(this.trendWeekElement);
            });
        });
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbRatingConfig"])); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 31, vars: 5, consts: [[1, "main_block"], [1, "trand"], [1, "title"], [1, "button"], [3, "click"], [1, "movie_trending"], ["class", "movies", 4, "ngIf"], [1, "another_movie"], ["h", ""], [1, "nowPlaying"], [1, "playing"], ["class", "movie", 4, "ngFor", "ngForOf"], [1, "tv"], [1, "most_popular"], [1, "popular_actor"], ["class", "actor", 4, "ngFor", "ngForOf"], [1, "movies"], ["class", "poster", 4, "ngFor", "ngForOf"], [1, "poster"], ["alt", "", 3, "routerLink", "src"], [1, "description"], [1, "vote"], [3, "rate"], [1, "movie"], [1, "fas", "fa-star"], [1, "actor"], [1, "name"], [1, "popularity"], ["type", "warning", 3, "showValue", "value", "max"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "In Trend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_button_click_6_listener() { return ctx.toogle = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_button_click_8_listener() { return ctx.toogle = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MainPageComponent_div_11_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MainPageComponent_div_12_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "now playing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MainPageComponent_div_19_Template, 7, 6, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Popular TV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MainPageComponent_div_24_Template, 7, 6, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Most Popular Actors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, MainPageComponent_div_29_Template, 9, 9, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toogle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.toogle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.nowPlayingArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tvArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.personArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbRating"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbProgressbar"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n.main_block[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  overflow: visible;\n  width: 100%;\n}\n.main_block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Righteous\", cursive;\n  text-transform: uppercase;\n  color: #7c0707;\n}\n.main_block[_ngcontent-%COMP%]   .most_popular[_ngcontent-%COMP%] {\n  width: 90%;\n  text-align: center;\n  border-radius: 10px;\n  box-shadow: 1px 0px 10px #23b29570;\n  padding: 10px;\n  margin: 10px auto;\n}\n.main_block[_ngcontent-%COMP%]   .popular_actor[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  margin-top: 10px;\n}\n.main_block[_ngcontent-%COMP%]   .popular_actor[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%] {\n  border: 1px solid #11b093;\n  box-shadow: 0px 1px 1px 1px #94c7bd;\n  width: 130px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 5px;\n  padding: 5px;\n  color: #11b093;\n  text-align: center;\n  background-color: white;\n}\n.main_block[_ngcontent-%COMP%]   .popular_actor[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  border-radius: 5px;\n}\n.main_block[_ngcontent-%COMP%]   .another_movie[_ngcontent-%COMP%] {\n  margin: 20px auto;\n  display: flex;\n  width: 90%;\n  text-align: center;\n  text-transform: uppercase;\n}\n.main_block[_ngcontent-%COMP%]   .another_movie[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%] {\n  margin: 2px;\n  width: 158px;\n}\n.main_block[_ngcontent-%COMP%]   .another_movie[_ngcontent-%COMP%]   .playing[_ngcontent-%COMP%] {\n  padding: 5px;\n  text-align: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  box-shadow: 1px 0px 6px 1px #489b88;\n  margin: 12px;\n  border-radius: 10px;\n}\n.main_block[_ngcontent-%COMP%]   .another_movie[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  width: 150px;\n}\n.main_block[_ngcontent-%COMP%]   .another_movie[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2px;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.123);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.main_block[_ngcontent-%COMP%]   .another_movie[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 20px;\n  background-color: #489b88;\n  padding: 0 4px;\n  border-radius: 4px;\n  color: white;\n}\n.main_block[_ngcontent-%COMP%]   .another_movie[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: yellow;\n}\n.main_block[_ngcontent-%COMP%]   .another_movie[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  height: 40px;\n  font-size: 14px;\n  color: #11b093;\n}\n.main_block[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.main_block[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 150px;\n  margin: 5px;\n  padding: 5px;\n  background: linear-gradient(#096260d1, #07857cba);\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  border-radius: 10px;\n  font-family: \"Righteous\", cursive;\n  color: #ffffff;\n}\n.main_block[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 auto;\n  width: 90%;\n  display: flex;\n  overflow-x: auto;\n  border-radius: 10px;\n}\n.main_block[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   ngb-rating[_ngcontent-%COMP%] {\n  color: #0f12d9;\n  font-size: 22px;\n}\n.main_block[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%] {\n  margin: 5px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main_block[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: 250px;\n}\n.main_block[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  color: #256354;\n  font-size: 16px;\n  text-align: center;\n  font-family: \"Varela Round\", sans-serif;\n}\n.main_block[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  font-weight: bold;\n  padding: 5px;\n  background: linear-gradient(90deg, #11b093, #ffffff);\n  color: yellow;\n}\n.main_block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1haW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw4RUFBQTtBQUVSO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFBRjtBQUVFO0VBQ0UsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFBSjtBQUdFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQURKO0FBS0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBSEo7QUFLSTtFQUNFLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBSE47QUFLTTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUhSO0FBUUU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQU5KO0FBUUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQU5OO0FBU0k7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFQTjtBQVVJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBUk47QUFXSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVROO0FBV007RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBVFI7QUFXUTtFQUNFLGFBQUE7QUFUVjtBQWFNO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBWFI7QUFnQkU7RUFDRSxrQkFBQTtBQWRKO0FBZ0JJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaURBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUFkTjtBQWtCRTtFQU1FLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXJCSjtBQVdJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFUTjtBQW1CSTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBakJOO0FBb0JJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBbEJOO0FBdUJJO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7QUFyQk47QUF3Qkk7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9EQUFBO0VBQ0EsYUFBQTtBQXRCTjtBQTJCSTtFQUNFLGtCQUFBO0FBekJOIiwiZmlsZSI6Im1haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5tYWluX2Jsb2NrIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBoMyB7XHJcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICM3YzA3MDc7XHJcbiAgfVxyXG5cclxuICAubW9zdF9wb3B1bGFyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAxMHB4ICMyM2IyOTU3MDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuXHJcbiAgfVxyXG5cclxuICAucG9wdWxhcl9hY3RvciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgLmFjdG9yIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzExYjA5MztcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggMXB4IHJnYigxNDgsIDE5OSwgMTg5KTtcclxuICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBjb2xvcjogIzExYjA5MztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hbm90aGVyX21vdmllIHtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgIC5tb3ZpZSB7XHJcbiAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICB3aWR0aDogMTU4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnBsYXlpbmcge1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYm94LXNoYWRvdzogMXB4IDBweCA2cHggMXB4ICM0ODliODg7XHJcbiAgICAgIG1hcmdpbjogMTJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAubW92aWUge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIzKTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIC52b3RlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ODliODg7XHJcbiAgICAgICAgcGFkZGluZzogMCA0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBjb2xvcjogeWVsbG93O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMTFiMDkzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDk2MjYwZDEsICMwNzg1N2NiYSk7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1vdmllcyB7XHJcbiAgICBuZ2ItcmF0aW5nIHtcclxuICAgICAgY29sb3I6ICMwZjEyZDk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgLnBvc3RlciB7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uIHtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGNvbG9yOiAjMjU2MzU0O1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG5cclxuICAgIC52b3RlIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTFiMDkzLCAjZmZmZmZmKTtcclxuICAgICAgY29sb3I6IHllbGxvdztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBoMyB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.scss'],
            }]
    }], function () { return [{ type: _api_service_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbRatingConfig"] }]; }, null); })();


/***/ }),

/***/ "2KVW":
/*!**********************************!*\
  !*** ./src/app/movie.service.ts ***!
  \**********************************/
/*! exports provided: AddMovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovieService", function() { return AddMovieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AddMovieService {
    constructor() {
        this.movies = [];
    }
    addToCart(movie) {
        this.movies.push(movie);
    }
    getItems() {
        return this.movies;
    }
}
AddMovieService.ɵfac = function AddMovieService_Factory(t) { return new (t || AddMovieService)(); };
AddMovieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AddMovieService, factory: AddMovieService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddMovieService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "348/":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-service.service */ "CmMg");
/* harmony import */ var _core_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/filter.service */ "D7wr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_find_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/find.pipe */ "nrKh");
/* harmony import */ var _core_format_date_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/format-date.pipe */ "J0Ar");










function MoviesComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoviesComponent_div_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.filterGenre(item_r2.id); })("click", function MoviesComponent_div_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.filterToggle = !ctx_r5.filterToggle; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
} }
const _c0 = function (a1) { return ["/movie", a1]; };
function MoviesComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "myDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.vote, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, item_r6.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, item_r6.id));
} }
class MoviesComponent {
    constructor(api, filter) {
        this.api = api;
        this.filter = filter;
        this.search = '';
        this.linkImage = 'https://image.tmdb.org/t/p/original/';
        this.movieArray = [];
        this.count = 1;
        this.filterArray = [];
        this.filterToggle = false;
        this.pages = 100;
        this.firstYear = 2020;
        this.secondYear = 2020;
    }
    sortRate(sort) {
        this.filter.sortRate(sort, this.movieArray);
    }
    sortDate(value) {
        this.filter.sortDate(value, this.movieArray);
    }
    filterGenre(id) {
        this.movieArray = this.filterArray;
        this.movieArray = this.movieArray.filter((item) => item.genre === id);
        return this.movieArray;
    }
    filterYear() {
        if (this.firstYear > this.secondYear) {
            this.firstYear = 2020;
            this.secondYear = 2020;
        }
        this.movieArray = this.filterArray;
        this.movieArray = this.filter.findYear(this.firstYear, this.secondYear, this.movieArray);
        return this.movieArray;
    }
    ngOnInit() {
        this.filterArray = this.movieArray;
        for (let i = 1; i < this.pages; i++) {
            this.api.getDiscoverMovies(i).subscribe((item) => {
                this.movieItem = item;
                this.movieResults = this.movieItem.results;
                this.page = 1;
                this.pageSize = 24;
                this.movieResults.forEach((element) => {
                    this.genreId = element.genre_ids;
                    this.element = element;
                    this.id = this.element.id;
                    this.title = this.element.title;
                    this.vote = this.element.vote_average;
                    if (this.element.poster_path !== null) {
                        this.image = this.linkImage + this.element.poster_path;
                    }
                    else {
                        this.image = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAADoCAMAAABVRrFMAAAAflBMVEX///8AAAC0tLREREShoaFQUFBpaWnMzMz39/fz8/P7+/vn5+fw8PCwsLDCwsLY2NhfX1+VlZXX19fj4+O6uro1NTWLi4slJSXJyclxcXEwMDBlZWVAQEDe3t6pqalJSUl5eXmBgYEXFxeHh4dYWFiSkpIrKyseHh4QEBA6OjrMVwouAAAKpklEQVR4nO2d53rrIAyGkzbTGc1omo6kx0mzev83eJqNQAJhg8F5/P1t8MNbYxCSELXaTcvGx+ehXkIdZh/f0xqpp3noDubTbIhzTWehe5Zf/3oI2DB0r9zoXQF7Dd0lV5JHZDt0h9zpBYD1Q3fHpToiWTN0b1zq6zHH4lHCeNyE7otb3V/aQ31lR92+tAdZyu66zfxvoXviWtsr2UfonrhW6yHn/KNGV7Ln0D1xrSZJ9jt4KpHGfLK5Yi/HrR6brBGym1n09bBkrYqsIotGFVlFFo8qsoosHlVkFVk8qshiIetO2u32S8L4ZZnIJuObd3feamBRMVHlIWvIwddnIpp5UVnIvuuIdm1Ni3KQ9RYY2J8+6DalINN44vfk51YGsgEN9qcl0aoEZOgnZkaLn8wcFMIHZPRkikdU1Q5tGD3ZzkxWT7GGsZOp/nlME6Rl5GRdFlh9gTSNnGzLI6sjxkjkZEyw+kZtGjcZPw2gq7SNmyxlk70qbeMm40z5Z6VK26jJmDPjUc9K46jJJnyyutI4ajKbzNGO3PhhyPpy46jJ9BszKCV9PWoym3embGUehqxc39njzo0W69mv0jhqstqeTaa65+Im4ydZPilt4ybjTyHKchY52ePuz9jZzOqZntjJmLn1M6Rp5GRMRwgWk4mdjDXxoxGZ6MmWZrA12jB6stqTkaykfv1arWEAwxzEtVKQGdCoiG4ZyLQDkgoMloOstqTccyM6M6QcZMSI3OvyJspCVuso8aadat+LKg3Zn9rp5607z1vyA7uoTGR/6kzfh6/D957i9VBVMjILVWQVWTyqyCqyeFSRVWTxqCKryCj1VMe7ZxVClpyc2B+mswNuVQRZ71qVTr9VdKwCyARfqJod5U/+yV7EpxC+QR/yTiZF0YubSHyTvUuPmXMOWDmRZzI19RKJTvqRXzLMuZu66rpBXsnwvKlvh93XyCcZFWlAgspsJezv1CMZHULJbIyMd/X6IeU190emSQtYMxyhiHrrS3vWgu+NbEWD4WcijOrc23PMNF9khnx0zSlGUj9Ce/3h1ZM8kcmPVTS2BoP5POZZyA+ZXGsKkbVxLCUZ6I7l+iNjlet8MT8HSDZnTO19kDHLCFoax0pkUFPS2xMZdfZZFn6IkZSa66hf15yTJfxK4SPz0wQhldW1b901WcemtPvKhgxpf1DPZnkj6/Mzf4+yMI6nWPu9xphxS9a3vWHAOHffhB+ymxWUD8I4+yyLbRwT9rWaze6DDB0wBu25uxIqDbxJNXBI9lLPIq5xTK4lFJo7MpujHqJ4xnFCP+ALb+GMLHtpd5ZxrPuEW2gLV2R5yoQztiSKdw8o9UiW78YLUwpVzZS9+eaNzOZwHyadLXGWYSeLjGgnZKaqK0Z9Gsl+DU9Qu+eCjFfpQiujcWx8gmKoOSDj1oPQ6kcPxrBuZK9PfrKfuhMNtGScNUXyP+QmWznhqhuMY9aXDJ+Ql8zh1Qk643jFegJAy0lm9L5ZSGcc/+M9QlwY85G5vVPmH022Nrc+SfD65CJzfdcFaRzzL6+5D+k8ZO6vuqCmKQtz++b1yU6WmMyCLCKMYwvrbX211DKTJZ91H8KN45XFE64x/qxkXV8XK6LGsdVM9ZnkIetzJytrYcdsGceq14LX7DcHWQYnFVuIcdyhfrtIx6+Tu6e4M50MtqP92X+QicwnGLaNRF0smwYVjen1spIxjsvmkhKrVafGD7OHQd6rMsiyed9sJBvHUjB/M2Q5KaewmZmsiPsHpSALmBpTQ9xM1Kuw5hrJtE4kV5KMY2GFGVsmXLzfOExkBV3LChy/96I1aYZEkvaORWY+kO5IqdC364w1ypj7880gy+t9s5DgsbmMk+yput2Wicx0zt6p7vP6aY7bZMtouv9zdGQOvG82us2Bx+wSvQPIrP7iVgdRJSv8Hsyrcby3Tx5BdBveMtl38Rd8XuOZ9V+zd9xCMpk3416jlvTfVtVvP721Zqew/2H+Zx8PGVdcuHcFZBAWY7nr/Qcr1NBsGEI7UZBpZvrlim41a+hyYOIgozzHA9OWfkO7nCMhQx1135y0k39UCmQcZJhzlW26PuO7gjjI1JmuZ+O+RWegKMhUE9g2vIrMkzGQqS6BkfUzVLdzBGSp3KepbcLaUYovLDzZXu5SRgfMcxIbmXy+MLOfYteNi0yOyefIElp3oyKTxpAmYe23la7eVqlmdtnFRCYZ+FTu5GYgLMfJpEGsds/xkEkp73gSYHOouhC632j4S8inC0wmGX1YmGlDubLesb7f3Q1hyaRELNS1dKCddJhpeRu1Yclg0IIKkWh2YWqeyjwKsgPsJpVDPNd46lSf79XOCkoGjT3af4sGSC9Sl4l+BGTgXZARz7o2OUZdKEbhyeA5eW2WoS4xUkFbBicDfh1NPvtRuqR42YQeBScDg9EUTNAdiJL3qdPAZPBogfHnunx/KQyfBiYD0Qlp74L5TjU+ZHkoJ2HJgMtJOuabYOEFTWRtoP4yIJnYM2nKH+OZ+5rT1dA+bgYlA8dcJFMC+XZOouv7SCZkNyQZ+Gyg/Xf2H2J7MDqVAgaRhiHJwP8fnhu9WPdYZiVpHcNI7U9IMtFpATO8rqHmBJkhD5R1DB8xC0kmOkDgV3Ibp13E8UierYEknXBk4HgktBnvrmwsZZo6Vyk/IxgZsEDgBCL8AduMEgWnYKLYMBwZ8DOCACBIWcK8dPiJT/h+G+HIgBkI/gJ9q5hnFbeOpZ8EIxP30wn5lxqeA7bFyMAikcZBBgeSHHTC9jeYdQxcel/hyERLH65FSjgN220jZZXANNSMgwzu91W7d4W0N/xqEY5MHE+Gd8a0jsHuIOA7E78zeIUiVr8Lc4vLsWmwxfvinmVzL3HW186NZ2FeVsk6luZG+1i3I4GJG/wFX62Quj9SFZsDfMjKX9/1AhtPYIPgblPM0QpiVLINkvtce1aBO7RJu5Hs+VliqRdohw29HxEhBVIKoD+HyEzF4qGCjQkX9CVaX6oYiVtIuD+jDkti1vF9UEPnQqfgRG9R4qQNFzT1sveLsISKFB2sp+iNx85rBZYt1A+iCgtyXtLJ4IRx2i/kKdOSR6nYZcx3hQmb8M6DF35VZztm5a3zWgGHhuTjpfOfscMET+pAvax0jAKTPiR2X/URU1ohTxrKHrzblOmw3oKFgOUr2UJWQfc/61j6pO7fcJD1OhX7K3WNKG6F/RNOko4ZCMOhF2BEwjtVpT/qDngarXgYIJ2+Fb5mgx2WPDXoUvFN5/KV3Nv+S7tIvYNlS7Z4dZkShrqYhVXAZ0qOBZLV/2qmchsOTkQ5lbJN0c0iukPssb0yZILWvTVNsnGx99WwpMTLZppOkue9MxTk9i7kPWiC7oS9e6BbBBRiFDbp14YfjWYUHAwhLDS9otja2IGFgm7PsBaeLzdCDJLkFV2u7epVFynKLfPxNL3bgp2Xb8KZSBf3DS9NiYv518+2sX1b0bYVuzZwEOWpBVH4tXJ2yoy2jhwsc82VWa6KB8Uok3dXZ4rFo8S+Rl+MNhUqW/9ugZfk5dXSJmS5inq2V8SumLOIbadpVMIakgtOOfH4NDD5ckb8eyRik67WxE5ba6IEmowxB+PXIEKvgL06k9ftx2Z23JDtF6O0MTSXZvsPxVS0xoeAxLAAAAAASUVORK5CYII=`;
                    }
                    this.overview = this.element.overview;
                    this.release_date = this.element.release_date;
                    if (this.release_date) {
                        this.year = this.release_date.split('-')[0];
                    }
                    this.movieArray.push({
                        title: this.title,
                        id: this.id,
                        vote: this.vote,
                        image: this.image,
                        overview: this.overview,
                        date: this.release_date,
                        year: +this.year,
                        genre: +this.genreId,
                    });
                });
            });
        }
        this.api.getGenre().subscribe((item) => {
            this.itemGenre = item;
            this.genre = this.itemGenre.genres;
            this.genre = this.genre.filter((item) => item.id !== 10770);
        });
    }
}
MoviesComponent.ɵfac = function MoviesComponent_Factory(t) { return new (t || MoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_filter_service__WEBPACK_IMPORTED_MODULE_2__["FilterService"])); };
MoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoviesComponent, selectors: [["app-movies"]], decls: 28, vars: 19, consts: [[1, "main"], [1, "input"], ["type", "text", "placeholder", "find movie", 3, "ngModel", "ngModelChange"], [1, "sort"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1", "id", "btn"], ["ngbDropdownItem", "", 3, "click"], ["type", "number", 3, "value", "ngModel", "ngModelChange"], [3, "click"], [1, "movies"], [1, "genre_btn"], ["class", "genre", 4, "ngFor", "ngForOf"], ["class", "movie", 4, "ngFor", "ngForOf"], [1, "paginate"], [3, "page", "pageSize", "boundaryLinks", "maxSize", "collectionSize", "pageChange"], [1, "genre"], [1, "filter", 3, "click"], [1, "movie"], [1, "img"], ["alt", "", 3, "src"], [1, "vote"], [1, "fas", "fa-star"], [1, "description"], [1, "title"], [1, "date"], [1, "btn"], [3, "routerLink"]], template: function MoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MoviesComponent_Template_input_ngModelChange_2_listener($event) { return ctx.search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoviesComponent_Template_button_click_8_listener() { return ctx.sortRate(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Min Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoviesComponent_Template_button_click_10_listener() { return ctx.sortRate(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Max Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoviesComponent_Template_button_click_12_listener() { return ctx.sortDate(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Min Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoviesComponent_Template_button_click_14_listener() { return ctx.sortDate(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Max Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MoviesComponent_Template_input_ngModelChange_16_listener($event) { return ctx.firstYear = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MoviesComponent_Template_input_ngModelChange_17_listener($event) { return ctx.secondYear = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoviesComponent_Template_button_click_18_listener() { return ctx.filterYear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Find");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MoviesComponent_div_22_Template, 3, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MoviesComponent_div_23_Template, 15, 9, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "find");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ngb-pagination", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function MoviesComponent_Template_ngb_pagination_pageChange_27_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.firstYear)("ngModel", ctx.firstYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.secondYear)("ngModel", ctx.secondYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](24, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 16, ctx.movieArray, ctx.search), (ctx.page - 1) * ctx.pageSize, ctx.page * ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx.page)("pageSize", ctx.pageSize)("boundaryLinks", true)("maxSize", 5)("collectionSize", ctx.movieArray.length);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownItem"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPagination"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"], _core_find_pipe__WEBPACK_IMPORTED_MODULE_7__["FindPipe"], _core_format_date_pipe__WEBPACK_IMPORTED_MODULE_8__["MyDatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Baloo+2&display=swap\");\n.main[_ngcontent-%COMP%]   .genre_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0 5px;\n  border-radius: 5px;\n  outline: red;\n  border: 1px solid #018f70;\n  background-color: #ffffff;\n}\n.main[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n.main[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n.main[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n}\n.main[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #018f70;\n}\n.main[_ngcontent-%COMP%]   .genre_btn[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: space-evenly;\n  display: flex;\n}\n.main[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.main[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 600px;\n  border-radius: 5px;\n  padding: 5px;\n  outline: none;\n  border: 1px solid rgba(0, 0, 0, 0.432);\n  margin-top: 10px;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%] {\n  display: flex;\n  font-family: \"Baloo 2\", cursive;\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%] {\n  margin: 10px;\n  padding: 5px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.397);\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  position: relative;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background-color: white;\n  color: #018f70;\n  border-radius: 20px;\n  width: 60px;\n  font-size: 18px;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  font-size: 18px;\n  color: yellow;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: 200px;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  height: 100px;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .over[_ngcontent-%COMP%] {\n  display: none;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  border-radius: 10px;\n  width: 100px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  background-color: cadetblue;\n  color: #ffffff;\n}\n.main[_ngcontent-%COMP%]   .load[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px 0;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 5px 0;\n  background-color: #1b7e81;\n  color: #ffffff;\n  border-radius: 10px;\n}\n.paginate[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1vdmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw0RUFBQTtBQUdOO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFESjtBQUlFO0VBQ0UsY0FBQTtFQU1BLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBUEo7QUFDSTtFQUNFLGFBQUE7QUFDTjtBQU1JO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFKTjtBQVFFO0VBQ0UseUJBQUE7QUFOSjtBQVNFO0VBQ0UsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQVBKO0FBVUU7RUFDRSxrQkFBQTtBQVJKO0FBVUk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUFSTjtBQVlFO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQVZKO0FBWUk7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDZDQUFBO0FBVk47QUFZTTtFQUNFLGtCQUFBO0FBVlI7QUFZUTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVZWO0FBWVU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFWWjtBQWNRO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBWlY7QUFnQk07RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBZFI7QUFnQlE7RUFDRSxlQUFBO0FBZFY7QUFpQlE7RUFDRSxZQUFBO0FBZlY7QUFrQlE7RUFDRSxhQUFBO0FBaEJWO0FBbUJRO0VBQ0UsV0FBQTtBQWpCVjtBQW1CVTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQWpCWjtBQXdCRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBdEJKO0FBMEJBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBdkJGIiwiZmlsZSI6Im1vdmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhbG9vKzImZGlzcGxheT1zd2FwJyk7XHJcblxyXG4ubWFpbiB7XHJcbiAgLmdlbnJlX2J0biBidXR0b24ge1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBvdXRsaW5lOiByZWQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMSwgMTQzLCAxMTIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4gIC5zb3J0IHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgIH1cclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEsIDE0MywgMTEyKTtcclxuICB9XHJcblxyXG4gIC5nZW5yZV9idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQzMik7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubW92aWVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LWZhbWlseTogJ0JhbG9vIDInLCBjdXJzaXZlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAubW92aWUge1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM5Nyk7XHJcblxyXG4gICAgICAuaW1nIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIC52b3RlIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgIGNvbG9yOiByZ2IoMSwgMTQzLCAxMTIpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxuICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuXHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5vdmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnRuIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxvYWQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNywgMTI2LCAxMjkpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBhZ2luYXRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movies',
                templateUrl: './movies.component.html',
                styleUrls: ['./movies.component.scss'],
            }]
    }], function () { return [{ type: _api_service_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"] }, { type: _core_filter_service__WEBPACK_IMPORTED_MODULE_2__["FilterService"] }]; }, null); })();


/***/ }),

/***/ "4kgT":
/*!**************************************************!*\
  !*** ./src/app/my-movies/my-movies.component.ts ***!
  \**************************************************/
/*! exports provided: MyMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMoviesComponent", function() { return MyMoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie.service */ "2KVW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_format_date_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/format-date.pipe */ "J0Ar");






function MyMoviesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "empty here...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/movie", a1]; };
function MyMoviesComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "myDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyMoviesComponent_div_3_div_1_Template_i_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.remove(item_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, item_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, item_r2.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date add: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, item_r2.time), "");
} }
const _c1 = function (a1) { return ["/tv-detail", a1]; };
function MyMoviesComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "myDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyMoviesComponent_div_3_div_2_Template_i_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.remove(item_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, item_r2.id))("src", item_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, item_r2.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date add: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, item_r2.time), "");
} }
function MyMoviesComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyMoviesComponent_div_3_div_1_Template, 11, 11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyMoviesComponent_div_3_div_2_Template, 11, 11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.type === "movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.type !== "movie");
} }
class MyMoviesComponent {
    constructor(array) {
        this.array = array;
        this.arrayMovie = [];
    }
    remove(id) {
        this.index = this.arrayMovie.findIndex((item) => {
            return item.id === id;
        });
        return this.arrayMovie.splice(this.index, 1);
    }
    ngOnInit() {
        this.arrayMovie = this.array.getItems();
    }
}
MyMoviesComponent.ɵfac = function MyMoviesComponent_Factory(t) { return new (t || MyMoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movie_service__WEBPACK_IMPORTED_MODULE_1__["AddMovieService"])); };
MyMoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyMoviesComponent, selectors: [["app-my-movies"]], decls: 4, vars: 2, consts: [[1, "main"], ["class", "empty", 4, "ngIf"], [1, "movies"], ["class", "movie", 4, "ngFor", "ngForOf"], [1, "empty"], [1, "movie"], ["class", "film", 4, "ngIf"], ["class", "serial", 4, "ngIf"], [1, "film"], ["alt", "", 3, "src", "routerLink"], [1, "name"], [1, "date"], [1, "dateAdd"], [1, "far", "fa-trash-alt", 3, "click"], [1, "serial"], ["alt", "", 3, "routerLink", "src"]], template: function MyMoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyMoviesComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyMoviesComponent_div_3_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.arrayMovie.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayMovie);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], pipes: [_core_format_date_pipe__WEBPACK_IMPORTED_MODULE_4__["MyDatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".main[_ngcontent-%COMP%] {\n  width: 90%;\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n  width: 100%;\n  display: flex;\n}\n.main[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%] {\n  padding: 5px;\n  transition: 1s;\n  text-align: center;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 20px;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .dateAdd[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  font-size: 12px;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.movie[_ngcontent-%COMP%]:hover {\n  border-radius: 5px;\n  color: #ffffff;\n  transition: 1s;\n  background-color: rgba(10, 209, 126, 0.425);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG15LW1vdmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtBQUNKO0FBR0k7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRE47QUFHTTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBRFI7QUFNSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBSk47QUFRSTtFQUNFLFdBQUE7QUFOTjtBQVFNO0VBQ0UsWUFBQTtBQU5SO0FBWUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsMkNBQUE7QUFURiIsImZpbGUiOiJteS1tb3ZpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIC5lbXB0eSB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG5cclxuICAubW92aWVzIHtcclxuICAgIC5tb3ZpZSB7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5kYXRlQWRkIHtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5tb3ZpZSB7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tb3ZpZTpob3ZlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRyYW5zaXRpb246IDFzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDIwOSwgMTI2LCAwLjQyNSk7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyMoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-movies',
                templateUrl: './my-movies.component.html',
                styleUrls: ['./my-movies.component.scss'],
            }]
    }], function () { return [{ type: _movie_service__WEBPACK_IMPORTED_MODULE_1__["AddMovieService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BCn8":
/*!**********************************************!*\
  !*** ./src/app/serials/serials.component.ts ***!
  \**********************************************/
/*! exports provided: SerialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerialsComponent", function() { return SerialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-service.service */ "CmMg");
/* harmony import */ var _core_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/filter.service */ "D7wr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _today_play_today_play_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../today-play/today-play.component */ "tWpH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_find_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/find.pipe */ "nrKh");
/* harmony import */ var _core_format_date_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/format-date.pipe */ "J0Ar");











function SerialsComponent_app_today_play_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-today-play", 18);
} }
function SerialsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SerialsComponent_div_25_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.filterGenre(item_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.name);
} }
const _c0 = function (a1) { return ["/tv-detail", a1]; };
function SerialsComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "myDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.vote, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, item_r6.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, item_r6.id));
} }
class SerialsComponent {
    constructor(api, filter) {
        this.api = api;
        this.filter = filter;
        this.firstYear = 2020;
        this.secondYear = 2020;
        this.search = '';
        this.linkImage = 'https://image.tmdb.org/t/p/original/';
        this.movieArray = [];
        this.count = 1;
        this.page = 1;
        this.pageSize = 24;
        this.filterTootgle = true;
        this.filterArray = [];
        this.pages = 100;
        this.showToday = false;
    }
    sortRate(sort) {
        this.filter.sortRate(sort, this.movieArray);
    }
    sortDate(value) {
        this.filter.sortDate(value, this.movieArray);
    }
    filterGenre(id) {
        this.movieArray = this.filterArray;
        this.movieArray = this.movieArray.filter((item) => item.genre === id);
        return this.movieArray;
    }
    filterYear() {
        if (this.firstYear > this.secondYear) {
            this.firstYear = 2020;
            this.secondYear = 2020;
        }
        this.movieArray = this.filterArray;
        this.movieArray = this.filter.findYear(this.firstYear, this.secondYear, this.movieArray);
        return this.movieArray;
    }
    ngOnInit() {
        this.filterArray = this.movieArray;
        for (let i = 1; i < this.pages; i++) {
            this.api.getDiscoverTv(i).subscribe((item) => {
                this.movieItem = item;
                this.movieResults = this.movieItem.results;
                this.movieResults.forEach((element) => {
                    this.element = element;
                    this.id = this.element.id;
                    this.title = this.element.name;
                    this.vote = this.element.vote_average;
                    this.image = this.linkImage + this.element.poster_path;
                    this.overview = this.element.overview;
                    this.release_date = this.element.first_air_date;
                    this.genreId = element.genre_ids;
                    if (this.release_date) {
                        this.year = this.release_date.split('-')[0];
                    }
                    this.movieArray.push({
                        title: this.title,
                        id: this.id,
                        vote: this.vote,
                        image: this.image,
                        overview: this.overview,
                        date: this.release_date,
                        year: this.year,
                        genre: +this.genreId,
                    });
                });
            });
        }
        this.api.getGenre().subscribe((item) => {
            this.itemGenre = item;
            this.genre = this.itemGenre.genres;
            this.genre = this.genre.filter((item) => item.id !== 10770);
        });
    }
}
SerialsComponent.ɵfac = function SerialsComponent_Factory(t) { return new (t || SerialsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_filter_service__WEBPACK_IMPORTED_MODULE_2__["FilterService"])); };
SerialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SerialsComponent, selectors: [["app-serials"]], decls: 31, vars: 20, consts: [[1, "main"], [1, "input"], ["type", "text", "placeholder", "find movie", 3, "ngModel", "ngModelChange"], ["ngbDropdown", "", 1, "d-inline-block"], [1, "sort"], [1, "onAir", 3, "click"], ["class", "today", 4, "ngIf"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1", "id", "btn"], ["ngbDropdownItem", "", 3, "click"], ["type", "number", 3, "value", "ngModel", "ngModelChange"], [3, "click"], [1, "movies"], [1, "genre_btn"], ["class", "genre", 4, "ngFor", "ngForOf"], ["class", "movie", 4, "ngFor", "ngForOf"], [1, "paginate"], [3, "page", "pageSize", "boundaryLinks", "maxSize", "collectionSize", "pageChange"], [1, "today"], [1, "genre"], [1, "filter", 3, "click"], [1, "movie"], [1, "img"], ["alt", "", 3, "src"], [1, "vote"], [1, "fas", "fa-star"], [1, "description"], [1, "title"], [1, "date"], [1, "btn"], [3, "routerLink"]], template: function SerialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SerialsComponent_Template_input_ngModelChange_2_listener($event) { return ctx.search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SerialsComponent_Template_button_click_5_listener() { return ctx.showToday = !ctx.showToday; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "On Air Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SerialsComponent_app_today_play_7_Template, 1, 0, "app-today-play", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SerialsComponent_Template_button_click_11_listener() { return ctx.sortRate(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Min Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SerialsComponent_Template_button_click_13_listener() { return ctx.sortRate(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Max Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SerialsComponent_Template_button_click_15_listener() { return ctx.sortDate(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Min Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SerialsComponent_Template_button_click_17_listener() { return ctx.sortDate(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Max Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SerialsComponent_Template_input_ngModelChange_19_listener($event) { return ctx.firstYear = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SerialsComponent_Template_input_ngModelChange_20_listener($event) { return ctx.secondYear = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SerialsComponent_Template_button_click_21_listener() { return ctx.filterYear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Find");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SerialsComponent_div_25_Template, 3, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SerialsComponent_div_26_Template, 15, 9, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "find");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ngb-pagination", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function SerialsComponent_Template_ngb_pagination_pageChange_30_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showToday);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.firstYear)("ngModel", ctx.firstYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.secondYear)("ngModel", ctx.secondYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](27, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](28, 17, ctx.movieArray, ctx.search), (ctx.page - 1) * ctx.pageSize, ctx.page * ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx.page)("pageSize", ctx.pageSize)("boundaryLinks", true)("maxSize", 5)("collectionSize", ctx.movieArray.length);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdown"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownItem"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPagination"], _today_play_today_play_component__WEBPACK_IMPORTED_MODULE_6__["TodayPlayComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"], _core_find_pipe__WEBPACK_IMPORTED_MODULE_8__["FindPipe"], _core_format_date_pipe__WEBPACK_IMPORTED_MODULE_9__["MyDatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Baloo+2&display=swap\");\n.main[_ngcontent-%COMP%]   .genre_btn[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n.main[_ngcontent-%COMP%]   .genre_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0 5px;\n  border-radius: 5px;\n  outline: red;\n  border: 1px solid #018f70;\n  background-color: #ffffff;\n}\n.main[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%] {\n  height: 500px;\n  overflow-x: scroll;\n  position: absolute;\n  z-index: 3;\n  right: 0;\n}\n.main[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #018f70;\n}\n.main[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n.main[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n.main[_ngcontent-%COMP%]   .sort[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n}\n.main[_ngcontent-%COMP%]   .onAir[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: rgba(255, 0, 0, 0.452);\n}\n.main[_ngcontent-%COMP%]   .genre_btn[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: space-evenly;\n  display: flex;\n}\n.main[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.main[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 600px;\n  border-radius: 5px;\n  padding: 5px;\n  outline: none;\n  border: 1px solid rgba(0, 0, 0, 0.432);\n  margin-top: 10px;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%] {\n  font-family: \"Baloo 2\", cursive;\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%] {\n  margin: 10px;\n  padding: 5px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.397);\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  position: relative;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 10px;\n  right: 10px;\n  background-color: white;\n  color: #018f70;\n  border-radius: 20px;\n  width: 60px;\n  font-size: 18px;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  font-size: 18px;\n  color: yellow;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: 200px;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  height: 100px;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .over[_ngcontent-%COMP%] {\n  display: none;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.main[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  border-radius: 10px;\n  width: 100px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  background-color: cadetblue;\n  color: #ffffff;\n}\n.main[_ngcontent-%COMP%]   .load[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px 0;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 5px 0;\n  background-color: #1b7e81;\n  color: #ffffff;\n  border-radius: 10px;\n}\n.paginate[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlcmlhbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNEVBQUE7QUFHTjtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFESjtBQUdJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFETjtBQU9FO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQUxKO0FBUUU7RUFDRSx5QkFBQTtBQU5KO0FBU0U7RUFDRSxjQUFBO0VBTUEsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFaSjtBQU1JO0VBQ0UsYUFBQTtBQUpOO0FBV0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQVROO0FBYUU7RUFDRSxjQUFBO0VBQ0Esd0NBQUE7QUFYSjtBQWNFO0VBQ0UsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQVpKO0FBZUU7RUFDRSxrQkFBQTtBQWJKO0FBZUk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7QUFiTjtBQWlCRTtFQUNFLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQWZKO0FBaUJJO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSw2Q0FBQTtBQWZOO0FBaUJNO0VBQ0Usa0JBQUE7QUFmUjtBQWlCUTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFmVjtBQWlCVTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQWZaO0FBbUJRO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBakJWO0FBcUJNO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQW5CUjtBQXFCUTtFQUNFLGVBQUE7QUFuQlY7QUFzQlE7RUFDRSxZQUFBO0FBcEJWO0FBdUJRO0VBQ0UsYUFBQTtBQXJCVjtBQXdCUTtFQUNFLFdBQUE7QUF0QlY7QUF3QlU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUF0Qlo7QUE2QkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQTNCSjtBQStCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQTVCRiIsImZpbGUiOiJzZXJpYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFsb28rMiZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5tYWluIHtcclxuICAuZ2VucmVfYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIG91dGxpbmU6IHJlZDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEsIDE0MywgMTEyKTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgLnRvZGF5IHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxLCAxNDMsIDExMik7XHJcbiAgfVxyXG5cclxuICAuc29ydCB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAub25BaXIge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC40NTIpO1xyXG4gIH1cclxuXHJcbiAgLmdlbnJlX2J0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIC5pbnB1dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDMyKTtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tb3ZpZXMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCYWxvbyAyJywgY3Vyc2l2ZTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgLm1vdmllIHtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zOTcpO1xyXG5cclxuICAgICAgLmltZyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAudm90ZSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDEsIDE0MywgMTEyKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogeWVsbG93O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGF0ZSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAub3ZlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sb2FkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjcsIDEyNiwgMTI5KTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5wYWdpbmF0ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SerialsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-serials',
                templateUrl: './serials.component.html',
                styleUrls: ['./serials.component.scss'],
            }]
    }], function () { return [{ type: _api_service_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"] }, { type: _core_filter_service__WEBPACK_IMPORTED_MODULE_2__["FilterService"] }]; }, null); })();


/***/ }),

/***/ "By/R":
/*!*****************************************!*\
  !*** ./src/app/core/color.directive.ts ***!
  \*****************************************/
/*! exports provided: ColorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorDirective", function() { return ColorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ColorDirective {
    constructor() {
        this.toggle = true;
        this.color = 'green';
    }
    changeColor(color) {
        this.toggle = !this.toggle;
        if (this.toggle) {
            this.color = 'red';
        }
        else {
            this.color = 'red';
        }
    }
}
ColorDirective.ɵfac = function ColorDirective_Factory(t) { return new (t || ColorDirective)(); };
ColorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ColorDirective, selectors: [["", "appColor", ""]], hostVars: 2, hostBindings: function ColorDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.color);
    } }, exportAs: ["appColor"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appColor]',
                exportAs: 'appColor',
            }]
    }], function () { return []; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.color']
        }] }); })();


/***/ }),

/***/ "CmMg":
/*!****************************************!*\
  !*** ./src/app/api-service.service.ts ***!
  \****************************************/
/*! exports provided: ServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesService", function() { return ServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ServicesService {
    constructor(http) {
        this.http = http;
        this.apiKey = '7e22234f7aa6e5fa3b5bb4f22ab56eab';
    }
    getApiPopular() {
        return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`);
    }
    getApiTv() {
        return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=en-US&page=1`);
    }
    getApiNowPlaying() {
        return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=1`);
    }
    getPopularPerson() {
        return this.http.get(`https://api.themoviedb.org/3/person/popular?api_key=${this.apiKey}&language=en-US&page=1`);
    }
    getTrendingDay() {
        return this.http.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiKey}`);
    }
    getTrendingWeek() {
        return this.http.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${this.apiKey}`);
    }
    getMovieDetail(id) {
        return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en-US`);
    }
    getTrailer(id) {
        return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.apiKey}&language=en-US`);
    }
    getTvDetail(id) {
        return this.http.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${this.apiKey}&language=en-US`);
    }
    getDiscoverMovies(count) {
        return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${count}`);
    }
    getGenre() {
        return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=en-US`);
    }
    getDiscoverTv(count) {
        return this.http.get(`https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&page=${count}&timezone=America%2FNew_York&include_null_first_air_dates=false`);
    }
    getAboutPerson(id) {
        return this.http.get(`https://api.themoviedb.org/3/person/${id}?api_key=${this.apiKey}&language=en-US`);
    }
    getTvToday(page) {
        return this.http.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${this.apiKey}&language=en-US&page=${page}`);
    }
}
ServicesService.ɵfac = function ServicesService_Factory(t) { return new (t || ServicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ServicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServicesService, factory: ServicesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "D7wr":
/*!****************************************!*\
  !*** ./src/app/core/filter.service.ts ***!
  \****************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilterService {
    constructor() { }
    sortRate(sort, movieArray) {
        if (sort) {
            return movieArray.sort((a, b) => (a.vote > b.vote ? 1 : -1));
        }
        return movieArray.sort((a, b) => (a.vote > b.vote ? -1 : 1));
    }
    sortDate(value, movieArray) {
        if (value) {
            return movieArray.sort((a, b) => (a.year > b.year ? 1 : -1));
        }
        return movieArray.sort((a, b) => (a.year > b.year ? -1 : 1));
    }
    findYear(first, second, array) {
        return array.filter(item => item.year >= first && item.year <= second);
    }
}
FilterService.ɵfac = function FilterService_Factory(t) { return new (t || FilterService)(); };
FilterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FilterService, factory: FilterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "J0Ar":
/*!******************************************!*\
  !*** ./src/app/core/format-date.pipe.ts ***!
  \******************************************/
/*! exports provided: MyDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDatePipe", function() { return MyDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MyDatePipe {
    transform(value) {
        if (value) {
            value = value.split('-').reverse().join('.');
            return value;
        }
    }
}
MyDatePipe.ɵfac = function MyDatePipe_Factory(t) { return new (t || MyDatePipe)(); };
MyDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "myDate", type: MyDatePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyDatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'myDate',
            }]
    }], null, null); })();


/***/ }),

/***/ "Odk0":
/*!*************************************!*\
  !*** ./src/app/core/gender.pipe.ts ***!
  \*************************************/
/*! exports provided: GenderPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenderPipe", function() { return GenderPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GenderPipe {
    transform(value) {
        return value === 1 ? 'Woman' : 'Men';
    }
}
GenderPipe.ɵfac = function GenderPipe_Factory(t) { return new (t || GenderPipe)(); };
GenderPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "gender", type: GenderPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenderPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'gender'
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "main"], [1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page/main-page.component */ "0PS2");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "n2lM");
/* harmony import */ var _detail_serial_detail_tv_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail-serial/detail-tv.component */ "yHLi");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies/movies.component */ "348/");
/* harmony import */ var _serials_serials_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serials/serials.component */ "BCn8");
/* harmony import */ var _my_movies_my_movies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-movies/my-movies.component */ "4kgT");
/* harmony import */ var _detail_person_detail_person_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detail-person/detail-person.component */ "a1m6");
/* harmony import */ var _today_play_today_play_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./today-play/today-play.component */ "tWpH");
/* harmony import */ var _core_color_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/color.directive */ "By/R");
/* harmony import */ var _core_gender_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/gender.pipe */ "Odk0");
/* harmony import */ var _core_format_date_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/format-date.pipe */ "J0Ar");
/* harmony import */ var _core_find_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/find.pipe */ "nrKh");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! jw-angular-pagination */ "P9+s");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");

























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_23__["YouTubePlayerModule"],
            jw_angular_pagination__WEBPACK_IMPORTED_MODULE_22__["JwPaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
        _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"],
        _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailComponent"],
        _core_color_directive__WEBPACK_IMPORTED_MODULE_10__["ColorDirective"],
        _detail_serial_detail_tv_component__WEBPACK_IMPORTED_MODULE_4__["DetailTvComponent"],
        _movies_movies_component__WEBPACK_IMPORTED_MODULE_5__["MoviesComponent"],
        _serials_serials_component__WEBPACK_IMPORTED_MODULE_6__["SerialsComponent"],
        _core_find_pipe__WEBPACK_IMPORTED_MODULE_13__["FindPipe"],
        _my_movies_my_movies_component__WEBPACK_IMPORTED_MODULE_7__["MyMoviesComponent"],
        _core_format_date_pipe__WEBPACK_IMPORTED_MODULE_12__["MyDatePipe"],
        _detail_person_detail_person_component__WEBPACK_IMPORTED_MODULE_8__["DetailPersonComponent"],
        _core_gender_pipe__WEBPACK_IMPORTED_MODULE_11__["GenderPipe"],
        _today_play_today_play_component__WEBPACK_IMPORTED_MODULE_9__["TodayPlayComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_23__["YouTubePlayerModule"],
        jw_angular_pagination__WEBPACK_IMPORTED_MODULE_22__["JwPaginationModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_18__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
                    _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"],
                    _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailComponent"],
                    _core_color_directive__WEBPACK_IMPORTED_MODULE_10__["ColorDirective"],
                    _detail_serial_detail_tv_component__WEBPACK_IMPORTED_MODULE_4__["DetailTvComponent"],
                    _movies_movies_component__WEBPACK_IMPORTED_MODULE_5__["MoviesComponent"],
                    _serials_serials_component__WEBPACK_IMPORTED_MODULE_6__["SerialsComponent"],
                    _core_find_pipe__WEBPACK_IMPORTED_MODULE_13__["FindPipe"],
                    _my_movies_my_movies_component__WEBPACK_IMPORTED_MODULE_7__["MyMoviesComponent"],
                    _core_format_date_pipe__WEBPACK_IMPORTED_MODULE_12__["MyDatePipe"],
                    _detail_person_detail_person_component__WEBPACK_IMPORTED_MODULE_8__["DetailPersonComponent"],
                    _core_gender_pipe__WEBPACK_IMPORTED_MODULE_11__["GenderPipe"],
                    _today_play_today_play_component__WEBPACK_IMPORTED_MODULE_9__["TodayPlayComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                    _angular_youtube_player__WEBPACK_IMPORTED_MODULE_23__["YouTubePlayerModule"],
                    jw_angular_pagination__WEBPACK_IMPORTED_MODULE_22__["JwPaginationModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "a1m6":
/*!**********************************************************!*\
  !*** ./src/app/detail-person/detail-person.component.ts ***!
  \**********************************************************/
/*! exports provided: DetailPersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPersonComponent", function() { return DetailPersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-service.service */ "CmMg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_format_date_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/format-date.pipe */ "J0Ar");
/* harmony import */ var _core_gender_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/gender.pipe */ "Odk0");







function DetailPersonComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.gender));
} }
function DetailPersonComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r1.gender));
} }
class DetailPersonComponent {
    constructor(http, route) {
        this.http = http;
        this.route = route;
        this.color = 'warn';
        this.mode = 'determinate';
        this.linkImage = 'https://image.tmdb.org/t/p/original/';
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.http.getAboutPerson(params.id).subscribe((item) => {
                this.item = item;
                this.biography = this.item.biography;
                this.name = this.item.name;
                this.birthday = this.item.birthday;
                this.gender = this.item.gender;
                this.job = this.item.known_for_department;
                this.photo = this.linkImage + this.item.profile_path;
                this.popularity = this.item.popularity;
                this.person = {
                    name: this.name,
                    biography: this.biography,
                    birthday: this.birthday,
                    gen: this.gender,
                    job: this.job,
                    photo: this.photo,
                    popularity: this.popularity,
                };
            });
        });
    }
}
DetailPersonComponent.ɵfac = function DetailPersonComponent_Factory(t) { return new (t || DetailPersonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
DetailPersonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailPersonComponent, selectors: [["app-detail-person"]], decls: 18, vars: 10, consts: [[1, "main"], [1, "person"], [1, "image"], ["alt", "", 3, "src"], [1, "description"], [1, "name"], [1, "date"], [1, "job"], [1, "popular"], [1, "biography"], ["class", "gender2", 4, "ngIf"], ["class", "gender1", 4, "ngIf"], [1, "gender2"], [1, "fas", "fa-male"], [1, "gender1"], [1, "fas", "fa-female"]], template: function DetailPersonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "myDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DetailPersonComponent_div_16_Template, 4, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DetailPersonComponent_div_17_Template, 4, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, ctx.birthday));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.job);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.popularity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.biography);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gender === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gender === 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_core_format_date_pipe__WEBPACK_IMPORTED_MODULE_4__["MyDatePipe"], _core_gender_pipe__WEBPACK_IMPORTED_MODULE_5__["GenderPipe"]], styles: [".main[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 30px auto;\n}\n.main[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n.main[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.678);\n  padding: 5px;\n  width: 550px;\n  border: 1px solid;\n}\n.main[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border-bottom: 1px solid;\n}\n.main[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 22px;\n}\n.main[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 450px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRldGFpbC1wZXJzb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUNKO0FBQ0k7RUFDRSwyQkFBQTtFQU1BLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFKTjtBQUZNO0VBQ0Usd0JBQUE7QUFJUjtBQUdNO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBRFI7QUFLSTtFQUNFLFlBQUE7QUFITiIsImZpbGUiOiJkZXRhaWwtcGVyc29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG87XHJcblxyXG4gIC5wZXJzb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NzgpO1xyXG5cclxuICAgICAgZGl2IHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgd2lkdGg6IDU1MHB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuXHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailPersonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-person',
                templateUrl: './detail-person.component.html',
                styleUrls: ['./detail-person.component.scss'],
            }]
    }], function () { return [{ type: _api_service_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-service.service */ "CmMg");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function (a1) { return ["/movie", a1]; };
function HeaderComponent_20_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Watch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Date release");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Vote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ngb-progressbar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, item_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.overview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.release, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showValue", true)("value", item_r1.vote)("max", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HeaderComponent_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderComponent_20_ng_template_0_Template, 20, 11, "ng-template", 9);
} }
const _c1 = function () { return [""]; };
const _c2 = function () { return ["movies"]; };
const _c3 = function () { return ["tv"]; };
const _c4 = function () { return ["my-movie"]; };
class HeaderComponent {
    constructor(apiLink, config) {
        this.apiLink = apiLink;
        this.config = config;
        this.movieArray = [];
        this.linkPoster = 'https://image.tmdb.org/t/p/original/';
        config.showNavigationArrows = false;
        config.wrap = true;
    }
    ngOnInit() {
        this.apiLink.getApiPopular().subscribe((item) => {
            this.itemLinkMovie = item;
            this.resultsMovie = this.itemLinkMovie.results;
            this.resultsMovie.forEach((element) => {
                this.title = element.title;
                this.poster = element.backdrop_path;
                this.overview = element.overview;
                this.releaseDate = element.release_date;
                this.releaseDate = this.releaseDate.split('-').join('.');
                this.popularity = element.popularity * 1000;
                this.voteAverage = element.vote_average;
                this.id = element.id;
                this.backgroundImage = this.linkPoster + this.poster;
                this.image = this.linkPoster + element.poster_path;
                this.movieArray.push({
                    title: this.title,
                    poster: this.linkPoster + this.poster,
                    overview: this.overview,
                    release: this.releaseDate,
                    popularity: this.popularity,
                    vote: this.voteAverage,
                    id: this.id,
                    image: this.image,
                });
            });
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 21, vars: 9, consts: [[1, "main_block"], [1, "title_header"], [1, "top_navigation"], [1, "nav-bar"], [3, "routerLink"], [1, "login"], [1, "far", "fa-grin-hearts"], [1, "carousel"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "imagePoster"], ["alt", "", 3, "src"], [1, "description"], [1, "title_name"], [1, "overview"], [1, "release"], [1, "vote"], ["type", "primary", 3, "showValue", "value", "max"], [1, "picsum-img-wrapper"], ["alt", "", 1, "img", 3, "src"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This is Movie DB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "TV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "My movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ngb-carousel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HeaderComponent_20_Template, 1, 0, undefined, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movieArray);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbar"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Inconsolata&display=swap\");\n.main_block[_ngcontent-%COMP%] {\n  font-family: \"Josefin Sans\", sans-serif;\n  width: 100%;\n  height: 600px;\n}\n.main_block[_ngcontent-%COMP%]   .title_header[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  top: 35%;\n  left: 36%;\n  z-index: -1;\n  font-size: 55px;\n}\n.main_block[_ngcontent-%COMP%]   .top_navigation[_ngcontent-%COMP%] {\n  margin: 10px auto;\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.main_block[_ngcontent-%COMP%]   .top_navigation[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  background: linear-gradient(40deg, rgba(11, 74, 247, 0.301), rgba(202, 8, 66, 0.281));\n  border: none;\n  outline: none;\n  border-radius: 10px;\n  padding: 1px;\n  color: aliceblue;\n  font-family: \"Josefin Sans\", sans-serif;\n  margin: 0 30px;\n}\n.main_block[_ngcontent-%COMP%]   .top_navigation[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 30px;\n  text-decoration: none;\n  color: aliceblue;\n}\n.main_block[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  background-color: blue;\n  padding: 0 10px;\n  color: #ffffff;\n  border-radius: 5px;\n}\n.main_block[_ngcontent-%COMP%]   .nav-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 40%;\n  text-transform: uppercase;\n  padding: 5px;\n  border-radius: 10px;\n  background: linear-gradient(40deg, rgba(11, 74, 247, 0.548), rgba(25, 14, 180, 0.418));\n}\n.main_block[_ngcontent-%COMP%]   .nav-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 0;\n}\n.main_block[_ngcontent-%COMP%]   .nav-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  border-radius: 10px;\n  transition: 1s;\n  padding: 5px;\n}\n.main_block[_ngcontent-%COMP%]   .nav-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.main_block[_ngcontent-%COMP%]   .nav-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(40deg, rgba(247, 11, 153, 0.22), rgba(8, 82, 202, 0.19));\n  color: #aa1212;\n  transition: 1s;\n}\nngb-carousel[_ngcontent-%COMP%] {\n  width: 100%;\n  outline: none;\n  position: relative;\n}\nngb-carousel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 10px;\n}\nngb-carousel[_ngcontent-%COMP%]   ng-template[_ngcontent-%COMP%] {\n  display: flex;\n}\nngb-carousel[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 25%;\n  height: 600px;\n  background: linear-gradient(40deg, #000000ab, #000000ab);\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\nngb-carousel[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .overview[_ngcontent-%COMP%] {\n  color: aliceblue;\n  border: 1px solid rgba(255, 255, 255, 0.507);\n  padding: 5px;\n}\nngb-carousel[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .title_name[_ngcontent-%COMP%] {\n  font-family: \"Varela Round\", sans-serif;\n  font-size: 36px;\n  color: #ffffff;\n  margin-bottom: 20px;\n}\nngb-carousel[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .release[_ngcontent-%COMP%] {\n  color: white;\n  border: 1px solid rgba(255, 255, 255, 0.493);\n  padding: 5px;\n}\nngb-carousel[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%] {\n  color: aliceblue;\n}\nngb-carousel[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #0004ff;\n}\n.img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 600px;\n  position: relative;\n  z-index: -1;\n  left: 0%;\n}\n.imagePoster[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  z-index: 5;\n  right: 50px;\n  top: 100px;\n}\n.imagePoster[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 400px;\n  border-radius: 10px;\n  box-shadow: 1px 1px 10px black;\n}\n.imagePoster[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwwRkFBQTtBQUNBLCtHQUFBO0FBRVI7RUFDRSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBQUY7QUFFRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUo7QUFHRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQURKO0FBR0k7RUFDRSxxRkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGNBQUE7QUFETjtBQUdNO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFEUjtBQU1FO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSko7QUFPRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzRkFBQTtBQUxKO0FBT0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBTE47QUFPTTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFMUjtBQVFNO0VBQ0UsZ0JBQUE7QUFOUjtBQVNNO0VBQ0Usb0ZBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQVBSO0FBYUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBVkY7QUFZRTtFQUNFLFdBQUE7QUFWSjtBQWNFO0VBQ0UsYUFBQTtBQVpKO0FBZUU7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx3REFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFiSjtBQWVJO0VBQ0UsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7QUFiTjtBQWdCSTtFQUNFLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQWROO0FBaUJJO0VBQ0UsWUFBQTtFQUNBLDRDQUFBO0VBQ0EsWUFBQTtBQWZOO0FBa0JJO0VBQ0UsZ0JBQUE7QUFoQk47QUFrQk07RUFDRSxjQUFBO0FBaEJSO0FBc0JBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FBbkJGO0FBc0JBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBaUJBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBbkNGO0FBaUJFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBZko7QUFrQkU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQWhCSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANTAwJmZhbWlseT1JbmNvbnNvbGF0YSZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5tYWluX2Jsb2NrIHtcclxuICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuXHJcbiAgLnRpdGxlX2hlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDM1JTtcclxuICAgIGxlZnQ6IDM2JTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgZm9udC1zaXplOiA1NXB4O1xyXG4gIH1cclxuXHJcbiAgLnRvcF9uYXZpZ2F0aW9uIHtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC5pbnB1dCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgxMSwgNzQsIDI0NywgMC4zMDEpLCByZ2JhKDIwMiwgOCwgNjYsIDAuMjgxKSk7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgcGFkZGluZzogMXB4O1xyXG4gICAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgIG1hcmdpbjogMCAzMHB4O1xyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubG9naW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdi1iYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDExLCA3NCwgMjQ3LCAwLjU0OCksIHJnYmEoMjUsIDE0LCAxODAsIDAuNDE4KSk7XHJcblxyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYigyNDcgMTEgMTUzIC8gMjIlKSwgcmdiKDggODIgMjAyIC8gMTklKSk7XHJcbiAgICAgICAgY29sb3I6ICNhYTEyMTI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm5nYi1jYXJvdXNlbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGEge1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgbmctdGVtcGxhdGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICMwMDAwMDBhYiwgIzAwMDAwMGFiKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgLm92ZXJ2aWV3IHtcclxuICAgICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUwNyk7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGVfbmFtZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnVmFyZWxhIFJvdW5kJywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAucmVsZWFzZSB7XHJcbiAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40OTMpO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnZvdGUge1xyXG4gICAgICBjb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICAgICAgaDMge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMCwgNCwgMjU1KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgbGVmdDogMCU7XHJcbn1cclxuXHJcbi5pbWFnZVBvc3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggYmxhY2s7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA1O1xyXG4gIHJpZ2h0OiA1MHB4O1xyXG4gIHRvcDogMTAwcHg7XHJcblxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
            }]
    }], function () { return [{ type: _api_service_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"] }]; }, null); })();


/***/ }),

/***/ "n2lM":
/*!********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.ts ***!
  \********************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-service.service */ "CmMg");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../movie.service */ "2KVW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _core_format_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/format-date.pipe */ "J0Ar");









function MovieDetailComponent_i_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailComponent_i_8_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.addMovie(ctx_r6.movie); })("click", function MovieDetailComponent_i_8_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.movie.time = ctx_r8.dateTime; })("click", function MovieDetailComponent_i_8_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.heart = !ctx_r9.heart; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MovieDetailComponent_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 25);
} }
function MovieDetailComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r10.name, " ");
} }
function MovieDetailComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Production Company:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.productionCompany, "");
} }
function MovieDetailComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Revenue:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.revenue, "$");
} }
function MovieDetailComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailComponent_div_48_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.toggle = !ctx_r11.toggle; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "youtube-player", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("videoId", ctx_r5.trailerKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 400)("width", 700);
} }
class MovieDetailComponent {
    constructor(route, service, safeVideo, add) {
        this.route = route;
        this.service = service;
        this.safeVideo = safeVideo;
        this.add = add;
        this.linkYouTube = 'https://www.youtube.com/embed/';
        this.linkImage = 'https://image.tmdb.org/t/p/original/';
        this.toggle = true;
        this.heart = true;
        this.dateTime = new Date();
    }
    addMovie(movie) {
        this.add.addToCart(movie);
    }
    ngOnInit() {
        this.array = this.add.getItems();
        this.route.params.subscribe((params) => {
            this.service.getMovieDetail(params.id).subscribe((item) => {
                this.movieItem = item;
                this.id = this.movieItem.id;
                this.title = this.movieItem.title;
                this.image = this.linkImage + this.movieItem.poster_path;
                this.date = this.movieItem.release_date;
                this.backdrop = this.linkImage + this.movieItem.backdrop_path;
                this.overview = this.movieItem.overview;
                this.productionCoutry = this.movieItem.production_countries[0];
                this.productionCoutry = this.productionCoutry.name;
                this.productionCompany = this.movieItem.production_companies[0];
                this.productionCompany = this.productionCoutry.name;
                this.homepage = this.movieItem.homepage;
                this.spoken = this.movieItem.spoken_languages[0].name;
                this.revenue = this.movieItem.revenue;
                this.vote = this.movieItem.vote_average;
                this.genre = this.movieItem.genres;
                this.movie = {
                    type: 'movie',
                    id: this.id,
                    name: this.title,
                    image: this.image,
                    date: this.date,
                    backdrop: this.backdrop,
                    overview: this.overview,
                    productionCoutry: this.productionCoutry,
                    productionCompany: this.productionCompany,
                    homepage: this.homepage,
                    spoken: this.spoken,
                    revenue: this.revenue,
                    vote: this.vote,
                    genre: this.genre,
                };
            });
            this.service.getTrailer(params.id).subscribe((item) => {
                this.itemTrailer = item;
                this.trailerResults = this.itemTrailer.results;
                this.tralerLinkArray = this.trailerResults[0];
                this.trailerKey = this.tralerLinkArray.key;
                this.linkTrailer =
                    this.linkYouTube +
                        this.trailerKey +
                        '?controls=0&iv_load_policy=3&autoplay=1&mute=1&';
                this.videoUrl = this.safeVideo.bypassSecurityTrustResourceUrl(this.linkTrailer);
            });
        });
    }
}
MovieDetailComponent.ɵfac = function MovieDetailComponent_Factory(t) { return new (t || MovieDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movie_service__WEBPACK_IMPORTED_MODULE_4__["AddMovieService"])); };
MovieDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieDetailComponent, selectors: [["app-movie-detail"]], decls: 49, vars: 18, consts: [[1, "main"], [1, "top"], [1, "image"], ["alt", "", 3, "src"], [1, "description"], [1, "circle"], ["class", "fas fa-heart-broken fa-3x", 3, "click", 4, "ngIf"], ["class", "fas fa-heart fa-3x", 4, "ngIf"], [1, "title"], [1, "another"], [1, "date"], [1, "genre"], [4, "ngFor", "ngForOf"], [1, "country"], ["class", "company", 4, "ngIf"], [1, "homepage"], [3, "href"], [1, "spoken"], ["class", "revenue", 4, "ngIf"], [1, "vote"], [1, "overvew"], [3, "click"], [1, "bottom"], ["class", "trailer", 4, "ngIf"], [1, "fas", "fa-heart-broken", "fa-3x", 3, "click"], [1, "fas", "fa-heart", "fa-3x"], [1, "company"], [1, "revenue"], [1, "trailer"], [1, "video"], [1, "fas", "fa-window-close", 3, "click"], ["suggestedQuality", "highres", 3, "videoId", "height", "width"]], template: function MovieDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Movie Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MovieDetailComponent_i_8_Template, 1, 0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MovieDetailComponent_i_9_Template, 1, 0, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Date Release:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "myDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Genres: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MovieDetailComponent_span_20_Template, 2, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Country:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MovieDetailComponent_div_25_Template, 4, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Home Page: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Spoken:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, MovieDetailComponent_div_35_Template, 4, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Vote: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Overview:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailComponent_Template_button_click_44_listener() { return ctx.toggle = !ctx.toggle; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Trailer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, MovieDetailComponent_div_48_Template, 4, 3, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.heart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.heart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 16, ctx.date), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productionCoutry, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productionCompany);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.homepage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.homepage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.spoken, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.revenue > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.vote);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.overview, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.backdrop, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.toggle);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_6__["YouTubePlayer"]], pipes: [_core_format_date_pipe__WEBPACK_IMPORTED_MODULE_7__["MyDatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Quicksand&display=swap\");\n.circle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #7a0202;\n  position: relative;\n  z-index: 2;\n}\niframe[_ngcontent-%COMP%] {\n  display: none;\n}\n.main[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 95%;\n  border-radius: 20px;\n}\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 100%;\n  height: 755px;\n  position: absolute;\n  z-index: 2;\n  background-color: rgba(5, 99, 122, 0.438);\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 450px;\n  border-radius: 10px;\n}\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  width: 660px;\n  height: 100%;\n  border-radius: 10px;\n  background-color: rgba(236, 236, 236, 0.781);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  color: #068a6d;\n  border-bottom: 1px solid;\n}\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .another[_ngcontent-%COMP%] {\n  font-family: \"Quicksand\", sans-serif;\n  width: 80%;\n}\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .another[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  font-weight: 700;\n  color: #2067b8;\n  font-size: 20px;\n}\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .another[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: normal;\n  color: #068a6d;\n  font-size: 16px;\n}\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 4px;\n  width: 100px;\n  text-transform: uppercase;\n  font-family: \"Varela Round\", sans-serif;\n  color: #ffffff;\n  letter-spacing: 2px;\n  outline: none;\n  border: 2px solid #2695f0;\n  border-radius: 10px;\n  background-color: rgba(105, 175, 255, 0.623);\n  cursor: pointer;\n}\n.main[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  height: 755px;\n  position: absolute;\n  width: 100%;\n}\n.main[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 755px;\n}\nh1[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: \"Varela Round\", sans-serif;\n  color: #06138a;\n  text-align: center;\n}\n.trailer[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.603);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.trailer[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%] {\n  padding: 15px;\n  position: relative;\n}\n.trailer[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ffffff;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1vdmllLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw4RUFBQTtBQUlOO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUZKO0FBTUE7RUFDRSxhQUFBO0FBSEY7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBSEY7QUFLRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFISjtBQU1NO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBSlI7QUFRSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFOTjtBQVFNO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtBQU5SO0FBU007RUFDRSxvQ0FBQTtFQUNBLFVBQUE7QUFQUjtBQVNRO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBUFY7QUFTVTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFQWjtBQVlNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHVDQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7QUFWUjtBQWVFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQWJKO0FBZUk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQWJOO0FBa0JBO0VBQ0UseUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWZGO0FBa0JBO0VBY0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBNUJGO0FBUUU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQVFJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBTk4iLCJmaWxlIjoibW92aWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmNpcmNsZSB7XHJcblxyXG4gIGkge1xyXG4gICAgY29sb3I6IHJnYigxMjIsIDIsIDIpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcbn1cclxuXHJcbmlmcmFtZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICAudG9wIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDc1NXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNSwgOTksIDEyMiwgMC40MzgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICAuaW1hZ2Uge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgd2lkdGg6IDY2MHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyMzYsIDIzNiwgMC43ODEpO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjMDY4YTZkO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFub3RoZXIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG5cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGNvbG9yOiByZ2IoMzIsIDEwMywgMTg0KTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgY29sb3I6ICMwNjhhNmQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVmFyZWxhIFJvdW5kJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiKDM4LCAxNDksIDI0MCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwNSwgMTc1LCAyNTUsIDAuNjIzKTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ib3R0b20ge1xyXG4gICAgaGVpZ2h0OiA3NTVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDc1NXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaDEge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMDYxMzhhO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRyYWlsZXIge1xyXG4gIC52aWRlbyB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYwMyk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-detail',
                templateUrl: './movie-detail.component.html',
                styleUrls: ['./movie-detail.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _api_service_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }, { type: _movie_service__WEBPACK_IMPORTED_MODULE_4__["AddMovieService"] }]; }, null); })();


/***/ }),

/***/ "nrKh":
/*!***********************************!*\
  !*** ./src/app/core/find.pipe.ts ***!
  \***********************************/
/*! exports provided: FindPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindPipe", function() { return FindPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FindPipe {
    constructor() {
        this.movieArray = [];
    }
    transform(movies = [], search = '') {
        if (!search.trim()) {
            return movies;
        }
        return movies.filter((item) => {
            return item.title
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase());
        });
    }
}
FindPipe.ɵfac = function FindPipe_Factory(t) { return new (t || FindPipe)(); };
FindPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "find", type: FindPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FindPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'find',
            }]
    }], null, null); })();


/***/ }),

/***/ "tWpH":
/*!****************************************************!*\
  !*** ./src/app/today-play/today-play.component.ts ***!
  \****************************************************/
/*! exports provided: TodayPlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayPlayComponent", function() { return TodayPlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-service.service */ "CmMg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function (a1) { return ["/tv-detail", a1]; };
function TodayPlayComponent_div_0_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 5);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r1.id))("src", item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TodayPlayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodayPlayComponent_div_0_img_1_Template, 1, 4, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function TodayPlayComponent_div_0_Template_a_mousemove_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.mouse = !ctx_r4.mouse; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mouse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.vote);
} }
class TodayPlayComponent {
    constructor(http) {
        this.http = http;
        this.results = [];
        this.movies = [];
        this.mouse = false;
        this.linkImage = 'https://image.tmdb.org/t/p/original/';
        this.count = 10;
    }
    ngOnInit() {
        for (let i = 1; i <= this.count; i++) {
            this.http.getTvToday(i).subscribe((item) => {
                this.item = item;
                this.results = this.item.results;
                this.results.forEach((element) => {
                    this.element = element;
                    this.name = this.element.name;
                    this.id = this.element.id;
                    this.vote = this.element.vote_average;
                    this.image = this.linkImage + this.element.poster_path;
                    this.movies.push({
                        name: this.name,
                        id: this.id,
                        vote: this.vote,
                        image: this.image,
                    });
                });
            });
        }
    }
}
TodayPlayComponent.ɵfac = function TodayPlayComponent_Factory(t) { return new (t || TodayPlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"])); };
TodayPlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodayPlayComponent, selectors: [["app-today-play"]], decls: 1, vars: 1, consts: [["class", "main", 4, "ngFor", "ngForOf"], [1, "main"], ["alt", "", 3, "routerLink", "src", 4, "ngIf"], [3, "mousemove"], [1, "vote"], ["alt", "", 3, "routerLink", "src"]], template: function TodayPlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TodayPlayComponent_div_0_Template, 6, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".main[_ngcontent-%COMP%] {\n  padding: 5px;\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(25, 73, 75, 0.781);\n}\n.main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-decoration: none;\n}\n.main[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%] {\n  color: yellow;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRvZGF5LXBsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFLRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EseUNBQUE7QUFIRjtBQUpFO0VBQ0UsWUFBQTtBQU1KO0FBRUU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFBSjtBQUdFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBREoiLCJmaWxlIjoidG9kYXktcGxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUsIDczLCA3NSwgMC43ODEpO1xyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnZvdGUge1xyXG4gICAgY29sb3I6IHllbGxvdztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodayPlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-today-play',
                templateUrl: './today-play.component.html',
                styleUrls: ['./today-play.component.scss'],
            }]
    }], function () { return [{ type: _api_service_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detail_person_detail_person_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-person/detail-person.component */ "a1m6");
/* harmony import */ var _detail_serial_detail_tv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-serial/detail-tv.component */ "yHLi");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-page/main-page.component */ "0PS2");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "n2lM");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movies/movies.component */ "348/");
/* harmony import */ var _my_movies_my_movies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-movies/my-movies.component */ "4kgT");
/* harmony import */ var _serials_serials_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./serials/serials.component */ "BCn8");











const routes = [
    { path: '', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"] },
    { path: 'movie/:id', component: _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_5__["MovieDetailComponent"] },
    { path: 'tv-detail/:id', component: _detail_serial_detail_tv_component__WEBPACK_IMPORTED_MODULE_3__["DetailTvComponent"] },
    { path: 'movies', component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_6__["MoviesComponent"] },
    { path: 'tv', component: _serials_serials_component__WEBPACK_IMPORTED_MODULE_8__["SerialsComponent"] },
    { path: 'my-movie', component: _my_movies_my_movies_component__WEBPACK_IMPORTED_MODULE_7__["MyMoviesComponent"] },
    { path: 'about-person/:id', component: _detail_person_detail_person_component__WEBPACK_IMPORTED_MODULE_2__["DetailPersonComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yHLi":
/*!******************************************************!*\
  !*** ./src/app/detail-serial/detail-tv.component.ts ***!
  \******************************************************/
/*! exports provided: DetailTvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailTvComponent", function() { return DetailTvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-service.service */ "CmMg");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie.service */ "2KVW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _core_format_date_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/format-date.pipe */ "J0Ar");








function DetailTvComponent_i_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailTvComponent_i_8_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.addMovie(ctx_r10.movie); })("click", function DetailTvComponent_i_8_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.movie.time = ctx_r12.dateTime; })("click", function DetailTvComponent_i_8_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.heart = !ctx_r13.heart; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailTvComponent_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function DetailTvComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r14.name, " ");
} }
function DetailTvComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Country:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.productionCoutry, "");
} }
function DetailTvComponent_img_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.iconCompany, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DetailTvComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next Episode: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.nextEpisodeDate);
} }
function DetailTvComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Revenue:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.revenue, "$");
} }
function DetailTvComponent_button_83_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailTvComponent_button_83_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.isCollapsedSecond = !ctx_r15.isCollapsedSecond; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show Seasons");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailTvComponent_div_84_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date: ", item_r18.date, "");
} }
function DetailTvComponent_div_84_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DetailTvComponent_div_84_div_2_div_9_Template, 2, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r18.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Name: ", item_r18.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Episodes: ", item_r18.episode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r18.date);
} }
function DetailTvComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailTvComponent_div_84_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.isCollapsedSecond = !ctx_r21.isCollapsedSecond; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetailTvComponent_div_84_div_2_Template, 10, 4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.seasonsOut);
} }
class DetailTvComponent {
    constructor(rote, service, add) {
        this.rote = rote;
        this.service = service;
        this.add = add;
        this.linkYouTube = 'https://www.youtube.com/embed/';
        this.linkImage = 'https://image.tmdb.org/t/p/original/';
        this.toggle = true;
        this.seasons = [];
        this.seasonsOut = [];
        this.isCollapsed = true;
        this.isCollapsedSecond = false;
        this.heart = true;
        this.dateTime = new Date();
    }
    addMovie(movie) {
        this.add.addToCart(movie);
    }
    ngOnInit() {
        this.rote.params.subscribe((params) => {
            this.service.getTvDetail(params.id).subscribe((item) => {
                this.tvItem = item;
                this.id = this.tvItem.id;
                this.title = this.tvItem.name;
                this.image = this.linkImage + this.tvItem.poster_path;
                this.date = this.tvItem.first_air_date;
                this.backdrop = this.linkImage + this.tvItem.backdrop_path;
                this.overview = this.tvItem.overview;
                this.productionCoutry = this.tvItem.production_countries[0].name;
                this.productionCompany = this.tvItem.production_companies[0].name;
                this.productionCompanyIcon = this.tvItem.production_companies[0].logo_path;
                this.iconCompany = this.linkImage + this.productionCompanyIcon;
                this.homepage = this.tvItem.homepage;
                this.spoken = this.tvItem.spoken_languages[0].name;
                this.revenue = this.tvItem.revenue;
                this.vote = this.tvItem.vote_average;
                this.runTime = this.tvItem.episode_run_time[0];
                this.lastEpisode = this.tvItem.last_episode_to_air;
                this.airDate = this.lastEpisode.air_date;
                this.lastEpisodeName = this.lastEpisode.name;
                this.lastEpisodeNumber = this.lastEpisode.episode_number;
                this.lastEpisodeSeason = this.lastEpisode.season_number;
                this.lastEpisodeOverview = this.lastEpisode.overview;
                this.numberEpisode = this.tvItem.number_of_episodes;
                this.numberSeasons = this.tvItem.number_of_seasons;
                this.nextEpisode = this.tvItem.next_episode_to_air;
                this.seasons = this.tvItem.seasons;
                this.genre = this.tvItem.genres;
                this.movie = {
                    type: 'serial',
                    id: this.id,
                    name: this.title,
                    image: this.image,
                    date: this.date,
                    backdrop: this.backdrop,
                    overview: this.overview,
                    productionCoutry: this.productionCoutry,
                    productionCompany: this.productionCompany,
                    homepage: this.homepage,
                    spoken: this.spoken,
                    revenue: this.revenue,
                    vote: this.vote,
                    genre: this.genre,
                };
                this.seasons.forEach((item) => {
                    this.seasonsDate = item.air_date;
                    this.seasonsEpisode = item.episode_count;
                    this.seasonsPoster = this.linkImage + item.poster_path;
                    this.seasonsName = item.name;
                    this.seasonsOut.push({
                        name: this.seasonsName,
                        image: this.seasonsPoster,
                        date: this.seasonsDate,
                        episode: this.seasonsEpisode,
                        id: this.seasonsId,
                    });
                });
            });
        });
    }
}
DetailTvComponent.ɵfac = function DetailTvComponent_Factory(t) { return new (t || DetailTvComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movie_service__WEBPACK_IMPORTED_MODULE_3__["AddMovieService"])); };
DetailTvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailTvComponent, selectors: [["app-detail-tv"]], decls: 87, vars: 33, consts: [[1, "main"], [1, "top"], [1, "image"], ["alt", "", 3, "src"], [1, "description"], [1, "circle"], ["class", "fas fa-heart-broken fa-3x", 3, "click", 4, "ngIf"], ["class", "fas fa-heart fa-3x", 4, "ngIf"], [1, "title"], [1, "anoter"], [1, "date"], [1, "genre"], [4, "ngFor", "ngForOf"], ["class", "country", 4, "ngIf"], [1, "company"], ["alt", "", 3, "src", 4, "ngIf"], [1, "homepage"], [3, "href"], [1, "spoken"], [1, "time"], [1, "last"], ["type", "button", "aria-controls", "collapseExample", 1, "btn", "btn-outline-primary", 3, "click"], [3, "ngbCollapse", "ngbCollapseChange"], ["collapse", "ngbCollapse"], [1, "card"], [1, "card-body"], ["class", "next", 4, "ngIf"], [1, "episod"], ["class", "revenue", 4, "ngIf"], [1, "vote"], [1, "overvew"], ["class", "btn btn-outline-primary", 3, "click", 4, "ngIf"], ["class", "seasons", 4, "ngIf"], [1, "bottom"], [1, "fas", "fa-heart-broken", "fa-3x", 3, "click"], [1, "fas", "fa-heart", "fa-3x"], [1, "country"], [1, "next"], [1, "revenue"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "seasons"], [1, "fas", "fa-window-close", 3, "click"], ["class", "cardFilm", 4, "ngFor", "ngForOf"], [1, "cardFilm"], [1, "season"], [1, "imgSeason"], [1, "descriptionSeason"], [1, "nameSeason"], [1, "episodeSeason"], ["class", "dateSeason", 4, "ngIf"], [1, "dateSeason"]], template: function DetailTvComponent_Template(rf, ctx) { if (rf & 1) {
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tv Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DetailTvComponent_i_8_Template, 1, 0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DetailTvComponent_i_9_Template, 1, 0, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Date Release:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "myDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Genres: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DetailTvComponent_span_20_Template, 2, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DetailTvComponent_div_21_Template, 4, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Production Company:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DetailTvComponent_img_26_Template, 1, 1, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Home Page: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Spoken:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Run Time:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Last Episode: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "myDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailTvComponent_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49); return _r5.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Show More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngbCollapseChange", function DetailTvComponent_Template_div_ngbCollapseChange_48_listener($event) { return ctx.isCollapsed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Name Episode: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Season: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, ", Episode: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Overview: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, DetailTvComponent_div_66_Template, 4, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Seasons: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, ". Episodes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, DetailTvComponent_div_74_Template, 4, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Vote: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Overvew:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, DetailTvComponent_button_83_Template, 2, 0, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, DetailTvComponent_div_84_Template, 3, 1, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.heart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.heart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 29, ctx.date), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productionCoutry);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productionCompany, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productionCompanyIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.homepage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.homepage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.spoken, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.runTime, " min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 31, ctx.airDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lastEpisodeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lastEpisodeSeason);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lastEpisodeNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lastEpisodeOverview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nextEpisode === !null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.numberSeasons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.numberEpisode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.revenue > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.vote);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.overview, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.seasonsOut.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCollapsedSecond);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.backdrop, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCollapse"]], pipes: [_core_format_date_pipe__WEBPACK_IMPORTED_MODULE_6__["MyDatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Quicksand&display=swap\");\niframe[_ngcontent-%COMP%] {\n  display: none;\n}\n.main[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 95%;\n  border-radius: 20px;\n}\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 100%;\n  height: 755px;\n  position: absolute;\n  z-index: 2;\n  background-color: rgba(5, 99, 122, 0.438);\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 450px;\n  border-radius: 10px;\n}\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #7a0202;\n  position: relative;\n  z-index: 2;\n}\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  position: relative;\n  width: 600px;\n  height: 100%;\n  border-radius: 10px;\n  padding: 5px;\n  background-color: rgba(236, 236, 236, 0.781);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  color: #068a6d;\n  border-bottom: 1px solid;\n}\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  position: absolute;\n}\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  margin-left: 20px;\n}\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .anoter[_ngcontent-%COMP%] {\n  font-family: \"Quicksand\", sans-serif;\n  width: 80%;\n}\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .anoter[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #2067b8;\n  font-size: 20px;\n}\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .anoter[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: normal;\n  color: #068a6d;\n  font-size: 16px;\n}\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .seasons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.459);\n  padding: 15px;\n  position: absolute;\n  bottom: 0;\n  top: 0;\n  flex-wrap: wrap;\n  width: 780px;\n}\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .seasons[_ngcontent-%COMP%]   .season[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .seasons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ffffff;\n  position: absolute;\n  top: 0;\n  font-size: 18px;\n  right: 0;\n  cursor: pointer;\n}\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .seasons[_ngcontent-%COMP%]   .descriptionSeason[_ngcontent-%COMP%] {\n  background-color: #069c88;\n  font-size: 14px;\n  color: #ffffff;\n}\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .seasons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.main[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  height: 755px;\n  position: absolute;\n  width: 100%;\n}\n.main[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 755px;\n}\nh1[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: \"Varela Round\", sans-serif;\n  color: #068a6d;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRldGFpbC10di5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw4RUFBQTtBQUVSO0VBQ0UsYUFBQTtBQUFGO0FBR0E7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUFGO0FBRUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBQUo7QUFHTTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQURSO0FBTU07RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBSlI7QUFRSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFOTjtBQVFNO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtBQU5SO0FBU007RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBUFI7QUFXUTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQVRWO0FBYU07RUFDRSxvQ0FBQTtFQUNBLFVBQUE7QUFYUjtBQWFRO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVhWO0FBYVU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBWFo7QUFpQkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFmTjtBQWlCTTtFQUNFLGdCQUFBO0FBZlI7QUFrQk07RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBaEJSO0FBbUJNO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWpCUjtBQW9CTTtFQUNFLFlBQUE7QUFsQlI7QUF1QkU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBckJKO0FBdUJJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFyQk47QUEwQkE7RUFDRSx5QkFBQTtFQUNBLHVDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBdkJGIiwiZmlsZSI6ImRldGFpbC10di5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVF1aWNrc2FuZCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbmlmcmFtZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICAudG9wIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDc1NXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNSwgOTksIDEyMiwgMC40MzgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICAuaW1hZ2Uge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNpcmNsZSB7XHJcbiAgICAgIGkge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTIyLCAyLCAyKTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzYsIDIzNiwgMjM2LCAwLjc4MSk7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICMwNjhhNmQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbXBhbnkge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFub3RlciB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcblxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgY29sb3I6IHJnYigzMiwgMTAzLCAxODQpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBjb2xvcjogIzA2OGE2ZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFzb25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1OSk7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgd2lkdGg6IDc4MHB4O1xyXG5cclxuICAgICAgLnNlYXNvbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGVzY3JpcHRpb25TZWFzb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjljODg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJvdHRvbSB7XHJcbiAgICBoZWlnaHQ6IDc1NXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNzU1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5oMSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCcsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICMwNjhhNmQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailTvComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-tv',
                templateUrl: './detail-tv.component.html',
                styleUrls: ['./detail-tv.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _api_service_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"] }, { type: _movie_service__WEBPACK_IMPORTED_MODULE_3__["AddMovieService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map