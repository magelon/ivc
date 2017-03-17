/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './arts';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/navigation/nav-params';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from 'ionic-angular/components/toolbar/toolbar';
import * as import13 from 'ionic-angular/components/navbar/navbar';
import * as import14 from 'ionic-angular/components/button/button';
import * as import15 from 'ionic-angular/components/menu/menu-toggle';
import * as import16 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import17 from '@angular/core/src/linker/query_list';
import * as import18 from 'ionic-angular/components/icon/icon';
import * as import19 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import20 from 'ionic-angular/components/slides/slides';
import * as import21 from 'ionic-angular/config/config';
import * as import22 from '@angular/core/src/linker/element_ref';
import * as import23 from 'ionic-angular/navigation/view-controller';
import * as import24 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import25 from 'ionic-angular/components/app/app';
import * as import26 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import27 from 'ionic-angular/components/menu/menu-controller';
import * as import28 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import29 from '../../node_modules/ionic-angular/components/slides/slides.ngfactory';
import * as import30 from '@angular/core/src/security';
var renderType_Arts_Host = null;
var _View_Arts_Host0 = (function (_super) {
    __extends(_View_Arts_Host0, _super);
    function _View_Arts_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Arts_Host0, renderType_Arts_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Arts_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-arts', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Arts0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Arts_0_4 = new import3.Arts(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.NavParams));
        this._appEl_0.initComponent(this._Arts_0_4, [], compView_0);
        compView_0.create(this._Arts_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Arts_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.Arts) && (0 === requestNodeIndex))) {
            return this._Arts_0_4;
        }
        return notFoundResult;
    };
    return _View_Arts_Host0;
}(import1.AppView));
function viewFactory_Arts_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Arts_Host === null)) {
        (renderType_Arts_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_Arts_Host0(viewUtils, parentInjector, declarationEl);
}
export var ArtsNgFactory = new import11.ComponentFactory('page-arts', viewFactory_Arts_Host0, import3.Arts);
var styles_Arts = [];
var renderType_Arts = null;
var _View_Arts0 = (function (_super) {
    __extends(_View_Arts0, _super);
    function _View_Arts0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Arts0, renderType_Arts, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Arts0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_1_3 = new import12.Header(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_1), this.renderer, this.parentInjector.get(import23.ViewController, null));
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = this.renderer.createElement(this._el_1, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'toolbar');
        this._appEl_3 = new import2.AppElement(3, 1, this, this._el_3);
        var compView_3 = import24.viewFactory_Navbar0(this.viewUtils, this.injector(3), this._appEl_3);
        this._Navbar_3_4 = new import13.Navbar(this.parentInjector.get(import25.App), this.parentInjector.get(import23.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_3), this.renderer);
        this._appEl_3.initComponent(this._Navbar_3_4, [], compView_3);
        this._text_4 = this.renderer.createText(null, '\n        ', null);
        this._el_5 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_5, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_5, 'menuToggle', '');
        this._appEl_5 = new import2.AppElement(5, 3, this, this._el_5);
        var compView_5 = import26.viewFactory_Button0(this.viewUtils, this.injector(5), this._appEl_5);
        this._Button_5_4 = new import14.Button('', '', this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_5), this.renderer);
        this._MenuToggle_5_5 = new import15.MenuToggle(this.parentInjector.get(import27.MenuController), new import22.ElementRef(this._el_5), this.parentInjector.get(import23.ViewController, null), this._Navbar_3_4);
        this._ToolbarItem_5_6 = new import16.ToolbarItem(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_5), this.renderer, this.parentInjector.get(import12.Toolbar, null), this._Navbar_3_4);
        this._query_Button_5_0 = new import17.QueryList();
        this._appEl_5.initComponent(this._Button_5_4, [], compView_5);
        this._text_6 = this.renderer.createText(null, '\n            ', null);
        this._el_7 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_7, 'name', 'menu');
        this.renderer.setElementAttribute(this._el_7, 'role', 'img');
        this._Icon_7_3 = new import18.Icon(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_7), this.renderer);
        this._text_8 = this.renderer.createText(null, '\n        ', null);
        compView_5.create(this._Button_5_4, [[].concat([
                this._text_6,
                this._el_7,
                this._text_8
            ])], null);
        this._text_9 = this.renderer.createText(null, '\n        ', null);
        this._el_10 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_10 = new import2.AppElement(10, 3, this, this._el_10);
        var compView_10 = import28.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(10), this._appEl_10);
        this._ToolbarTitle_10_4 = new import19.ToolbarTitle(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_10), this.renderer, this.parentInjector.get(import12.Toolbar, null), this._Navbar_3_4);
        this._appEl_10.initComponent(this._ToolbarTitle_10_4, [], compView_10);
        this._text_11 = this.renderer.createText(null, 'Arts', null);
        compView_10.create(this._ToolbarTitle_10_4, [[].concat([this._text_11])], null);
        this._text_12 = this.renderer.createText(null, '\n    ', null);
        compView_3.create(this._Navbar_3_4, [
            [].concat([this._el_5]),
            [],
            [],
            [].concat([
                this._text_4,
                this._text_9,
                this._el_10,
                this._text_12
            ])
        ], null);
        this._text_13 = this.renderer.createText(this._el_1, '\n', null);
        this._text_14 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_15 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_16 = this.renderer.createText(this._el_15, '\n', null);
        this._text_17 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_18 = this.renderer.createElement(parentRenderNode, 'ion-slides', null);
        this.renderer.setElementAttribute(this._el_18, 'pager', '');
        this._appEl_18 = new import2.AppElement(18, null, this, this._el_18);
        var compView_18 = import29.viewFactory_Slides0(this.viewUtils, this.injector(18), this._appEl_18);
        this._Slides_18_4 = new import20.Slides(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_18), this.renderer);
        this._appEl_18.initComponent(this._Slides_18_4, [], compView_18);
        this._text_19 = this.renderer.createText(null, '\n\n\n\n  ', null);
        this._el_20 = this.renderer.createElement(null, 'ion-slide', null);
        this.renderer.setElementAttribute(this._el_20, 'style', 'background-color: green');
        this._appEl_20 = new import2.AppElement(20, 18, this, this._el_20);
        var compView_20 = import29.viewFactory_Slide0(this.viewUtils, this.injector(20), this._appEl_20);
        this._Slide_20_4 = new import20.Slide(new import22.ElementRef(this._el_20), this._Slides_18_4);
        this._appEl_20.initComponent(this._Slide_20_4, [], compView_20);
        this._text_21 = this.renderer.createText(null, '\n     ', null);
        this._el_22 = this.renderer.createElement(null, 'img', null);
        this._text_23 = this.renderer.createText(null, '\n  ', null);
        compView_20.create(this._Slide_20_4, [[].concat([
                this._text_21,
                this._el_22,
                this._text_23
            ])], null);
        this._text_24 = this.renderer.createText(null, '\n\n  ', null);
        this._el_25 = this.renderer.createElement(null, 'ion-slide', null);
        this.renderer.setElementAttribute(this._el_25, 'style', 'background-color: blue');
        this._appEl_25 = new import2.AppElement(25, 18, this, this._el_25);
        var compView_25 = import29.viewFactory_Slide0(this.viewUtils, this.injector(25), this._appEl_25);
        this._Slide_25_4 = new import20.Slide(new import22.ElementRef(this._el_25), this._Slides_18_4);
        this._appEl_25.initComponent(this._Slide_25_4, [], compView_25);
        this._text_26 = this.renderer.createText(null, '\n    ', null);
        this._el_27 = this.renderer.createElement(null, 'img', null);
        this._text_28 = this.renderer.createText(null, '\n  ', null);
        compView_25.create(this._Slide_25_4, [[].concat([
                this._text_26,
                this._el_27,
                this._text_28
            ])], null);
        this._text_29 = this.renderer.createText(null, '\n\n  ', null);
        this._el_30 = this.renderer.createElement(null, 'ion-slide', null);
        this.renderer.setElementAttribute(this._el_30, 'style', 'background-color: red');
        this._appEl_30 = new import2.AppElement(30, 18, this, this._el_30);
        var compView_30 = import29.viewFactory_Slide0(this.viewUtils, this.injector(30), this._appEl_30);
        this._Slide_30_4 = new import20.Slide(new import22.ElementRef(this._el_30), this._Slides_18_4);
        this._appEl_30.initComponent(this._Slide_30_4, [], compView_30);
        this._text_31 = this.renderer.createText(null, '\n    ', null);
        this._el_32 = this.renderer.createElement(null, 'img', null);
        this._text_33 = this.renderer.createText(null, '\n  ', null);
        compView_30.create(this._Slide_30_4, [[].concat([
                this._text_31,
                this._el_32,
                this._text_33
            ])], null);
        this._text_34 = this.renderer.createText(null, '\n\n  ', null);
        this._el_35 = this.renderer.createElement(null, 'ion-slide', null);
        this.renderer.setElementAttribute(this._el_35, 'style', 'background-color: green');
        this._appEl_35 = new import2.AppElement(35, 18, this, this._el_35);
        var compView_35 = import29.viewFactory_Slide0(this.viewUtils, this.injector(35), this._appEl_35);
        this._Slide_35_4 = new import20.Slide(new import22.ElementRef(this._el_35), this._Slides_18_4);
        this._appEl_35.initComponent(this._Slide_35_4, [], compView_35);
        this._text_36 = this.renderer.createText(null, '\n     ', null);
        this._el_37 = this.renderer.createElement(null, 'img', null);
        this._text_38 = this.renderer.createText(null, '\n  ', null);
        compView_35.create(this._Slide_35_4, [[].concat([
                this._text_36,
                this._el_37,
                this._text_38
            ])], null);
        this._text_39 = this.renderer.createText(null, '\n\n', null);
        compView_18.create(this._Slides_18_4, [[].concat([
                this._text_19,
                this._el_20,
                this._text_24,
                this._el_25,
                this._text_29,
                this._el_30,
                this._text_34,
                this._el_35,
                this._text_39
            ])], null);
        this._text_40 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_5, 'click', this.eventHandler(this._handle_click_5_0.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._map_0 = import4.pureProxy1(function (p0) {
            return { pager: p0 };
        });
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._text_39,
            this._text_40
        ], [disposable_0], []);
        return null;
    };
    _View_Arts0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.Icon) && (7 === requestNodeIndex))) {
            return this._Icon_7_3;
        }
        if (((token === import14.Button) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Button_5_4;
        }
        if (((token === import15.MenuToggle) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._MenuToggle_5_5;
        }
        if (((token === import16.ToolbarItem) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._ToolbarItem_5_6;
        }
        if (((token === import19.ToolbarTitle) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._ToolbarTitle_10_4;
        }
        if (((token === import13.Navbar) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Navbar_3_4;
        }
        if (((token === import12.Header) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._Header_1_3;
        }
        if (((token === import20.Slide) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 23)))) {
            return this._Slide_20_4;
        }
        if (((token === import20.Slide) && ((25 <= requestNodeIndex) && (requestNodeIndex <= 28)))) {
            return this._Slide_25_4;
        }
        if (((token === import20.Slide) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 33)))) {
            return this._Slide_30_4;
        }
        if (((token === import20.Slide) && ((35 <= requestNodeIndex) && (requestNodeIndex <= 38)))) {
            return this._Slide_35_4;
        }
        if (((token === import20.Slides) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 39)))) {
            return this._Slides_18_4;
        }
        return notFoundResult;
    };
    _View_Arts0.prototype.detectChangesInternal = function (throwOnChange) {
        var changed = true;
        var currVal_3 = '';
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._MenuToggle_5_5.menuToggle = currVal_3;
            this._expr_3 = currVal_3;
        }
        var currVal_5 = 'menu';
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._Icon_7_3.name = currVal_5;
            this._expr_5 = currVal_5;
        }
        changed = false;
        var currVal_7 = this._map_0(true);
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this._Slides_18_4.options = currVal_7;
            changed = true;
            this._expr_7 = currVal_7;
        }
        var currVal_8 = '';
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this._Slides_18_4.pager = currVal_8;
            changed = true;
            this._expr_8 = currVal_8;
        }
        if (changed) {
            this._appEl_18.componentView.markAsCheckOnce();
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Slides_18_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_5_0.dirty) {
                this._query_Button_5_0.reset([this._Button_5_4]);
                this._ToolbarItem_5_6._buttons = this._query_Button_5_0;
                this._query_Button_5_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_5_4.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_3_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_3, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_3_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_3, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_4 = this._MenuToggle_5_5.isHidden;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_5, 'hidden', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_6 = this._Icon_7_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_7, 'hide', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_9 = import4.interpolate(2, './Face/', this.context.broker.firstName, '', this.context.broker.lastName, '/BtlFace.png');
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementProperty(this._el_22, 'src', this.viewUtils.sanitizer.sanitize(import30.SecurityContext.URL, currVal_9));
            this._expr_9 = currVal_9;
        }
        var currVal_10 = import4.interpolate(2, './Face/', this.context.broker.firstName, '', this.context.broker.lastName, '/BtlFace_C.png');
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementProperty(this._el_27, 'src', this.viewUtils.sanitizer.sanitize(import30.SecurityContext.URL, currVal_10));
            this._expr_10 = currVal_10;
        }
        var currVal_11 = import4.interpolate(2, './Face/', this.context.broker.firstName, '', this.context.broker.lastName, '/BtlFace_D.png');
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementProperty(this._el_32, 'src', this.viewUtils.sanitizer.sanitize(import30.SecurityContext.URL, currVal_11));
            this._expr_11 = currVal_11;
        }
        var currVal_12 = import4.interpolate(2, './Face/', this.context.broker.firstName, '', this.context.broker.lastName, '/Face.png');
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementProperty(this._el_37, 'src', this.viewUtils.sanitizer.sanitize(import30.SecurityContext.URL, currVal_12));
            this._expr_12 = currVal_12;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_3_4.ngAfterViewInit();
            }
        }
    };
    _View_Arts0.prototype.destroyInternal = function () {
        this._Icon_7_3.ngOnDestroy();
        this._Slide_20_4.ngOnDestroy();
        this._Slide_25_4.ngOnDestroy();
        this._Slide_30_4.ngOnDestroy();
        this._Slide_35_4.ngOnDestroy();
    };
    _View_Arts0.prototype._handle_click_5_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_5_5.toggle() !== false);
        return (true && pd_0);
    };
    return _View_Arts0;
}(import1.AppView));
export function viewFactory_Arts0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Arts === null)) {
        (renderType_Arts = viewUtils.createRenderComponentType('C:/Users/guojin/Desktop/server/iv/.tmp/pages/arts/arts.html', 0, import10.ViewEncapsulation.None, styles_Arts, {}));
    }
    return new _View_Arts0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=arts.ngfactory.js.map