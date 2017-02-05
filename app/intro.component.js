"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var IntroComponent = (function () {
    function IntroComponent() {
    }
    IntroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-intro',
            template: "\n    <div class=\"greeting\">\n      My name is Kyle Stockton and I am an aspiring junior developer in the \n\t  Portland, OR area. I specialize in C#, particularly ASP.NET and \n\t  Unity3D, but I'm also familiar with JavaScript, Sass, SQL, HTML, and \n\t  Clojure.<br />\n      This site is brand new, so please check back later for new \n\t  developments.<br />\n      In the meantime, feel free to contact me at \n\t  <a href=\"mailto:kylestockton@mail.com\">kylestockton@mail.com</a>.<br />\n      Thanks for visiting!<br />\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], IntroComponent);
    return IntroComponent;
}());
exports.IntroComponent = IntroComponent;
//# sourceMappingURL=intro.component.js.map