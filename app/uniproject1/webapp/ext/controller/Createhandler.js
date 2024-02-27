// sap.ui.define([
//     "sap/m/MessageToast"
// ], function(MessageToast) {
//     'use strict';

//     return {
//         createmethod: function(oEvent) {
//             MessageToast.show("Custom handler invoked.");
//         }
//     };
// });

sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"

], function(MessageToast, Fragment,oDialog) {
    'use strict';

    return {
        createmethod: function(oEvent) {
            debugger
            this.loadFragment({
                id: "Create",
                name: "uniproject1.ext.fragment.createhand"
                // controller: this // Pass the correct context
            }).then(function (oDialog) {
                oDialog.open();
            })
        },
        handlediscard:function(oEvent){
            debugger
            var a = oEvent.oSource.getParent().getParent().close();
            a.close();
            a.destroy();
        },
        handlesave:function(oEvent){
            debugger
            var uni_no = oEvent.oSource.oParent.mAggregations.items[1].mProperties.value;
            
            var uni_name = oEvent.oSource.oParent.mAggregations.items[3].mProperties.value;
            var uni_type = oEvent.oSource.oParent.mAggregations.items[5].mProperties.value;
            let testdata = JSON.stringify({ university_no:uni_no,university_name:uni_name,university_type:uni_type });
            $.ajax({
                url: '/odata/v4/my/university',
                type: 'POST',
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