sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'uniproject1/test/integration/FirstJourney',
		'uniproject1/test/integration/pages/universityList',
		'uniproject1/test/integration/pages/universityObjectPage'
    ],
    function(JourneyRunner, opaJourney, universityList, universityObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('uniproject1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheuniversityList: universityList,
					onTheuniversityObjectPage: universityObjectPage
                }
            },
            opaJourney.run
        );
    }
);