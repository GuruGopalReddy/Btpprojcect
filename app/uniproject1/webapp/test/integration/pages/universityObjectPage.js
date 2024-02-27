sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'uniproject1',
            componentId: 'universityObjectPage',
            contextPath: '/university'
        },
        CustomPageDefinitions
    );
});