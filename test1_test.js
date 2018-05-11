
Feature('prrab test');

Scenario('test something', (I) => {
I.amOnPageWithAlert('127.0.0.1');
I.seeInPopup('Привет');
});
