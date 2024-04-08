sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (MessageToast, Controller, JSONModel) {
	"use strict";

	return Controller.extend("ns.winning_product_uploads.Card", {
		onInit: function () {
            var cardId = "ns.winning_product_uploads";
            cardId = cardId.replace(/\./g,'/');
			var oImgModel = new JSONModel({
                Image_1 : sap.ui.require.toUrl(cardId + "/images") + "/Image_1.png"
            });
			this.getView().setModel(oImgModel, "images");
		},
		onAfterRendering: function () {
			let oController = this;
			let oView = this.getView();
			let oDemoData = [
				{
					"logid" : "0001",
					"jobstatus" : "success",
					"uploadedby" : "user1",
					"date" : "01/01/2024"
				},
				{
					"logid" : "0002",
					"jobstatus" : "success",
					"uploadedby" : "user1",
					"date" : "01/01/2024"
				},
				{
					"logid" : "0003",
					"jobstatus" : "success",
					"uploadedby" : "user1",
					"date" : "01/01/2024"
				}
			];

			let oModel = new sap.ui.model.json.JSONModel(oDemoData);
			oView.setModel(oModel);
			oView.bindElement("/");
			console.log(oView.getBindingContext().getObject());
		}
	});
});