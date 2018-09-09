(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-index></app-index>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'apurvaDoors';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/index/index.component */ "./src/app/main/index/index.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _main_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main/index/index.component.css":
/*!************************************************!*\
  !*** ./src/app/main/index/index.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/index/index.component.html":
/*!*************************************************!*\
  !*** ./src/app/main/index/index.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<title>Samira</title>\n<meta charset=\"utf-8\">\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n<meta name=\"description\" content=\"Samira hotel template project\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" type=\"text/css\" href=\"styles/bootstrap-4.1.2/bootstrap.min.css\">\n<link href=\"plugins/font-awesome-4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\" type=\"text/css\">\n<link href=\"plugins/colorbox/colorbox.css\" rel=\"stylesheet\" type=\"text/css\">\n<link rel=\"stylesheet\" type=\"text/css\" href=\"plugins/OwlCarousel2-2.2.1/owl.carousel.css\">\n<link rel=\"stylesheet\" type=\"text/css\" href=\"plugins/OwlCarousel2-2.2.1/owl.theme.default.css\">\n<link rel=\"stylesheet\" type=\"text/css\" href=\"plugins/OwlCarousel2-2.2.1/animate.css\">\n<link rel=\"stylesheet\" type=\"text/css\" href=\"styles/main_styles.css\">\n<link rel=\"stylesheet\" type=\"text/css\" href=\"styles/responsive.css\">\n</head>\n<body>\n\n<div class=\"super_container\">\n\t\n\t<!-- Header -->\n\n\t<header class=\"header\">\n\t\t<div class=\"header_content\">\n\n\t\t\t<!-- Logo -->\n\t\t\t<div class=\"logo_container d-flex flex-column align-items-center justify-content-center\">\n\t\t\t\t<div class=\"logo\">\n\t\t\t\t\t<a href=\"#\" class=\"text-center\">\n\t\t\t\t\t\t<div class=\"logo_subtitle\">hotel</div>\n\t\t\t\t\t\t<div class=\"logo_title\">Samira</div>\n\t\t\t\t\t\t<div class=\"logo_stars\">\n\t\t\t\t\t\t\t<ul class=\"d-flex flex-row align-items-start justfy-content-start\">\n\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t<div class=\"header_inner d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t\t<nav class=\"main_nav\">\n\t\t\t\t\t\t\t\t<ul class=\"d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t\t\t\t<li class=\"active\"><a href=\"index.html\"><div class=\"nav_item d-flex flex-column align-items-center justify-content-center\"><span>home</span></div></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"about.html\"><div class=\"nav_item d-flex flex-column align-items-center justify-content-center\"><span>about us</span></div></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"rooms.html\"><div class=\"nav_item d-flex flex-column align-items-center justify-content-center\"><span>rooms</span></div></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"news.html\"><div class=\"nav_item d-flex flex-column align-items-center justify-content-center\"><span>news</span></div></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"contact.html\"><div class=\"nav_item d-flex flex-column align-items-center justify-content-center\"><span>contact</span></div></a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"button_container header_button ml-auto\"><div class=\"button text-center\"><span>Book Your Stay</span></div></a>\n\t\t\t\t\t\t\t<div class=\"hamburger ml-auto\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></div>\n\t\t\t\t\t\t\t<div class=\"header_review\"><a href=\"#\">Add your review</a></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</header>\n\n\t<!-- Menu -->\n\n\t<div class=\"menu\">\n\t\t<div class=\"background_image\" style=\"background-image:url(images/menu.jpg)\"></div>\n\t\t<div class=\"menu_content d-flex flex-column align-items-center justify-content-center\">\n\t\t\t<ul class=\"menu_nav_list text-center\">\n\t\t\t\t<li><a href=\"index.html\">Home</a></li>\n\t\t\t\t<li><a href=\"about.html\">About us</a></li>\n\t\t\t\t<li><a href=\"rooms.html\">Rooms</a></li>\n\t\t\t\t<li><a href=\"news.html\">News</a></li>\n\t\t\t\t<li><a href=\"contact.html\">Contact</a></li>\n\t\t\t</ul>\n\t\t\t<div class=\"menu_review\"><a href=\"#\">Add your review</a></div>\n\t\t</div>\n\t</div>\n\t\n\t<!-- Home -->\n\n\t<div class=\"home\">\n\t\t\n\t\t<!-- Home Slider -->\n\t\t<div class=\"home_slider_container\">\n\t\t\t<div class=\"owl-carousel owl-theme home_slider\">\n\t\t\t\t\n\t\t\t\t<!-- Slide -->\n\t\t\t\t<div class=\"owl-item\">\n\t\t\t\t\t<!-- Image credit: https://unsplash.com/@santtd -->\n\t\t\t\t\t<div class=\"background_image\" style=\"background-image:url(images/home_slider_1.jpg)\"></div>\n\t\t\t\t\t<div class=\"home_content_container\">\n\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t<div class=\"home_content text-center\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"home_subtitle\">luxury resort</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"home_title\">Amazing Services, Location & Facilities</div>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"button_container home_button\"><div class=\"button text-center\"><span>Book Your Stay</span></div></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Slide -->\n\t\t\t\t<div class=\"owl-item\">\n\t\t\t\t\t<!-- Image credit: https://unsplash.com/@santtd -->\n\t\t\t\t\t<div class=\"background_image\" style=\"background-image:url(images/home_slider_1.jpg)\"></div>\n\t\t\t\t\t<div class=\"home_content_container\">\n\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t<div class=\"home_content text-center\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"home_subtitle\">luxury resort</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"home_title\">Amazing Services, Location & Facilities</div>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"button_container home_button\"><div class=\"button text-center\"><span>Book Your Stay</span></div></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Slide -->\n\t\t\t\t<div class=\"owl-item\">\n\t\t\t\t\t<!-- Image credit: https://unsplash.com/@santtd -->\n\t\t\t\t\t<div class=\"background_image\" style=\"background-image:url(images/home_slider_1.jpg)\"></div>\n\t\t\t\t\t<div class=\"home_content_container\">\n\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t<div class=\"home_content text-center\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"home_subtitle\">luxury resort</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"home_title\">Amazing Services, Location & Facilities</div>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"button_container home_button\"><div class=\"button text-center\"><span>Book Your Stay</span></div></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<!-- Home Slider Dots -->\n\n\t\t\t<div class=\"home_slider_dots\">\n\t\t\t\t<ul id=\"home_slider_custom_dots\" class=\"home_slider_custom_dots\">\n\t\t\t\t\t<li class=\"home_slider_custom_dot active\">01</li>\n\t\t\t\t\t<li class=\"home_slider_custom_dot\">02</li>\n\t\t\t\t\t<li class=\"home_slider_custom_dot\">03</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\n\t<!-- Search Bar -->\n\n\t<div class=\"search_bar\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"search_bar_container\">\n\t\t\t\t\t\t<form action=\"#\" id=\"search_bar_form\" class=\"search_bar_form d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-between clearfix\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<select class=\"search_form_select\">\n\t\t\t\t\t\t\t\t\t<option disabled selected>Select Arrival Date</option>\n\t\t\t\t\t\t\t\t\t<option>07/15/2018</option>\n\t\t\t\t\t\t\t\t\t<option>07/22/2018</option>\n\t\t\t\t\t\t\t\t\t<option>07/29/2018</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<select class=\"search_form_select\">\n\t\t\t\t\t\t\t\t\t<option disabled selected>Select Departure Date</option>\n\t\t\t\t\t\t\t\t\t<option>07/15/2018</option>\n\t\t\t\t\t\t\t\t\t<option>07/22/2018</option>\n\t\t\t\t\t\t\t\t\t<option>07/29/2018</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<select class=\"search_form_select\">\n\t\t\t\t\t\t\t\t\t<option disabled selected>Select Rooms</option>\n\t\t\t\t\t\t\t\t\t<option>1</option>\n\t\t\t\t\t\t\t\t\t<option>2</option>\n\t\t\t\t\t\t\t\t\t<option>3</option>\n\t\t\t\t\t\t\t\t\t<option>4</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div><button class=\"search_bar_button\">Request a Quote</button></div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<div></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!-- Intro -->\n\n\t<div class=\"intro\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row row-lg-eq-height\">\n\n\t\t\t\t<!-- Intro Content -->\n\t\t\t\t<div class=\"col-lg-5 intro_col\">\n\t\t\t\t\t<div class=\"intro_container d-flex flex-column align-items-start justify-content-center magic_up\">\n\t\t\t\t\t\t<div class=\"intro_content\">\n\t\t\t\t\t\t\t<div class=\"section_title_container\">\n\t\t\t\t\t\t\t\t<div class=\"section_subtitle\">luxury resort</div>\n\t\t\t\t\t\t\t\t<div class=\"section_title\"><h2>Relax in our Hotel</h2></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"intro_text\">\n\t\t\t\t\t\t\t\t<p>Praesent fermentum ligula in dui imperdiet, vel tempus nulla ultricies. Phasellus at commodo ligula. Nullam molestie volutpat sapien, a dignissim tortor laoreet quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"intro_link\"><a href=\"rooms.html\">View Rooms</a></div>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"button_container intro_button\"><div class=\"button text-center\"><span>Book Your Stay</span></div></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Intro Image -->\n\t\t\t\t<div class=\"col-lg-7 intro_col\">\n\t\t\t\t\t<div class=\"intro_images magic_up\">\n\t\t\t\t\t\t<!-- Image credit: https://unsplash.com/@yuni_ladyday2 -->\n\t\t\t\t\t\t<div class=\"intro_1 intro_img\"><img src=\"images/intro_1.jpg\" alt=\"\"></div>\n\t\t\t\t\t\t<!-- Image credit: https://unsplash.com/@liliane -->\n\t\t\t\t\t\t<div class=\"intro_2 intro_img\"><img src=\"images/intro_2.jpg\" alt=\"\"></div>\n\t\t\t\t\t\t<!-- Image credit: https://unsplash.com/@brucemars -->\n\t\t\t\t\t\t<div class=\"intro_3 intro_img\"><img src=\"images/intro_3.jpg\" alt=\"\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!-- Big Room -->\n\n\t<div class=\"big_room\">\n\t\t<div class=\"container-fluid\">\n\t\t\t<div class=\"row row-xl-eq-height\">\n\t\t\t\t<div class=\"col-xl-6 order-xl-1 order-2\">\n\t\t\t\t\t<div class=\"big_room_slider_container\">\n\n\t\t\t\t\t\t<!-- Big Room SLider -->\n\t\t\t\t\t\t<div class=\"owl-carousel owl-theme big_room_slider\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- Slide -->\n\t\t\t\t\t\t\t<div class=\"owl-item\">\n\t\t\t\t\t\t\t\t<!-- Image credit: https://unsplash.com/@jbriscoe -->\n\t\t\t\t\t\t\t\t<div class=\"background_image\" style=\"background-image:url(images/img_1.jpg)\"></div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<!-- Slide -->\n\t\t\t\t\t\t\t<div class=\"owl-item\">\n\t\t\t\t\t\t\t\t<!-- Image credit: https://unsplash.com/@jbriscoe -->\n\t\t\t\t\t\t\t\t<div class=\"background_image\" style=\"background-image:url(images/img_1.jpg)\"></div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<!-- Slide -->\n\t\t\t\t\t\t\t<div class=\"owl-item\">\n\t\t\t\t\t\t\t\t<!-- Image credit: https://unsplash.com/@jbriscoe -->\n\t\t\t\t\t\t\t\t<div class=\"background_image\" style=\"background-image:url(images/img_1.jpg)\"></div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"big_room_slider_nav_container d-flex flex-row align-items-start justify-content-start\">\n\t\t\t\t\t\t\t<div class=\"big_room_slider_prev big_room_slider_nav\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></div>\n\t\t\t\t\t\t\t<div class=\"big_room_slider_next big_room_slider_nav\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-xl-6 order-xl-2 order-1\">\n\t\t\t\t\t<div class=\"big_room_content\">\n\t\t\t\t\t\t<div class=\"big_room_content_inner magic_up\">\n\t\t\t\t\t\t\t<div class=\"section_title_container\">\n\t\t\t\t\t\t\t\t<div class=\"section_subtitle\">luxury resort</div>\n\t\t\t\t\t\t\t\t<div class=\"section_title\"><h2>Rooms with private swimming pool</h2></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"big_room_text\">\n\t\t\t\t\t\t\t\t<p>Praesent fermentum ligula in dui imperdiet, vel tempus nulla ultricies. Phasellus at commodo ligula. Nullam molestie volutpat sapien, a dignissim tortor laoreet quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra. Phasellus at commodo ligula. Nullam molestie volutpat sapien, a dignissim tortor  per inceptos himenaeos laoreet quis. Class aptent taciti soci osqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"testimonial\">\n\t\t\t\t\t\t\t\t<div class=\"testimonial_stars\">\n\t\t\t\t\t\t\t\t\t<ul class=\"d-flex flex-row align-items-start justfy-content-start\">\n\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"testimonial_text\">“ Praesent fermentum ligula in dui imperdiet, vel tempus nulla ultricies. Phasellus at commodo ligula. Nullam molestie volutpat sapien, a dignissim tortor laoreet quis.</div>\n\t\t\t\t\t\t\t\t<div class=\"testimonial_author d-flex flex-row align-items-center justify-content-start\">\n\t\t\t\t\t\t\t\t\t<div class=\"testimonial_author_image\"><img src=\"images/testimonial.png\" alt=\"\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"testimonial_author_name\"><a href=\"#\">Michael Smith</a><span>, Client</span></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!-- Room -->\n\n\t<div class=\"rooms\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"section_title_container text-center magic_up\">\n\t\t\t\t\t\t<div class=\"section_subtitle\">luxury resort</div>\n\t\t\t\t\t\t<div class=\"section_title\"><h2>Choose a Room</h2></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row room_row magic_up\">\n\n\t\t\t\t<!-- Room -->\n\t\t\t\t<div class=\"col-lg-4 room_col\">\n\t\t\t\t\t<div class=\"room\">\n\t\t\t\t\t\t<div class=\"room_image\"><img src=\"images/room_1.jpg\" alt=\"https://unsplash.com/@jonathan_percy\"></div>\n\t\t\t\t\t\t<div class=\"room_content text-center\">\n\t\t\t\t\t\t\t<div class=\"room_price\">From $90 / <span>Night</span></div>\n\t\t\t\t\t\t\t<div class=\"room_type\">double</div>\n\t\t\t\t\t\t\t<div class=\"room_title\"><a href=\"rooms.html\">Deluxe Suite</a></div>\n\t\t\t\t\t\t\t<div class=\"room_text\">\n\t\t\t\t\t\t\t\t<p>Praesent fermentum ligula in dui imper diet, vel tempus nulla ultricies. Phasellus at commodo ligula.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"button_container room_button\"><div class=\"button text-center\"><span>Book Now</span></div></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<!-- Room -->\n\t\t\t\t<div class=\"col-lg-4 room_col\">\n\t\t\t\t\t<div class=\"room\">\n\t\t\t\t\t\t<div class=\"room_image\"><img src=\"images/room_2.jpg\" alt=\"https://unsplash.com/@ultralinx\"></div>\n\t\t\t\t\t\t<div class=\"room_content text-center\">\n\t\t\t\t\t\t\t<div class=\"room_price\">From $90 / <span>Night</span></div>\n\t\t\t\t\t\t\t<div class=\"room_type\">single</div>\n\t\t\t\t\t\t\t<div class=\"room_title\"><a href=\"rooms.html\">Luxury Suite</a></div>\n\t\t\t\t\t\t\t<div class=\"room_text\">\n\t\t\t\t\t\t\t\t<p>Praesent fermentum ligula in dui imper diet, vel tempus nulla ultricies. Phasellus at commodo ligula.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"button_container room_button\"><div class=\"button text-center\"><span>Book Now</span></div></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Room -->\n\t\t\t\t<div class=\"col-lg-4 room_col\">\n\t\t\t\t\t<div class=\"room\">\n\t\t\t\t\t\t<div class=\"room_image\"><img src=\"images/room_3.jpg\" alt=\"https://unsplash.com/@rhemakallianpur\"></div>\n\t\t\t\t\t\t<div class=\"room_content text-center\">\n\t\t\t\t\t\t\t<div class=\"room_price\">From $90 / <span>Night</span></div>\n\t\t\t\t\t\t\t<div class=\"room_type\">double</div>\n\t\t\t\t\t\t\t<div class=\"room_title\"><a href=\"rooms.html\">Deluxe Suite</a></div>\n\t\t\t\t\t\t\t<div class=\"room_text\">\n\t\t\t\t\t\t\t\t<p>Praesent fermentum ligula in dui imper diet, vel tempus nulla ultricies. Phasellus at commodo ligula.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"button_container room_button\"><div class=\"button text-center\"><span>Book Now</span></div></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<!-- Gallery -->\n\n\t<div class=\"gallery\">\n\t\t<div class=\"gallery_slider_container\">\n\t\t\t\n\t\t\t<!-- Gallery Slider -->\n\t\t\t<div class=\"owl-carousel owl-theme gallery_slider magic_up\">\n\t\t\t\t<div class=\"owl-item gallery_item\">\n\t\t\t\t\t<div class=\"gallery_select d-flex flex-column align-items-center justify-content-center\"><div>+</div></div>\n\t\t\t\t\t<a class=\"colorbox\" href=\"images/gallery_1.jpg\"><img src=\"images/gallery_1.jpg\" alt=\"\"></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"owl-item gallery_item\">\n\t\t\t\t\t<div class=\"gallery_select d-flex flex-column align-items-center justify-content-center\"><div>+</div></div>\n\t\t\t\t\t<a class=\"colorbox\" href=\"images/gallery_2.jpg\"><img src=\"images/gallery_2.jpg\" alt=\"\"></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"owl-item gallery_item\">\n\t\t\t\t\t<div class=\"gallery_select d-flex flex-column align-items-center justify-content-center\"><div>+</div></div>\n\t\t\t\t\t<a class=\"colorbox\" href=\"images/gallery_3.jpg\"><img src=\"images/gallery_3.jpg\" alt=\"\"></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"owl-item gallery_item\">\n\t\t\t\t\t<div class=\"gallery_select d-flex flex-column align-items-center justify-content-center\"><div>+</div></div>\n\t\t\t\t\t<a class=\"colorbox\" href=\"images/gallery_4.jpg\"><img src=\"images/gallery_4.jpg\" alt=\"\"></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"owl-item gallery_item\">\n\t\t\t\t\t<div class=\"gallery_select d-flex flex-column align-items-center justify-content-center\"><div>+</div></div>\n\t\t\t\t\t<a class=\"colorbox\" href=\"images/gallery_5.jpg\"><img src=\"images/gallery_5.jpg\" alt=\"\"></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<!-- Nav -->\n\t\t<div class=\"gallery_slider_nav_container\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col clearfix\">\n\t\t\t\t\t\t<div class=\"gallery_slider_nav_content d-flex flex-row align-items-start justify-content-start\">\n\t\t\t\t\t\t\t<div class=\"gallery_slider_prev gallery_slider_nav\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></div>\n\t\t\t\t\t\t\t<div class=\"gallery_slider_next gallery_slider_nav\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\t\t</div>\n\n\t</div>\n\n\t<!-- Newsletter -->\n\n\t<div class=\"newsletter\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-5\">\n\t\t\t\t\t<div class=\"newsletter_content\">\n\t\t\t\t\t\t<div class=\"section_title_container\">\n\t\t\t\t\t\t\t<div class=\"section_subtitle\">luxury resort</div>\n\t\t\t\t\t\t\t<div class=\"section_title\"><h2>Our Newsletter</h2></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"newsletter_text\">\n\t\t\t\t\t\t\t<p>Praesent fermentum ligula in dui imperdiet, vel tempus nulla ultricies. Phasellus at commodo ligula. Nullam molestie volutp at sapien.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t<div class=\"newsletter_form_container\">\n\t\t\t\t\t\t<form action=\"#\" id=\"newsletter_form\" class=\"newsletter_form\">\n\t\t\t\t\t\t\t<input type=\"email\" class=\"newsletter_input\" placeholder=\"Your e-mail\" required=\"required\">\n\t\t\t\t\t\t\t<button class=\"newsletter_button\"><span>Subscribe</span></button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"newsletter_border_container\"><div class=\"container\"><div class=\"row border_row\"><div class=\"col\"><div class=\"newsetter_border\"></div></div></div></div></div>\n\t</div>\n\n\t<!-- Footer -->\n\n\t<footer class=\"footer\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<!-- Footer Logo -->\n\t\t\t\t<div class=\"col-lg-3 footer_col\">\n\t\t\t\t\t<div class=\"footer_logo_container\">\n\t\t\t\t\t\t<div class=\"footer_logo\">\n\t\t\t\t\t\t\t<a href=\"#\" class=\"text-center\">\n\t\t\t\t\t\t\t\t<div class=\"footer_logo_subtitle\">hotel</div>\n\t\t\t\t\t\t\t\t<div class=\"footer_logo_title\">Samira</div>\n\t\t\t\t\t\t\t\t<div class=\"footer_logo_stars\">\n\t\t\t\t\t\t\t\t\t<ul class=\"d-flex flex-row align-items-start justfy-content-start\">\n\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t\t<li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"copyright\"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\nCopyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> by <a href=\"https://colorlib.com\" target=\"_blank\">Colorlib</a>\n<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Footer Menu -->\n\t\t\t\t<div class=\"col-lg-5 footer_col\">\n\t\t\t\t\t<div class=\"footer_menu\">\n\t\t\t\t\t\t<ul class=\"d-flex flex-row align-items-start justify-content-start\">\n\t\t\t\t\t\t\t<li><a href=\"index.html\">Home</a></li>\n\t\t\t\t\t\t\t<li><a href=\"about.html\">About us</a></li>\n\t\t\t\t\t\t\t<li><a href=\"rooms.html\">Rooms</a></li>\n\t\t\t\t\t\t\t<li><a href=\"news.html\">News</a></li>\n\t\t\t\t\t\t\t<li><a href=\"contact.html\">Contact</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<div class=\"footer_menu_text\">\n\t\t\t\t\t\t\t<p>Praesent fermentum ligula in dui imperdiet, vel tempus nulla ultricies. Phasellus at commodo ligula.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- Footer Contact -->\n\t\t\t\t<div class=\"col-lg-4 footer_col\">\n\t\t\t\t\t<div class=\"footer_contact clearfix\">\n\t\t\t\t\t\t<div class=\"footer_contact_content float-lg-right\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>Address: <span>481 Creekside Lane Avila CA 93424</span></li>\n\t\t\t\t\t\t\t\t<li>Phone: <span>+53 345 7953 32453</span></li>\n\t\t\t\t\t\t\t\t<li>Email: <span>yourmail@gmail.com</span></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</footer>\n</div>\n\n<script src=\"js/jquery-3.2.1.min.js\"></script>\n<script src=\"styles/bootstrap-4.1.2/popper.js\"></script>\n<script src=\"styles/bootstrap-4.1.2/bootstrap.min.js\"></script>\n<script src=\"plugins/greensock/TweenMax.min.js\"></script>\n<script src=\"plugins/greensock/TimelineMax.min.js\"></script>\n<script src=\"plugins/scrollmagic/ScrollMagic.min.js\"></script>\n<script src=\"plugins/greensock/animation.gsap.min.js\"></script>\n<script src=\"plugins/greensock/ScrollToPlugin.min.js\"></script>\n<script src=\"plugins/colorbox/jquery.colorbox-min.js\"></script>\n<script src=\"plugins/OwlCarousel2-2.2.1/owl.carousel.js\"></script>\n<script src=\"plugins/easing/easing.js\"></script>\n<script src=\"plugins/parallax-js-master/parallax.min.js\"></script>\n<script src=\"js/custom.js\"></script>\n</body>\n</html>"

/***/ }),

/***/ "./src/app/main/index/index.component.ts":
/*!***********************************************!*\
  !*** ./src/app/main/index/index.component.ts ***!
  \***********************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/main/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/main/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\apurvaDoors\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map