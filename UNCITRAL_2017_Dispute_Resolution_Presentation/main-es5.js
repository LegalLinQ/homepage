function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/angular2-google-chart.directive.ts":
  /*!****************************************************!*\
    !*** ./src/app/angular2-google-chart.directive.ts ***!
    \****************************************************/

  /*! exports provided: GoogleChartDirective */

  /***/
  function srcAppAngular2GoogleChartDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleChartDirective", function () {
      return GoogleChartDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GoogleChartDirective = /*#__PURE__*/function () {
      function GoogleChartDirective(element) {
        _classCallCheck(this, GoogleChartDirective);

        this.element = element;
        this._element = this.element.nativeElement;
      }

      _createClass(GoogleChartDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          var _this = this;

          if (!googleLoaded) {
            googleLoaded = true;
            google.charts.load('current', {
              'packages': ['corechart', 'gauge']['orgchart']
            });
          }

          setTimeout(function () {
            return _this.drawGraph(_this.chartOptions, _this.chartType, _this.chartData, _this._element);
          }, 1000);
        }
      }, {
        key: "drawGraph",
        value: function drawGraph(chartOptions, chartType, chartData, element) {
          google.charts.setOnLoadCallback(drawChart);

          function drawChart() {
            var wrapper;
            wrapper = new google.visualization.ChartWrapper({
              chartType: chartType,
              dataTable: chartData,
              options: chartOptions || {}
            });
            wrapper.draw(element);
          }
        }
      }]);

      return GoogleChartDirective;
    }();

    GoogleChartDirective.ɵfac = function GoogleChartDirective_Factory(t) {
      return new (t || GoogleChartDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    GoogleChartDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: GoogleChartDirective,
      selectors: [["", "GoogleChart", ""]],
      inputs: {
        chartType: "chartType",
        chartOptions: "chartOptions",
        chartData: "chartData"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleChartDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[GoogleChart]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        chartType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['chartType']
        }],
        chartOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['chartOptions']
        }],
        chartData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['chartData']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/dc.drp-graphs.component.ts":
  /*!********************************************!*\
    !*** ./src/app/dc.drp-graphs.component.ts ***!
    \********************************************/

  /*! exports provided: DCDirective, DCItem, DynamicContentService, DCMainComponent, DCDataComponent */

  /***/
  function srcAppDcDrpGraphsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DCDirective", function () {
      return DCDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DCItem", function () {
      return DCItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DynamicContentService", function () {
      return DynamicContentService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DCMainComponent", function () {
      return DCMainComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DCDataComponent", function () {
      return DCDataComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _drpBaseData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./drpBaseData */
    "./src/app/drpBaseData.ts");
    /* harmony import */


    var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-2-local-storage */
    "./node_modules/angular-2-local-storage/__ivy_ngcc__/fesm2015/angular-2-local-storage.js");
    /* harmony import */


    var _drp_scriptloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./drp-scriptloader */
    "./src/app/drp-scriptloader.ts");
    /* harmony import */


    var _angular2_google_chart_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./angular2-google-chart.directive */
    "./src/app/angular2-google-chart.directive.ts");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /**
     * SOURCE: https://angular.io/guide/dynamic-component-loader
     *
     */

    /**
     * ALL IMPORTS FOR:
     *  - directive (DCDirective)
     *  - component placeholder (DCPlaceholderComponent)
     *  - type class (DCItem)
     *  - service (DynamicContentService)
     *  - main module (DCMainComponent)
     *  - dynamic data module (DCDataComponent)
     *
     * Add to .module:
     *  - import { DCMainComponent, DCDirective, DCDataComponent, DynamicContentService } from './dc.drp-graphs.component';
     *  - declarations: [ DCMainComponent, DCDataComponent, DCDirective ],
     *  - providers:[ DynamicContentService ],
     *   - entryComponents: [ DCMainComponent, DCDataComponent ]
     *
      * Add to main component html:
     *  <dynamic-content [items]="items" [tabchange]="selectedIndex" ></dynamic-content> //is selector of main component
     *  'tabchange' and 'items' are holding data to be transferred to corresponding '@Input statement in main component.
     */


    function DCMainComponent_ng_template_0_Template(rf, ctx) {} // Directive: Selector will be placed in the component where the dynamic data will be shown like this: "<ng-template dynamic-content-data></ng-template>"


    var DCDirective = function DCDirective(viewContainerRef) {
      _classCallCheck(this, DCDirective);

      this.viewContainerRef = viewContainerRef;
    };

    DCDirective.ɵfac = function DCDirective_Factory(t) {
      return new (t || DCDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
    };

    DCDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DCDirective,
      selectors: [["", "dynamic-content-data", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DCDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[dynamic-content-data]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      }, null);
    })(); // DCItem, import 'type' from angular core


    var DCItem = function DCItem(component, data) {
      _classCallCheck(this, DCItem);

      this.component = component;
      this.data = data;
    };
    /**
     * SERVICE NEEDED
     */


    var DynamicContentService = /*#__PURE__*/function () {
      function DynamicContentService(localStorageService) {
        _classCallCheck(this, DynamicContentService);

        this.localStorageService = localStorageService;
      } //hiermee wordt de standaard set data of de opgeslagen data opgehaald.


      _createClass(DynamicContentService, [{
        key: "Items",
        value: function Items() {
          var stored_data = this.localStorageService.get(key); //geen stored data dan standaard static data

          var dataToSend = _drpBaseData__WEBPACK_IMPORTED_MODULE_1__["DRPMOCKDATA"];

          if (stored_data) {
            for (var key in dataToSend) {
              dataToSend[key] = stored_data[key];
            }
          }

          return [new DCItem(DCDataComponent, {
            dataToSend: dataToSend
          })];
        }
      }]);

      return DynamicContentService;
    }();

    DynamicContentService.ɵfac = function DynamicContentService_Factory(t) {
      return new (t || DynamicContentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]));
    };

    DynamicContentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DynamicContentService,
      factory: DynamicContentService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicContentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
        }];
      }, null);
    })();
    /**
     * MAIN COMPONENT, initialisatie, inladen scripts
     */


    var DCMainComponent = /*#__PURE__*/function () {
      function DCMainComponent(componentFactoryResolver, script, _dcService) {
        _classCallCheck(this, DCMainComponent);

        this.componentFactoryResolver = componentFactoryResolver;
        this.script = script;
        this._dcService = _dcService;
      }

      _createClass(DCMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //eenmalige initialisatie
          this.items = this._dcService.Items();
        } //Check bij welke tab hij is, 0 = Claimant, 1 = Defendant, 2 = Analysis 

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          var _this2 = this;

          //wanneer de analyse tab wordt opgevraagd, dan losgaan 
          if (this.tabchange == 2) {
            //vraag het script op
            this.script.load('googlechart') //laadt Charts pas als script is ingeladen
            .then(function () {
              return _this2.loadComponent();
            }) //eventuele foutmeldingen: TODO, een spinner op het scherm voor als het lang duurt.
            ["catch"](function () {
              return console.log('Google Chart loading niet gelukt');
            });
          }
        } //DE MAGIE, nog eens uitzoeken wat hier nu gebeurt.

      }, {
        key: "loadComponent",
        value: function loadComponent() {
          var dcItem = this.items[0];
          var componentFactory = this.componentFactoryResolver.resolveComponentFactory(dcItem.component);
          var viewContainerRef = this.dcHost.viewContainerRef;
          viewContainerRef.clear();
          var componentRef = viewContainerRef.createComponent(componentFactory);
          componentRef.instance.data = dcItem.data;
        }
      }]);

      return DCMainComponent;
    }();

    DCMainComponent.ɵfac = function DCMainComponent_Factory(t) {
      return new (t || DCMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_drp_scriptloader__WEBPACK_IMPORTED_MODULE_3__["Script"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DynamicContentService));
    };

    DCMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DCMainComponent,
      selectors: [["dynamic-content"]],
      viewQuery: function DCMainComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](DCDirective, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dcHost = _t.first);
        }
      },
      inputs: {
        tabchange: "tabchange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 0,
      consts: [["dynamic-content-data", ""]],
      template: function DCMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DCMainComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        }
      },
      directives: [DCDirective],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DCMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'dynamic-content',
          template: "<ng-template dynamic-content-data></ng-template>"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _drp_scriptloader__WEBPACK_IMPORTED_MODULE_3__["Script"]
        }, {
          type: DynamicContentService
        }];
      }, {
        tabchange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dcHost: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [DCDirective]
        }]
      });
    })();
    /**
     * DATA COMPONENT, HIER WORDT DE DYNAMISCHE CONTENT OPGEBOUWD/SAMENGESTELD
     */


    var DCDataComponent = /*#__PURE__*/function () {
      function DCDataComponent() {
        _classCallCheck(this, DCDataComponent);

        // ------ GAUGE - CLOCK -  UAI -----------
        this.gauge_type = "Gauge";
        this.gauge_ChartData = [['Label', 'Value'], ['UAI', 30], ['Preference', 80]];
        this.gauge_ChartOptions = {
          width: 400,
          height: 120,
          redFrom: 75,
          redTo: 100,
          yellowFrom: 25,
          yellowTo: 75,
          greenFrom: 0,
          greenTo: 25,
          minorTicks: 5
        }; // ------ BAR CHARTS -----------

        this.bar_ChartData = [['Element', 'Procedure'], ['Recommmended procedure', 30]];
        this.bar_ChartOptions = {
          title: 'Claimant and Defendant profiles combined',
          width: '600px',
          chartArea: {
            width: '70%'
          },
          hAxis: {
            title: 'Percentage',
            minValue: 0,
            maxValue: 100,
            textStyle: {
              bold: false,
              fontSize: 10,
              color: '#4d4d4d'
            },
            titleTextStyle: {
              bold: true,
              fontSize: 10,
              color: '#4d4d4d'
            }
          }
        };
      }

      _createClass(DCDataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var uai_cl = Number(this.data['dataToSend'][0].cl_value);
          var uai_de = Number(this.data['dataToSend'][0].de_value);
          this.bar_ChartData[1] = ['UAI', uai_de, uai_cl];
          var uaidiff = this.diff(+this.data['dataToSend'][0].cl_value, +this.data['dataToSend'][0].de_value);
          this.gauge_ChartData[1] = ['UAI', uaidiff];
          var pref_cl = Number(this.data['dataToSend'][1].cl_value);
          var pref_de = Number(this.data['dataToSend'][1].de_value);
          this.bar_ChartData[2] = ['Preference', pref_de, pref_cl];
          var prefdiff = this.diff(+this.data['dataToSend'][1].cl_value, +this.data['dataToSend'][1].de_value);
          this.gauge_ChartData[2] = ['Procedure', prefdiff];
          var prefaverage = Number(this.average(pref_cl, pref_de));
          var uaiaverage = Number(this.average(uai_cl, uai_de));
          var totalaverage = this.average(prefaverage, uaiaverage);
          this.ResultNumber = Number(totalaverage);
        } //CALC difference between numbers

      }, {
        key: "diff",
        value: function diff(a, b) {
          return Math.abs(a - b);
        }
      }, {
        key: "average",
        value: function average(x, y) {
          return ((x + y) / 2).toFixed(2);
        }
      }]);

      return DCDataComponent;
    }();

    DCDataComponent.ɵfac = function DCDataComponent_Factory(t) {
      return new (t || DCDataComponent)();
    };

    DCDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DCDataComponent,
      selectors: [["ng-component"]],
      inputs: {
        data: "data"
      },
      decls: 12,
      vars: 4,
      consts: [[2, "margin-top", "16px", "margin-bottom", "16px"], ["id", "gauge_chart", "GoogleChart", "", 3, "chartType", "chartOptions", "chartData"], [2, "margin-top", "16px"], ["color", "primary", "min", "1", "max", "100", "step", "1", 3, "value"], [2, "font-size", "small", "margin-top", "-10px"]],
      template: function DCDataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Level of differences");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Recommendation:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Based on this recommendation, a match with existing dispute resolution offerings can be made.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-slider", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Negotiation - Mediation - Arbitration - Litigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartType", ctx.gauge_type)("chartOptions", ctx.gauge_ChartOptions)("chartData", ctx.gauge_ChartData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.ResultNumber);
        }
      },
      directives: [_angular2_google_chart_directive__WEBPACK_IMPORTED_MODULE_4__["GoogleChartDirective"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSlider"]],
      styles: [".mat-slider-horizontal[_ngcontent-%COMP%]{\n      min-width: 300px;\n    }\n    p[_ngcontent-%COMP%]{\n      white-space: pre-rap;\n      margin-top: -5px;\n      font-size: small;\n    }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DCDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: "\n  <div style=\"margin-top:16px; margin-bottom:16px;\">Level of differences</div>\n  <div id=\"gauge_chart\" [chartType]=\"gauge_type\" [chartOptions]= \"gauge_ChartOptions\" [chartData]=\"gauge_ChartData\" GoogleChart></div>    \n    <div style=\"margin-top:16px;\"><h2>Recommendation:</h2></div>\n    <p>Based on this recommendation, a match with existing dispute resolution offerings can be made.<p>\n    <mat-slider color=\"primary\" min=\"1\" max=\"100\" step=\"1\" value=\"{{ResultNumber}}\"></mat-slider>\n    <p style=\"font-size:small; margin-top: -10px\">Negotiation - Mediation - Arbitration - Litigation</p>\n  ",
          styles: ["\n    .mat-slider-horizontal{\n      min-width: 300px;\n    }\n    p{\n      white-space: pre-rap;\n      margin-top: -5px;\n      font-size: small;\n    }\n  "]
        }]
      }], null, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/drp-dialog.component.ts":
  /*!*****************************************!*\
    !*** ./src/app/drp-dialog.component.ts ***!
    \*****************************************/

  /*! exports provided: DialogComponent */

  /***/
  function srcAppDrpDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogComponent", function () {
      return DialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function DialogComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogComponent_ng_template_6_Template_mat_select_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.data.drp.cl_value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Negotiation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mediation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Arbitration");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Litigation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.data.drp.cl_value);
      }
    }

    function DialogComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogComponent_ng_template_7_Template_mat_select_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.data.drp.cl_value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Trust is key");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A bit of risk is OK");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "I take calculated risks");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Why should I take risks?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.data.drp.cl_value);
      }
    }

    function DialogComponent_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogComponent_ng_template_8_Template_mat_select_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.data.drp.de_value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Negotiation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mediation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Arbitration");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Litigation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.data.drp.de_value);
      }
    }

    function DialogComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogComponent_ng_template_9_Template_mat_select_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.data.drp.de_value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Trust is key");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A bit of risk is OK");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "I take calculated risks");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Why should I take risks?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.data.drp.de_value);
      }
    }

    var DialogComponent = /*#__PURE__*/function () {
      function DialogComponent(data) {
        _classCallCheck(this, DialogComponent);

        this.data = data;
      }

      _createClass(DialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //Check bij welke tab hij is, 0 = Claimant, 1 = Defendant, 2 = Analysis 
          //Provide data for Switch statement, to select correct form
          if (this.data.tab == 0 && this.data.drp.name == 'Procedural preference') {
            this.Qtable = 'claimant-proc_pref';
          }

          ;

          if (this.data.tab == 0 && this.data.drp.name == 'Uncertainty Avoidance Index') {
            this.Qtable = 'claimant-UAI';
          }

          ;

          if (this.data.tab == 1 && this.data.drp.name == 'Procedural preference') {
            this.Qtable = 'defendant-proc_pref';
          }

          ;

          if (this.data.tab == 1 && this.data.drp.name == 'Uncertainty Avoidance Index') {
            this.Qtable = 'defendant-UAI';
          }

          ;
        }
      }]);

      return DialogComponent;
    }();

    DialogComponent.ɵfac = function DialogComponent_Factory(t) {
      return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogComponent,
      selectors: [["drp-dialogbox"]],
      decls: 18,
      vars: 8,
      consts: [["mat-dialog-title", "", 1, "primary-color"], [1, "accent-color"], [3, "ngSwitch"], ["ngSwitchDefault", "", 3, "ngSwitchCase"], [3, "ngSwitchCase"], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", "save"], ["mat-raised-button", "", "color", "secondary", "mat-dialog-close", "exclude"], ["name", "cl_Pref", 3, "ngModel", "ngModelChange"], ["value", "20"], ["value", "40"], ["value", "60"], ["value", "80"], ["name", "cl_UAI", 3, "ngModel", "ngModelChange"], ["name", "de_Pref", 3, "ngModel", "ngModelChange"], ["name", "de_UAI", 3, "ngModel", "ngModelChange"]],
      template: function DialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DialogComponent_ng_template_6_Template, 10, 1, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DialogComponent_ng_template_7_Template, 10, 1, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DialogComponent_ng_template_8_Template, 10, 1, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DialogComponent_ng_template_9_Template, 10, 1, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Exclude");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.drp.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.drp.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.Qtable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "claimant-proc_pref");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "claimant-UAI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "defendant-proc_pref");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "defendant-UAI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.drp.value_input_instruct);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'drp-dialogbox',
          templateUrl: 'drp-dialog.component.html'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/drp-scriptloader.ts":
  /*!*************************************!*\
    !*** ./src/app/drp-scriptloader.ts ***!
    \*************************************/

  /*! exports provided: ScriptStore, Script */

  /***/
  function srcAppDrpScriptloaderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScriptStore", function () {
      return ScriptStore;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Script", function () {
      return Script;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * SCRIPT SERVICE
     * from example script.service.ts
     */


    var ScriptStore = [{
      name: 'googlechart',
      src: 'https://www.gstatic.com/charts/loader.js'
    }];

    var Script = /*#__PURE__*/function () {
      function Script() {
        var _this3 = this;

        _classCallCheck(this, Script);

        this.scripts = {};
        ScriptStore.forEach(function (script) {
          _this3.scripts[script.name] = {
            loaded: false,
            src: script.src
          };
        });
      }

      _createClass(Script, [{
        key: "load",
        value: function load() {
          var _this4 = this;

          var promises = [];

          for (var _len = arguments.length, scripts = new Array(_len), _key = 0; _key < _len; _key++) {
            scripts[_key] = arguments[_key];
          }

          scripts.forEach(function (script) {
            return promises.push(_this4.loadScript(script));
          });
          return Promise.all(promises);
        }
      }, {
        key: "loadScript",
        value: function loadScript(name) {
          var _this5 = this;

          return new Promise(function (resolve, reject) {
            //resolve if already loaded
            if (_this5.scripts[name].loaded) {
              resolve({
                script: name,
                loaded: true,
                status: 'Already Loaded'
              });
            } else {
              //load script
              var script = document.createElement('script');
              script.type = 'text/javascript';
              script.src = _this5.scripts[name].src;

              if (script.readyState) {
                //IE
                script.onreadystatechange = function () {
                  if (script.readyState === "loaded" || script.readyState === "complete") {
                    script.onreadystatechange = null;
                    _this5.scripts[name].loaded = true;
                    resolve({
                      script: name,
                      loaded: true,
                      status: 'Loaded'
                    });
                  }
                };
              } else {
                //Others
                script.onload = function () {
                  _this5.scripts[name].loaded = true;
                  resolve({
                    script: name,
                    loaded: true,
                    status: 'Loaded'
                  });
                };
              }

              script.onerror = function (error) {
                return resolve({
                  script: name,
                  loaded: false,
                  status: 'OnError'
                });
              };

              document.getElementsByTagName('head')[0].appendChild(script);
              /* SPECIALE FUNCTIE VOOR INLINE SCRIPT */

              var script_inline = document.createElement('script');
              script_inline.type = 'text/javascript';
              script_inline.text = "var googleLoaded = false; var googleChartsPackagesToLoad = ['BarChart', 'Gauge'];";
              document.getElementsByTagName('head')[0].appendChild(script_inline);
            }
          });
        }
      }]);

      return Script;
    }();

    Script.ɵfac = function Script_Factory(t) {
      return new (t || Script)();
    };

    Script.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Script,
      factory: Script.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Script, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/drp.component.ts":
  /*!**********************************!*\
    !*** ./src/app/drp.component.ts ***!
    \**********************************/

  /*! exports provided: DRPComponent */

  /***/
  function srcAppDrpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DRPComponent", function () {
      return DRPComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _drp_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./drp-dialog.component */
    "./src/app/drp-dialog.component.ts");
    /* harmony import */


    var _drpservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./drpservice */
    "./src/app/drpservice.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _dc_drp_graphs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dc.drp-graphs.component */
    "./src/app/dc.drp-graphs.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function DRPComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DRPComponent_li_7_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var drpitem_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.openDialog(drpitem_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var drpitem_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](drpitem_r2.status_icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", drpitem_r2.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", drpitem_r2.value_description, " ", drpitem_r2.cl_value, "");
      }
    }

    function DRPComponent_li_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DRPComponent_li_16_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var drpitem_r5 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.openDialog(drpitem_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var drpitem_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", drpitem_r5.status_icon, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", drpitem_r5.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", drpitem_r5.value_description, " ", drpitem_r5.de_value, "");
      }
    }

    var DRPComponent = /*#__PURE__*/function () {
      function DRPComponent(_drpService, dialog) {
        _classCallCheck(this, DRPComponent);

        this._drpService = _drpService;
        this.dialog = dialog;
      }

      _createClass(DRPComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData("drpdata"); //ga door bij laatste tab of begin bij UNCITRAL tab

          var tab = this._drpService.getTabStatus('drptab');

          if (tab == null) {
            this._drpService.setTabStatus('drptab', 3);

            this.selectedIndex = 3;
          } //set tab on 0 on first go
          else {
              this.selectedIndex = Number(tab);
            } //static fingerprint data


          this.cl_fingerprint = '#9KL473LK';
          this.de_fingerprint = '#7EL897KI';
        }
      }, {
        key: "getData",
        value: function getData(key) {
          var _this6 = this;

          this._drpService.getBaseData(key).then(function (drpdata) {
            return _this6.drpdata = drpdata;
          });
        }
      }, {
        key: "persistData",
        value: function persistData(key) {
          var test = this._drpService.storeToPersist(key, this.drpdata);
        }
      }, {
        key: "resetData",
        value: function resetData() {
          this._drpService.resetPersist(); //TODO, RELOAD ORIGINAL DATA, BELOW DOESN'T WORK

        } //Open popup window en stuur object er naar toe

      }, {
        key: "openDialog",
        value: function openDialog(drpdata) {
          var _this7 = this;

          //initiate dialogbox and send data
          var dialogRef = this.dialog.open(_drp_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"], {
            width: '324px',
            data: {
              drp: drpdata,
              tab: this.selectedIndex
            }
          }); //result back

          dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'exclude') {
              drpdata.status_icon = 'block'; //set checkmark icon
              //use tab selector to see if claimant or defendant provided data

              if (_this7._drpService.getTabStatus('drptab') == 0) {
                drpdata.cl_value = 'none (excluded)';
              } else {
                drpdata.de_value = 'none (excluded)';
              } //TODO, REMOVE VALUE FROM CORRECT DRPDATA...


              _this7.persistData('drpdata');
            }

            if (result == 'save') {
              drpdata.status_icon = 'done'; //set checkmark icon

              _this7.persistData('drpdata'); //store data in localstorage

            }
          });
        } //Check bij welke tab hij is, 0 = Claimant, 1 = Defendant, 2 = Analysis 

      }, {
        key: "selectedIndexChange",
        value: function selectedIndexChange(val) {
          this.selectedIndex = val; //for in the page

          this._drpService.setTabStatus('drptab', val); //for persisting outside page

        }
      }, {
        key: "gotoClaimant",
        value: function gotoClaimant() {
          this.selectedIndex = 0;
        } //2 is index number of analysis tab

      }, {
        key: "gotoDefendant",
        value: function gotoDefendant() {
          this.selectedIndex = 1;
        } //2 is index number of analysis tab

      }, {
        key: "gotoAnalysis",
        value: function gotoAnalysis() {
          this.selectedIndex = 2;
        } //2 is index number of analysis tab

      }]);

      return DRPComponent;
    }();

    DRPComponent.ɵfac = function DRPComponent_Factory(t) {
      return new (t || DRPComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_drpservice__WEBPACK_IMPORTED_MODULE_2__["DRPService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]));
    };

    DRPComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DRPComponent,
      selectors: [["app-root"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([])],
      decls: 74,
      vars: 8,
      consts: [["id", "drp-main", "fxLayout", "column", "fxLayoutAlign", "start center"], ["id", "drp-inner", "fxLayout", "column"], ["dynamicHeight", "true", 3, "selectedIndex", "selectedIndexChange"], ["label", "Claimant"], [1, "drp-mainfields"], [4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Example fingerprint (in blockchain)", "disabled", "", 3, "value"], ["mat-raised-button", "", "color", "secondary", "mat-button", "", 3, "click"], ["label", "Defendant"], ["label", "Analysis"], [2, "color", "red", "font-weight", "700"], [2, "color", "blue", "font-weight", "bold"], [3, "tabchange"], ["label", "UNCITRAL 2017"], ["href", "https://au.linkedin.com/in/dr-dalma-r-demeter-849aa1a", "target", "_blank"], ["href", "http://www.uncitral.org/pdf/english/congress/Draft_Programme_170517.pdf", "target", "_blank"], ["href", "https://undocs.org/en/A/72/17", "target", "_blank"], ["href", "https://www.legallinq.com/UNCITRAL_2017_Dispute_Resolution_Presentation/assets/98-DEMETER_and_KNIJPENGA-Putting_technology_at_the_service_of_access_to_justice.pdf", "target", "_blank"], ["mat-raised-button", "", 3, "click"], ["mat-button", "", 3, "click"]],
      template: function DRPComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab-group", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function DRPComponent_Template_mat_tab_group_selectedIndexChange_2_listener($event) {
            return ctx.selectedIndexChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Claimant profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DRPComponent_li_7_Template, 7, 4, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DRPComponent_Template_button_click_10_listener() {
            return ctx.gotoAnalysis();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Analyse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-tab", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Defendant Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DRPComponent_li_16_Template, 7, 4, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DRPComponent_Template_button_click_19_listener() {
            return ctx.gotoAnalysis();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Analyse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-tab", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "DEMO Analysis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "This is NOT legal advise, just a demonstration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Fingerprints: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "dynamic-content", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-tab", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "PRESENTATION 50TH ANNIVERSARY UNCITRAL CONGRESS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "This demo was shown at the UNCITRAL Congress 2017 as part of new frontiers in dispute settlement. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Dr Dalma R. Demeter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " showed it in the jointly prepared ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "presentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " with title \"The use of technology in dispute settlement\". The demo shows how culture elements can be taken into consideration when determining the best dispute resolution option for a certain case.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "In the report to the General Assembly of the United Nations regarding the 50th Session of UNCITRAL, the presentation is referred to in paragraph 408:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\"The third panel, on new frontiers in dispute settlement, had covered developments in the field of [...] solutions of a technological nature to enhance access to justice.\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "DEMO UNCITRAL 2017");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "This prototype demonstrates what a small part of the application may become.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Feel free to test it");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "For background please read");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " the paper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " by Dalma Demeter and Jeroen Knijpenga.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DRPComponent_Template_button_click_65_listener() {
            return ctx.gotoClaimant();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Start as Claimant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DRPComponent_Template_button_click_67_listener() {
            return ctx.gotoDefendant();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Start as Defendant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DRPComponent_Template_button_click_70_listener() {
            return ctx.resetData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Reset Profile Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.drpdata);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.cl_fingerprint);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.drpdata);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.de_fingerprint);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cl_fingerprint);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.de_fingerprint);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabchange", ctx.selectedIndex);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _dc_drp_graphs_component__WEBPACK_IMPORTED_MODULE_9__["DCMainComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]],
      styles: ["#drp-main[_ngcontent-%COMP%]{ \r\n    min-height:calc(100vh - 181px);\r\n}\r\n#drp-inner[_ngcontent-%COMP%]{ \r\n    width:599px; \r\n    padding-top:5vh;\r\n}\r\n@media (max-width: 599px) {\r\n    html[_ngcontent-%COMP%] { overflow-y: scroll; }\r\n}\r\n.mat-tab-group[_ngcontent-%COMP%] {\r\n        align-items: center;\r\n        min-width:360px;\r\n        max-width: 800px;\r\n        white-space:nowrap;\r\n      }\r\n.mat-tab-group[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%]{\r\n  flex-basis: inherit;\r\n}\r\n.drp-mainfields[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { \r\n  width: 250px;\r\n  padding-left: 12px;\r\n  margin-top: 2em;\r\n    }\r\n.drp-mainfields[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n}\r\n.drp-mainfields[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-size: x-small;\r\n}\r\n.mat-tab-group[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]{\r\n  max-width: 90vw;\r\n}\r\np[_ngcontent-%COMP%]{\r\n  white-space: normal;\r\n}\r\np[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  margin-left: 16px; \r\n  margin-right: 16px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBRUE7SUFDSSxPQUFPLGtCQUFrQixFQUFFO0FBQy9CO0FBRUE7UUFDUSxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixrQkFBa0I7TUFDcEI7QUFDTjtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0lBQ2I7QUFDSjtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9kcnAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkcnAtbWFpbnsgXHJcbiAgICBtaW4taGVpZ2h0OmNhbGMoMTAwdmggLSAxODFweCk7XHJcbn1cclxuI2RycC1pbm5lcnsgXHJcbiAgICB3aWR0aDo1OTlweDsgXHJcbiAgICBwYWRkaW5nLXRvcDo1dmg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gICAgaHRtbCB7IG92ZXJmbG93LXk6IHNjcm9sbDsgfVxyXG59XHJcblxyXG4ubWF0LXRhYi1ncm91cCB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtaW4td2lkdGg6MzYwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgICAgIH1cclxuLm1hdC10YWItZ3JvdXAgLm1hdC10YWItaGVhZGVye1xyXG4gIGZsZXgtYmFzaXM6IGluaGVyaXQ7XHJcbn1cclxuLmRycC1tYWluZmllbGRzIGJ1dHRvbiB7IFxyXG4gIHdpZHRoOiAyNTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgfVxyXG4uZHJwLW1haW5maWVsZHMgbGl7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uZHJwLW1haW5maWVsZHMgcHtcclxuICBmb250LXNpemU6IHgtc21hbGw7XHJcbn1cclxuLm1hdC10YWItZ3JvdXAgLm1hdC1kaWFsb2ctY29udGFpbmVye1xyXG4gIG1heC13aWR0aDogOTB2dztcclxufVxyXG5we1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxucCBoMntcclxuICBtYXJnaW4tbGVmdDogMTZweDsgXHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DRPComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: 'drp.component.html',
          styleUrls: ['./drp.component.css'],
          providers: []
        }]
      }], function () {
        return [{
          type: _drpservice__WEBPACK_IMPORTED_MODULE_2__["DRPService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/drp.module.ts":
  /*!*******************************!*\
    !*** ./src/app/drp.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppDrpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-2-local-storage */
    "./node_modules/angular-2-local-storage/__ivy_ngcc__/fesm2015/angular-2-local-storage.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _drp_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./drp.component */
    "./src/app/drp.component.ts");
    /* harmony import */


    var _angular2_google_chart_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./angular2-google-chart.directive */
    "./src/app/angular2-google-chart.directive.ts");
    /* harmony import */


    var _drp_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./drp-dialog.component */
    "./src/app/drp-dialog.component.ts");
    /* harmony import */


    var _dc_drp_graphs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./dc.drp-graphs.component */
    "./src/app/dc.drp-graphs.component.ts");
    /* harmony import */


    var _drpservice__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./drpservice */
    "./src/app/drpservice.ts");
    /* harmony import */


    var _drp_scriptloader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./drp-scriptloader */
    "./src/app/drp-scriptloader.ts"); //import { HttpModule } from '@angular/http'; depreciated, vervanging:


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_drp_component__WEBPACK_IMPORTED_MODULE_16__["DRPComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_drpservice__WEBPACK_IMPORTED_MODULE_20__["DRPService"], _dc_drp_graphs_component__WEBPACK_IMPORTED_MODULE_19__["DynamicContentService"], _drp_scriptloader__WEBPACK_IMPORTED_MODULE_21__["Script"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_5__["LocalStorageModule"].forRoot({
        prefix: 'llqdrp',
        storageType: 'localStorage'
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_drp_component__WEBPACK_IMPORTED_MODULE_16__["DRPComponent"], _drp_dialog_component__WEBPACK_IMPORTED_MODULE_18__["DialogComponent"], _angular2_google_chart_directive__WEBPACK_IMPORTED_MODULE_17__["GoogleChartDirective"], _dc_drp_graphs_component__WEBPACK_IMPORTED_MODULE_19__["DCMainComponent"], _dc_drp_graphs_component__WEBPACK_IMPORTED_MODULE_19__["DCDataComponent"], _dc_drp_graphs_component__WEBPACK_IMPORTED_MODULE_19__["DCDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_5__["LocalStorageModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_drp_component__WEBPACK_IMPORTED_MODULE_16__["DRPComponent"], _drp_dialog_component__WEBPACK_IMPORTED_MODULE_18__["DialogComponent"], _angular2_google_chart_directive__WEBPACK_IMPORTED_MODULE_17__["GoogleChartDirective"], _dc_drp_graphs_component__WEBPACK_IMPORTED_MODULE_19__["DCMainComponent"], _dc_drp_graphs_component__WEBPACK_IMPORTED_MODULE_19__["DCDataComponent"], _dc_drp_graphs_component__WEBPACK_IMPORTED_MODULE_19__["DCDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_5__["LocalStorageModule"].forRoot({
            prefix: 'llqdrp',
            storageType: 'localStorage'
          })],
          providers: [_drpservice__WEBPACK_IMPORTED_MODULE_20__["DRPService"], _dc_drp_graphs_component__WEBPACK_IMPORTED_MODULE_19__["DynamicContentService"], _drp_scriptloader__WEBPACK_IMPORTED_MODULE_21__["Script"]],
          entryComponents: [_drp_dialog_component__WEBPACK_IMPORTED_MODULE_18__["DialogComponent"], _dc_drp_graphs_component__WEBPACK_IMPORTED_MODULE_19__["DCMainComponent"], _dc_drp_graphs_component__WEBPACK_IMPORTED_MODULE_19__["DCDataComponent"]],
          bootstrap: [_drp_component__WEBPACK_IMPORTED_MODULE_16__["DRPComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/drpBaseData.ts":
  /*!********************************!*\
    !*** ./src/app/drpBaseData.ts ***!
    \********************************/

  /*! exports provided: DRPMOCKDATA */

  /***/
  function srcAppDrpBaseDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DRPMOCKDATA", function () {
      return DRPMOCKDATA;
    });

    var DRPMOCKDATA = [
    /*	{
            "id" : 0,
            "name" : "",
            "description" : "",
            "cl_value" : "",
            "value_description" : "",
            "value_input_instruct" : ""
        },
    */
    {
      "id": 0,
      "name": "Uncertainty Avoidance Index",
      "description": "A cultural element that measures the relative risk avoidance.",
      "cl_value": "50",
      "de_value": "50",
      "value_description": "The percentage of UAI is:",
      "value_input_instruct": "Please make a choice or 'EXCLUDE'.",
      "status_icon": "edit"
    }, {
      "id": 1,
      "name": "Procedural preference",
      "description": "Preferences on a dispute resolution continuum.",
      "cl_value": "40",
      "de_value": "40",
      "value_description": "On a dispute resolution continuum scale: ",
      "value_input_instruct": "Please make a choice or 'EXCLUDE'.",
      "status_icon": "edit"
    }];
    /***/
  },

  /***/
  "./src/app/drpservice.ts":
  /*!*******************************!*\
    !*** ./src/app/drpservice.ts ***!
    \*******************************/

  /*! exports provided: DRPService */

  /***/
  function srcAppDrpserviceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DRPService", function () {
      return DRPService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _drpBaseData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./drpBaseData */
    "./src/app/drpBaseData.ts");
    /* harmony import */


    var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-2-local-storage */
    "./node_modules/angular-2-local-storage/__ivy_ngcc__/fesm2015/angular-2-local-storage.js");

    var DRPService = /*#__PURE__*/function () {
      function DRPService( //API https://github.com/grevory/angular-local-storage
      localStorageService) {
        _classCallCheck(this, DRPService);

        this.localStorageService = localStorageService;
      }

      _createClass(DRPService, [{
        key: "getBaseData",
        value: function getBaseData(key) {
          var stored_data = this.localStorageService.get(key); //geen stored data dan standaard static data

          var dataToSend = _drpBaseData__WEBPACK_IMPORTED_MODULE_1__["DRPMOCKDATA"];

          if (stored_data) {
            for (var key in dataToSend) {
              dataToSend[key] = stored_data[key];
            }
          }

          return Promise.resolve(dataToSend);
        }
      }, {
        key: "getIndividualData",
        value: function getIndividualData(id) {
          return Promise.resolve(_drpBaseData__WEBPACK_IMPORTED_MODULE_1__["DRPMOCKDATA"]).then(function (DRPdata) {
            return DRPdata.filter(function (h) {
              return h.id === id;
            })[0];
          });
        }
      }, {
        key: "storeToPersist",
        value: function storeToPersist(key, drpvalues) {
          //TODO: maybe filter only values, but lot of trouble for not much fun
          return this.localStorageService.set(key, drpvalues);
        }
      }, {
        key: "resetPersist",
        value: function resetPersist() {
          this.localStorageService.clearAll();
        } //tab status on DRP mainpage

      }, {
        key: "getTabStatus",
        value: function getTabStatus(page) {
          return this.localStorageService.get(page);
        }
      }, {
        key: "setTabStatus",
        value: function setTabStatus(page, no) {
          return this.localStorageService.set(page, no);
        }
      }, {
        key: "getSuveyJson",
        value: function getSuveyJson(id) {
          var surveyJSON;
          console.log('Survey ID requested: ' + id);
          if (id === 0) return surveyJSON = {
            pages: [{
              name: "page1",
              elements: [{
                type: "panel",
                name: "panel1",
                elements: [{
                  type: "radiogroup",
                  choices: ["item1", "item2", "item3"],
                  name: "question1"
                }],
                title: "wt is het"
              }]
            }]
          };
        }
      }]);

      return DRPService;
    }();

    DRPService.ɵfac = function DRPService_Factory(t) {
      return new (t || DRPService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]));
    };

    DRPService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DRPService,
      factory: DRPService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DRPService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_drp_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/drp.module */
    "./src/app/drp.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_drp_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\jknij\Documents\SiteCodeUNCITRAL2017\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map