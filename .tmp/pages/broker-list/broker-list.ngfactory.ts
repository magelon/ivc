/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './broker-list';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '../../providers/broker-service-mock';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from 'ionic-angular/components/toolbar/toolbar';
import * as import13 from 'ionic-angular/components/navbar/navbar';
import * as import14 from 'ionic-angular/components/button/button';
import * as import15 from 'ionic-angular/components/menu/menu-toggle';
import * as import16 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import17 from '@angular/core/src/linker/query_list';
import * as import18 from 'ionic-angular/components/icon/icon';
import * as import19 from '@angular/forms/src/directives/ng_model';
import * as import20 from '@angular/forms/src/directives/ng_control_status';
import * as import21 from 'ionic-angular/components/searchbar/searchbar';
import * as import22 from 'ionic-angular/components/content/content';
import * as import23 from 'ionic-angular/components/list/list';
import * as import24 from '@angular/common/src/directives/ng_for';
import * as import25 from 'ionic-angular/config/config';
import * as import26 from '@angular/core/src/linker/element_ref';
import * as import27 from 'ionic-angular/navigation/view-controller';
import * as import28 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import29 from 'ionic-angular/components/app/app';
import * as import30 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import31 from 'ionic-angular/components/menu/menu-controller';
import * as import32 from '../../node_modules/ionic-angular/components/searchbar/searchbar.ngfactory';
import * as import33 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import34 from 'ionic-angular/util/keyboard';
import * as import35 from '@angular/core/src/zone/ng_zone';
import * as import36 from 'ionic-angular/components/tabs/tabs';
import * as import37 from 'ionic-angular/gestures/gesture-controller';
import * as import38 from '@angular/core/src/linker/template_ref';
import * as import39 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import40 from '@angular/forms/src/directives/ng_control';
import * as import41 from 'ionic-angular/components/item/item';
import * as import42 from 'ionic-angular/components/avatar/avatar';
import * as import43 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import44 from 'ionic-angular/util/form';
import * as import45 from '@angular/core/src/security';
var renderType_BrokerListPage_Host:import0.RenderComponentType = (null as any);
class _View_BrokerListPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _BrokerListPage_0_4:import3.BrokerListPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_BrokerListPage_Host0,renderType_BrokerListPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-broker-list',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_BrokerListPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._BrokerListPage_0_4 = new import3.BrokerListPage(this.parentInjector.get(import8.NavController),this.parentInjector.get(import9.BrokerService));
    this._appEl_0.initComponent(this._BrokerListPage_0_4,[],compView_0);
    compView_0.create(this._BrokerListPage_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.BrokerListPage) && (0 === requestNodeIndex))) { return this._BrokerListPage_0_4; }
    return notFoundResult;
  }
}
function viewFactory_BrokerListPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_BrokerListPage_Host === (null as any))) { (renderType_BrokerListPage_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,[],{})); }
  return new _View_BrokerListPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const BrokerListPageNgFactory:import11.ComponentFactory<import3.BrokerListPage> = new import11.ComponentFactory<import3.BrokerListPage>('page-broker-list',viewFactory_BrokerListPage_Host0,import3.BrokerListPage);
