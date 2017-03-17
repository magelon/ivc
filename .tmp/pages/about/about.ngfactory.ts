/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './about';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from 'ionic-angular/components/toolbar/toolbar';
import * as import12 from 'ionic-angular/components/navbar/navbar';
import * as import13 from 'ionic-angular/components/button/button';
import * as import14 from 'ionic-angular/components/menu/menu-toggle';
import * as import15 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import16 from '@angular/core/src/linker/query_list';
import * as import17 from 'ionic-angular/components/icon/icon';
import * as import18 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import19 from 'ionic-angular/components/content/content';
import * as import20 from 'ionic-angular/config/config';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from 'ionic-angular/navigation/view-controller';
import * as import23 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import24 from 'ionic-angular/components/app/app';
import * as import25 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import26 from 'ionic-angular/components/menu/menu-controller';
import * as import27 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import28 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import29 from 'ionic-angular/util/keyboard';
import * as import30 from '@angular/core/src/zone/ng_zone';
import * as import31 from 'ionic-angular/components/tabs/tabs';
var renderType_AboutPage_Host:import0.RenderComponentType = (null as any);
class _View_AboutPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _AboutPage_0_4:import3.AboutPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AboutPage_Host0,renderType_AboutPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-about',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AboutPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AboutPage_0_4 = new import3.AboutPage(this.parentInjector.get(import8.NavController));
    this._appEl_0.initComponent(this._AboutPage_0_4,[],compView_0);
    compView_0.create(this._AboutPage_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.AboutPage) && (0 === requestNodeIndex))) { return this._AboutPage_0_4; }
    return notFoundResult;
  }
}
function viewFactory_AboutPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_AboutPage_Host === (null as any))) { (renderType_AboutPage_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_AboutPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const AboutPageNgFactory:import10.ComponentFactory<import3.AboutPage> = new import10.ComponentFactory<import3.AboutPage>('page-about',viewFactory_AboutPage_Host0,import3.AboutPage);
const styles_AboutPage:any[] = [];
var renderType_AboutPage:import0.RenderComponentType = (null as any);
class _View_AboutPage0 extends import1.AppView<import3.AboutPage> {
  _el_0:any;
  _Header_0_3:import11.Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _Navbar_2_4:import12.Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _Button_4_4:import13.Button;
  _MenuToggle_4_5:import14.MenuToggle;
  _ToolbarItem_4_6:import15.ToolbarItem;
  _query_Button_4_0:import16.QueryList<any>;
  _text_5:any;
  _el_6:any;
  _Icon_6_3:import17.Icon;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import2.AppElement;
  _ToolbarTitle_9_4:import18.ToolbarTitle;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  /*private*/ _appEl_14:import2.AppElement;
  _Content_14_4:import19.Content;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _text_20:any;
  _el_21:any;
  _text_22:any;
  _el_23:any;
  _text_24:any;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _text_28:any;
  _text_29:any;
  _text_30:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AboutPage0,renderType_AboutPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import11.Header(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import22.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import23.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import12.Navbar(this.parentInjector.get(import24.App),this.parentInjector.get(import22.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4,[],compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_4,'ion-button','');
    this.renderer.setElementAttribute(this._el_4,'menuToggle','');
    this._appEl_4 = new import2.AppElement(4,2,this,this._el_4);
    var compView_4:any = import25.viewFactory_Button0(this.viewUtils,this.injector(4),this._appEl_4);
    this._Button_4_4 = new import13.Button('','',this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_4),this.renderer);
    this._MenuToggle_4_5 = new import14.MenuToggle(this.parentInjector.get(import26.MenuController),new import21.ElementRef(this._el_4),this.parentInjector.get(import22.ViewController,(null as any)),this._Navbar_2_4);
    this._ToolbarItem_4_6 = new import15.ToolbarItem(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import11.Toolbar,(null as any)),this._Navbar_2_4);
    this._query_Button_4_0 = new import16.QueryList<any>();
    this._appEl_4.initComponent(this._Button_4_4,[],compView_4);
    this._text_5 = this.renderer.createText((null as any),'\n            ',(null as any));
    this._el_6 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_6,'name','menu');
    this.renderer.setElementAttribute(this._el_6,'role','img');
    this._Icon_6_3 = new import17.Icon(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_6),this.renderer);
    this._text_7 = this.renderer.createText((null as any),'\n        ',(null as any));
      compView_4.create(this._Button_4_4,[[].concat([
        this._text_5,
        this._el_6,
        this._text_7
      ]
    )],(null as any));
    this._text_8 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_9 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_9 = new import2.AppElement(9,2,this,this._el_9);
    var compView_9:any = import27.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(9),this._appEl_9);
    this._ToolbarTitle_9_4 = new import18.ToolbarTitle(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_9),this.renderer,this.parentInjector.get(import11.Toolbar,(null as any)),this._Navbar_2_4);
    this._appEl_9.initComponent(this._ToolbarTitle_9_4,[],compView_9);
    this._text_10 = this.renderer.createText((null as any),'About',(null as any));
    compView_9.create(this._ToolbarTitle_9_4,[[].concat([this._text_10])],(null as any));
    this._text_11 = this.renderer.createText((null as any),'\n    ',(null as any));
    compView_2.create(this._Navbar_2_4,[
      [].concat([this._el_4]),
      [],
      [],
      [].concat([
        this._text_3,
        this._text_8,
        this._el_9,
        this._text_11
      ]
      )
    ]
    ,(null as any));
    this._text_12 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_13 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_14 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this._appEl_14 = new import2.AppElement(14,(null as any),this,this._el_14);
    var compView_14:any = import28.viewFactory_Content0(this.viewUtils,this.injector(14),this._appEl_14);
    this._Content_14_4 = new import19.Content(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_14),this.renderer,this.parentInjector.get(import24.App),this.parentInjector.get(import29.Keyboard),this.parentInjector.get(import30.NgZone),this.parentInjector.get(import22.ViewController,(null as any)),this.parentInjector.get(import31.Tabs,(null as any)));
    this._appEl_14.initComponent(this._Content_14_4,[],compView_14);
    this._text_15 = this.renderer.createText((null as any),'\n\n    ',(null as any));
    this._el_16 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_16,'class','about-header');
    this._text_17 = this.renderer.createText(this._el_16,'\n        ',(null as any));
    this._el_18 = this.renderer.createElement(this._el_16,'img',(null as any));
    this.renderer.setElementAttribute(this._el_18,'src','assets/img/item.png');
    this._text_19 = this.renderer.createText(this._el_16,'\n    ',(null as any));
    this._text_20 = this.renderer.createText((null as any),'\n\n    ',(null as any));
    this._el_21 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_21,'class','about-info');
    this.renderer.setElementAttribute(this._el_21,'padding','');
    this._text_22 = this.renderer.createText(this._el_21,'\n\n        ',(null as any));
    this._el_23 = this.renderer.createElement(this._el_21,'h4',(null as any));
    this._text_24 = this.renderer.createText(this._el_23,'Fire Emblem Heroes IV Check',(null as any));
    this._text_25 = this.renderer.createText(this._el_21,'\n\n        ',(null as any));
    this._el_26 = this.renderer.createElement(this._el_21,'p',(null as any));
    this._text_27 = this.renderer.createText(this._el_26,'\n            Fire Emblem Heroes IV Check is a sample application that demonstrayes how to build apps with Ionic 2, Angular 2, and Node.js\n        ',(null as any));
    this._text_28 = this.renderer.createText(this._el_21,'\n\n    ',(null as any));
    this._text_29 = this.renderer.createText((null as any),'\n\n',(null as any));
    compView_14.create(this._Content_14_4,[
      [],
      [].concat([
        this._text_15,
        this._el_16,
        this._text_20,
        this._el_21,
        this._text_29
      ]
      ),
      []
    ]
    ,(null as any));
    this._text_30 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_4,'click',this.eventHandler(this._handle_click_4_0.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._text_28,
      this._text_29,
      this._text_30
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.Icon) && (6 === requestNodeIndex))) { return this._Icon_6_3; }
    if (((token === import13.Button) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Button_4_4; }
    if (((token === import14.MenuToggle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._MenuToggle_4_5; }
    if (((token === import15.ToolbarItem) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._ToolbarItem_4_6; }
    if (((token === import18.ToolbarTitle) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._ToolbarTitle_9_4; }
    if (((token === import12.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._Navbar_2_4; }
    if (((token === import11.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._Header_0_3; }
    if (((token === import19.Content) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 29)))) { return this._Content_14_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_3:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._MenuToggle_4_5.menuToggle = currVal_3;
      this._expr_3 = currVal_3;
    }
    const currVal_5:any = 'menu';
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._Icon_6_3.name = currVal_5;
      this._expr_5 = currVal_5;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Content_14_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_4_0.dirty) {
        this._query_Button_4_0.reset([this._Button_4_4]);
        this._ToolbarItem_4_6._buttons = this._query_Button_4_0;
        this._query_Button_4_0.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Button_4_4.ngAfterContentInit(); }
    }
    const currVal_0:any = this._Navbar_2_4._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_2_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_4:any = this._MenuToggle_4_5.isHidden;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementProperty(this._el_4,'hidden',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_6:any = this._Icon_6_3._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_6,'hide',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._Content_14_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_14,'statusbar-padding',currVal_7);
      this._expr_7 = currVal_7;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Icon_6_3.ngOnDestroy();
    this._Content_14_4.ngOnDestroy();
  }
  private _handle_click_4_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._MenuToggle_4_5.toggle()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_AboutPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.AboutPage> {
  if ((renderType_AboutPage === (null as any))) { (renderType_AboutPage = viewUtils.createRenderComponentType('C:/Users/guojin/Desktop/server/iv/.tmp/pages/about/about.html',0,import9.ViewEncapsulation.None,styles_AboutPage,{})); }
  return new _View_AboutPage0(viewUtils,parentInjector,declarationEl);
}