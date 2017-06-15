describe("Medo City POC",function()
{
	var locatorReader;
	var driverTestCase;
	var driverHelper;
	var tc_001_Helper;
	
	var TC_001 = constructor()
	{
		locatorReader = require('../Locators/LocatorReader.js');
		driverTestCase = require('../util/DriverTestCase.js');
		tc_001_Helper = require('../Helper/TC_001_Helper.js');
		locatorReader.setLocatorFile('TC_001_Locator.json');
		driverTestCase.setUp();		
	};
	
	it('Should be able to open the Senior living page',function()
	{
			var locator = locatorReader.searchLocator("Solutions");
			tc_001_Helper.mouseHoverOnItem(locator);
					
			locator = locatorReader.searchLocator("SeniorLiving");
			tc_001_Helper.clickOnItem(locator);
			
			tc_001_Helper.verifyUserRedirectedOnOtherPage("headingSeniorliving");
	});
});