const styles_BrokerListPage:any[] = [];
var renderType_BrokerListPage:import0.RenderComponentType = (null as any);
class _View_BrokerListPage0 extends import1.AppView<import3.BrokerListPage> {
  _el_0:any;
  _Header_0_3:import12.Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _Navbar_2_4:import13.Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _Button_4_4:import14.Button;
  _MenuToggle_4_5:import15.MenuToggle;
  _ToolbarItem_4_6:import16.ToolbarItem;
  _query_Button_4_0:import17.QueryList<any>;
  _text_5:any;
  _el_6:any;
  _Icon_6_3:import18.Icon;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import2.AppElement;
  _NgModel_9_4:import19.NgModel;
  _NgControl_9_5:any;
  _NgControlStatus_9_6:import20.NgControlStatus;
  _Searchbar_9_7:import21.Searchbar;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  /*private*/ _appEl_13:import2.AppElement;
  _Content_13_4:import22.Content;
  _text_14:any;
  _el_15:any;
  _List_15_3:import23.List;
  _text_16:any;
  _anchor_17:any;
  /*private*/ _appEl_17:import2.AppElement;
  _TemplateRef_17_5:any;
  _NgFor_17_6:import24.NgFor;
  _text_18:any;
  _text_19:any;
  _text_20:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_17:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_20:any;
  /*private*/ _expr_21:any;
  /*private*/ _expr_22:any;
  /*private*/ _expr_23:any;
  /*private*/ _expr_24:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_BrokerListPage0,renderType_BrokerListPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import12.Header(this.parentInjector.get(import25.Config),new import26.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import27.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import28.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import13.Navbar(this.parentInjector.get(import29.App),this.parentInjector.get(import27.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import25.Config),new import26.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4,[],compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_4,'ion-button','');
    this.renderer.setElementAttribute(this._el_4,'menuToggle','');
    this._appEl_4 = new import2.AppElement(4,2,this,this._el_4);
    var compView_4:any = import30.viewFactory_Button0(this.viewUtils,this.injector(4),this._appEl_4);
    this._Button_4_4 = new import14.Button('','',this.parentInjector.get(import25.Config),new import26.ElementRef(this._el_4),this.renderer);
    this._MenuToggle_4_5 = new import15.MenuToggle(this.parentInjector.get(import31.MenuController),new import26.ElementRef(this._el_4),this.parentInjector.get(import27.ViewController,(null as any)),this._Navbar_2_4);
    this._ToolbarItem_4_6 = new import16.ToolbarItem(this.parentInjector.get(import25.Config),new import26.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import12.Toolbar,(null as any)),this._Navbar_2_4);
    this._query_Button_4_0 = new import17.QueryList<any>();
    this._appEl_4.initComponent(this._Button_4_4,[],compView_4);
    this._text_5 = this.renderer.createText((null as any),'\n            ',(null as any));
    this._el_6 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_6,'name','menu');
    this.renderer.setElementAttribute(this._el_6,'role','img');
    this._Icon_6_3 = new import18.Icon(this.parentInjector.get(import25.Config),new import26.ElementRef(this._el_6),this.renderer);
    this._text_7 = this.renderer.createText((null as any),'\n        ',(null as any));
      compView_4.create(this._Button_4_4,[[].concat([
        this._text_5,
        this._el_6,
        this._text_7
      ]
    )],(null as any));
    this._text_8 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_9 = this.renderer.createElement((null as any),'ion-searchbar',(null as any));
    this._appEl_9 = new import2.AppElement(9,2,this,this._el_9);
    var compView_9:any = import32.viewFactory_Searchbar0(this.viewUtils,this.injector(9),this._appEl_9);
    this._NgModel_9_4 = new import19.NgModel((null as any),(null as any),(null as any),(null as any));
    this._NgControl_9_5 = this._NgModel_9_4;
    this._NgControlStatus_9_6 = new import20.NgControlStatus(this._NgControl_9_5);
    this._Searchbar_9_7 = new import21.Searchbar(this.parentInjector.get(import25.Config),new import26.ElementRef(this._el_9),this.renderer,this._NgControl_9_5);
    this._appEl_9.initComponent(this._Searchbar_9_7,[],compView_9);
    compView_9.create(this._Searchbar_9_7,[],(null as any));
    this._text_10 = this.renderer.createText((null as any),'\n       \n    ',(null as any));
    compView_2.create(this._Navbar_2_4,[
      [].concat([this._el_4]),
      [],
      [],
      [].concat([
        this._text_3,
        this._text_8,
        this._el_9,
        this._text_10
      ]
      )
    ]
    ,(null as any));
    this._text_11 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_12 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_13 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this._appEl_13 = new import2.AppElement(13,(null as any),this,this._el_13);
    var compView_13:any = import33.viewFactory_Content0(this.viewUtils,this.injector(13),this._appEl_13);
    this._Content_13_4 = new import22.Content(this.parentInjector.get(import25.Config),new import26.ElementRef(this._el_13),this.renderer,this.parentInjector.get(import29.App),this.parentInjector.get(import34.Keyboard),this.parentInjector.get(import35.NgZone),this.parentInjector.get(import27.ViewController,(null as any)),this.parentInjector.get(import36.Tabs,(null as any)));
    this._appEl_13.initComponent(this._Content_13_4,[],compView_13);
    this._text_14 = this.renderer.createText((null as any),'\n\n    ',(null as any));
    this._el_15 = this.renderer.createElement((null as any),'ion-list',(null as any));
    this._List_15_3 = new import23.List(this.parentInjector.get(import25.Config),new import26.ElementRef(this._el_15),this.renderer,this.parentInjector.get(import37.GestureController));
    this._text_16 = this.renderer.createText(this._el_15,'\n\n        ',(null as any));
    this._anchor_17 = this.renderer.createTemplateAnchor(this._el_15,(null as any));
    this._appEl_17 = new import2.AppElement(17,15,this,this._anchor_17);
    this._TemplateRef_17_5 = new import38.TemplateRef_(this._appEl_17,viewFactory_BrokerListPage1);
    this._NgFor_17_6 = new import24.NgFor(this._appEl_17.vcRef,this._TemplateRef_17_5,this.parentInjector.get(import39.IterableDiffers),this.ref);
    this._text_18 = this.renderer.createText(this._el_15,'\n\n    ',(null as any));
    this._text_19 = this.renderer.createText((null as any),'\n\n',(null as any));
    compView_13.create(this._Content_13_4,[
      [],
      [].concat([
        this._text_14,
        this._el_15,
        this._text_19
      ]
      ),
      []
    ]
    ,(null as any));
    this._text_20 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_4,'click',this.eventHandler(this._handle_click_4_0.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_9,'ngModelChange',this.eventHandler(this._handle_ngModelChange_9_0.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_9,'ionInput',this.eventHandler(this._handle_ionInput_9_1.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_9,'ionCancel',this.eventHandler(this._handle_ionCancel_9_2.bind(this)));
    this._expr_10 = import7.UNINITIALIZED;
    const subscription_0:any = this._NgModel_9_4.update.subscribe(this.eventHandler(this._handle_ngModelChange_9_0.bind(this)));
    this._expr_11 = import7.UNINITIALIZED;
    this._expr_12 = import7.UNINITIALIZED;
    this._expr_13 = import7.UNINITIALIZED;
    this._expr_14 = import7.UNINITIALIZED;
    this._expr_15 = import7.UNINITIALIZED;
    this._expr_16 = import7.UNINITIALIZED;
    this._expr_17 = import7.UNINITIALIZED;
    this._expr_18 = import7.UNINITIALIZED;
    this._expr_19 = import7.UNINITIALIZED;
    this._expr_20 = import7.UNINITIALIZED;
    this._expr_21 = import7.UNINITIALIZED;
    this._expr_22 = import7.UNINITIALIZED;
    const subscription_1:any = this._Searchbar_9_7.ionInput.subscribe(this.eventHandler(this._handle_ionInput_9_1.bind(this)));
    const subscription_2:any = this._Searchbar_9_7.ionCancel.subscribe(this.eventHandler(this._handle_ionCancel_9_2.bind(this)));
    this._expr_23 = import7.UNINITIALIZED;
    this._expr_24 = import7.UNINITIALIZED;
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
      this._el_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._anchor_17,
      this._text_18,
      this._text_19,
      this._text_20
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    ,[
      subscription_0,
      subscription_1,
      subscription_2
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.Icon) && (6 === requestNodeIndex))) { return this._Icon_6_3; }
    if (((token === import14.Button) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Button_4_4; }
    if (((token === import15.MenuToggle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._MenuToggle_4_5; }
    if (((token === import16.ToolbarItem) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._ToolbarItem_4_6; }
    if (((token === import19.NgModel) && (9 === requestNodeIndex))) { return this._NgModel_9_4; }
    if (((token === import40.NgControl) && (9 === requestNodeIndex))) { return this._NgControl_9_5; }
    if (((token === import20.NgControlStatus) && (9 === requestNodeIndex))) { return this._NgControlStatus_9_6; }
    if (((token === import21.Searchbar) && (9 === requestNodeIndex))) { return this._Searchbar_9_7; }
    if (((token === import13.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._Navbar_2_4; }
    if (((token === import12.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._Header_0_3; }
    if (((token === import38.TemplateRef) && (17 === requestNodeIndex))) { return this._TemplateRef_17_5; }
    if (((token === import24.NgFor) && (17 === requestNodeIndex))) { return this._NgFor_17_6; }
    if (((token === import23.List) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 18)))) { return this._List_15_3; }
    if (((token === import22.Content) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 19)))) { return this._Content_13_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
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
    changes = (null as any);
    const currVal_10:any = this.context.searchKey;
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this._NgModel_9_4.model = currVal_10;
      if ((changes === (null as any))) { (changes = {}); }
      changes['model'] = new import7.SimpleChange(this._expr_10,currVal_10);
      this._expr_10 = currVal_10;
    }
    if ((changes !== (null as any))) { this._NgModel_9_4.ngOnChanges(changes); }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Searchbar_9_7.ngOnInit(); }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Content_13_4.ngOnInit(); }
    changes = (null as any);
    const currVal_24:any = this.context.brokers;
    if (import4.checkBinding(throwOnChange,this._expr_24,currVal_24)) {
      this._NgFor_17_6.ngForOf = currVal_24;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_24,currVal_24);
      this._expr_24 = currVal_24;
    }
    if ((changes !== (null as any))) { this._NgFor_17_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_17_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_4_0.dirty) {
        this._query_Button_4_0.reset([this._Button_4_4]);
        this._ToolbarItem_4_6._buttons = this._query_Button_4_0;
        this._query_Button_4_0.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Button_4_4.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Searchbar_9_7.ngAfterContentInit(); }
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
    const currVal_11:any = this._NgControlStatus_9_6.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setElementClass(this._el_9,'ng-untouched',currVal_11);
      this._expr_11 = currVal_11;
    }
    const currVal_12:any = this._NgControlStatus_9_6.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementClass(this._el_9,'ng-touched',currVal_12);
      this._expr_12 = currVal_12;
    }
    const currVal_13:any = this._NgControlStatus_9_6.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementClass(this._el_9,'ng-pristine',currVal_13);
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = this._NgControlStatus_9_6.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementClass(this._el_9,'ng-dirty',currVal_14);
      this._expr_14 = currVal_14;
    }
    const currVal_15:any = this._NgControlStatus_9_6.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setElementClass(this._el_9,'ng-valid',currVal_15);
      this._expr_15 = currVal_15;
    }
    const currVal_16:any = this._NgControlStatus_9_6.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this.renderer.setElementClass(this._el_9,'ng-invalid',currVal_16);
      this._expr_16 = currVal_16;
    }
    const currVal_17:any = this._Searchbar_9_7.animated;
    if (import4.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this.renderer.setElementClass(this._el_9,'searchbar-animated',currVal_17);
      this._expr_17 = currVal_17;
    }
    const currVal_18:any = this._Searchbar_9_7._value;
    if (import4.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setElementClass(this._el_9,'searchbar-has-value',currVal_18);
      this._expr_18 = currVal_18;
    }
    const currVal_19:any = this._Searchbar_9_7._isActive;
    if (import4.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this.renderer.setElementClass(this._el_9,'searchbar-active',currVal_19);
      this._expr_19 = currVal_19;
    }
    const currVal_20:any = this._Searchbar_9_7.showCancelButton;
    if (import4.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setElementClass(this._el_9,'searchbar-show-cancel',currVal_20);
      this._expr_20 = currVal_20;
    }
    const currVal_21:any = this._Searchbar_9_7._shouldAlignLeft;
    if (import4.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this.renderer.setElementClass(this._el_9,'searchbar-left-aligned',currVal_21);
      this._expr_21 = currVal_21;
    }
    const currVal_22:any = this._Searchbar_9_7._sbHasFocus;
    if (import4.checkBinding(throwOnChange,this._expr_22,currVal_22)) {
      this.renderer.setElementClass(this._el_9,'searchbar-has-focus',currVal_22);
      this._expr_22 = currVal_22;
    }
    const currVal_23:any = this._Content_13_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_23,currVal_23)) {
      this.renderer.setElementClass(this._el_13,'statusbar-padding',currVal_23);
      this._expr_23 = currVal_23;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Icon_6_3.ngOnDestroy();
    this._NgModel_9_4.ngOnDestroy();
    this._Content_13_4.ngOnDestroy();
  }
  private _handle_click_4_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._MenuToggle_4_5.toggle()) !== false);
    return (true && pd_0);
  }
  private _handle_ngModelChange_9_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.searchKey = $event)) !== false);
    return (true && pd_0);
  }
  private _handle_ionInput_9_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onInput($event)) !== false);
    return (true && pd_0);
  }
  private _handle_ionCancel_9_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onCancel($event)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_BrokerListPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.BrokerListPage> {
  if ((renderType_BrokerListPage === (null as any))) { (renderType_BrokerListPage = viewUtils.createRenderComponentType('C:/Users/guojin/Desktop/server/ivc/.tmp/pages/broker-list/broker-list.html',0,import10.ViewEncapsulation.None,styles_BrokerListPage,{})); }
  return new _View_BrokerListPage0(viewUtils,parentInjector,declarationEl);
}
class _View_BrokerListPage1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _Item_0_4:import41.Item;
  _ItemContent_0_5:import41.ItemContent;
  _query_Label_0_0:import17.QueryList<any>;
  _query_Button_0_1:import17.QueryList<any>;
  _query_Icon_0_2:import17.QueryList<any>;
  _text_1:any;
  _el_2:any;
  _Avatar_2_3:import42.Avatar;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_BrokerListPage1,renderType_BrokerListPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','item item-block');
    this.renderer.setElementAttribute(this._el_0,'ion-item','');
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import43.viewFactory_Item0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Item_0_4 = new import41.Item(this.parent.parentInjector.get(import44.Form),this.parent.parentInjector.get(import25.Config),new import26.ElementRef(this._el_0),this.renderer);
    this._ItemContent_0_5 = new import41.ItemContent();
    this._query_Label_0_0 = new import17.QueryList<any>();
    this._query_Button_0_1 = new import17.QueryList<any>();
    this._query_Icon_0_2 = new import17.QueryList<any>();
    this._appEl_0.initComponent(this._Item_0_4,[],compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n            ',(null as any));
    this._el_2 = this.renderer.createElement((null as any),'ion-avatar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'item-left','');
    this._Avatar_2_3 = new import42.Avatar();
    this._text_3 = this.renderer.createText(this._el_2,'\n                ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'img',(null as any));
    this._text_5 = this.renderer.createText(this._el_2,'\n            ',(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n            ',(null as any));
    this._el_7 = this.renderer.createElement((null as any),'h2',(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'',(null as any));
    this._text_9 = this.renderer.createText((null as any),'\n            ',(null as any));
    this._el_10 = this.renderer.createElement((null as any),'p',(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'',(null as any));
    this._text_12 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._query_Label_0_0.reset([]);
    this._Item_0_4.contentLabel = this._query_Label_0_0.first;
    compView_0.create(this._Item_0_4,[
      [].concat([this._el_2]),
      [],
      [].concat([
        this._text_1,
        this._text_6,
        this._el_7,
        this._text_9,
        this._el_10,
        this._text_12
      ]
      ),
      [],
      []
    ]
    ,(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import42.Avatar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._Avatar_2_3; }
    if (((token === import41.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._Item_0_4; }
    if (((token === import41.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._ItemContent_0_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_0_1.dirty) {
        this._query_Button_0_1.reset([]);
        this._Item_0_4._buttons = this._query_Button_0_1;
        this._query_Button_0_1.notifyOnChanges();
      }
      if (this._query_Icon_0_2.dirty) {
        this._query_Icon_0_2.reset([]);
        this._Item_0_4._icons = this._query_Icon_0_2;
        this._query_Icon_0_2.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Item_0_4.ngAfterContentInit(); }
    }
    const currVal_1:any = import4.interpolate(2,'./Face/',this.context.$implicit.firstName,'',this.context.$implicit.lastName,'/Face_FC.png');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_4,'src',this.viewUtils.sanitizer.sanitize(import45.SecurityContext.URL,currVal_1));
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = import4.interpolate(2,'',this.context.$implicit.firstName,' ',this.context.$implicit.lastName,'');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_8,currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = import4.interpolate(1,'',this.context.$implicit.title,'');
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_11,currVal_3);
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.openBrokerDetail(this.context.$implicit)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_BrokerListPage1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_BrokerListPage1(viewUtils,parentInjector,declarationEl);
}