sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,JSONModel) {
		"use strict";

		return Controller.extend("ui5cdswithparams.controller.View1", {
			onInit: function () {
				//debugger
			
			
		
		},
		addTable:function(){
			debugger
			var object= this.getView().byId("obj")
			object.bindAggregation("items", {
				path: "model2>/selected",
				template: new sap.m.ObjectListItem({
					title: "{model2>Employeeid}",
					number: "{model2>Employeename}",
					numberUnit: "{model2>Employeedesignation}",
				})
			});
		},
			getData:function(){
				debugger;
				var that=this;
               var desig=this.getView().byId("desig").getValue();
			   desig=desig.toUpperCase()
				var oModel=this.getOwnerComponent().getModel();
                 oModel .read("/ZLKC_EMPLOYEEPARAMS(p_empdesignation='"+desig+"')/Set",  {
                    
                     success: function(data) {
                     // alert("success");
					  console.log(data)
// debugger
                    that.getOwnerComponent().setModel(new JSONModel({selected:data.results}),"model2")
                    that.addTable()
					sap.m.MessageToast.show("New object Added Succesfully!!!");
                    },
                     error: function(e) {
						 console.log(e)
                      alert("error");
                    }
                 });
                
			},
			getallData:function(){
				debugger;
               
				var oModel=this.getOwnerComponent().getModel("model1");
                 oModel .read("/ZC_LK_EMP",  {
                    
                     success: function(data) {
                      alert("success");
					  console.log(data)
                    
                    sap.m.MessageToast.show("New object Added Succesfully!!!");
                    },
                     error: function(e) {
						 console.log(e)
                      alert("error");
                    }
                 });
                
			},
		});
	});
