
'use strict';

class Help1 extends Helper {

  // before/after hooks
  _before() {
    // remove if not used
  }

  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
	async amOnPageWithAlert(url) {
	let browser = this.helpers ['WebDriverIO'];
	browser.amOnPage(url);
	}
}

module.exports = Help1;
