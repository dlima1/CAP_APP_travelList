sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sap/fioriopensap/travellist/test/integration/pages/MainListReport' ,
        'sap/fioriopensap/travellist/test/integration/pages/MainObjectPage',
        'sap/fioriopensap/travellist/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sap/fioriopensap/travellist') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);