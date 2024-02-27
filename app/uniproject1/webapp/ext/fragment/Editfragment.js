// sap.ui.define([
//     "sap/m/MessageToast"
// ], function(MessageToast) {
//     'use strict';

//     return {
//         onEdit: function(oEvent) {
//             MessageToast.show("Custom handler invoked.");
//         }
//     };
// });

sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onEdit: function(oEvent) {
            debugger
            this.loadFragment({
                id: "Edit",
                name: "uniproject1.ext.fragment.Edit1"
                // controller: this // Pass the correct context
            }).then(function (oDialog) {
                debugger
                var uni_no1 = oEvent.oSource.oParent.mAggregations.cells[0].mProperties.text;
                var uni_name1 = oEvent.oSource.oParent.mAggregations.cells[1].mProperties.text;
                var uni_type1 = oEvent.oSource.oParent.mAggregations.cells[2].mProperties.text;
               
                sap.ui.getCore().byId("Edit--Edit").mAggregations.content[0].mAggregations.items[1].setValue(uni_no1)
                sap.ui.getCore().byId("Edit--Edit").mAggregations.content[0].mAggregations.items[3].setValue(uni_name1)
                sap.ui.getCore().byId("Edit--Edit").mAggregations.content[0].mAggregations.items[5].setValue(uni_type1)
                oDialog.open();
            })
        },
        handleUpdate:function(oEvent){
            debugger
            var uni_no = oEvent.oSource.oParent.mAggregations.items[1].mProperties.value;
            
            var uni_name = oEvent.oSource.oParent.mAggregations.items[3].mProperties.value;
            var uni_type = oEvent.oSource.oParent.mAggregations.items[5].mProperties.value;
            let testdata = JSON.stringify({ university_no:uni_no,university_name:uni_name,university_type:uni_type });
            var url = '/odata/v4/my/university/' + uni_no;
            $.ajax({
                url: url,
                type: 'PUT',
                contentType: 'application/json',
                data: testdata, 
                success: function(data) {
                    debugger
                    // Handle success
                    console.log(data);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // Handle error
                    console.error(textStatus, errorThrown);
                }
            })
            var a = oEvent.oSource.getParent().getParent().close();
            a.close();

        }
    };
});

