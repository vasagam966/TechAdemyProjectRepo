const {test,expect} = require('@playwright/test');
const {POManager}=require('../PageObjects/POManager');
import { faker } from '@faker-js/faker';
const testdata=JSON.parse( JSON.stringify(require('../TestData/signInPageTestData.json')));



test.beforeEach(async({page})=>{
    const poManager=new POManager(page);
    const signinPage=poManager.getSigninPage();
    await signinPage.navigate(testdata.url);
    await signinPage.enterEmail(testdata.adminusername);
    await signinPage.enterPassword(testdata.password);
    await signinPage.clickSignin();
    await expect(page).toHaveURL("https://skill-assist.ai/QapitolQA/dashboard");
    //await page.waitForTimeout(5000);
});
test('Test Creating Batch and session In Virtual Classroom and enroll the batch',async({page})=>{

    const poManager=new POManager(page);
    const adminDashBoard=poManager.getAdminDashBoard();
    const virtualClassroomPage =poManager.getVirtualClassroomPage();
    let programmanagerPage= poManager.getProgramManagerPage();

    await adminDashBoard.clickVirtualClassroomModule();
    await virtualClassroomPage.clickCreateBatchButton();
    const BatchTitle = `PlaywrightBatch${fakerdatatype.number({ min: 100, max: 999 })}`;
    console.log(BatchTitle);
    await virtualClassroomPage.enterBatchTitle(BatchTitle);
    await  virtualClassroomPage.enterBatchDescription("des");
    await virtualClassroomPage.enterStartdate(programmanagerPage.getStartDate());
    await virtualClassroomPage.enterEnddate(programmanagerPage.getEndDate());
    await virtualClassroomPage.clickCreateBatchButtonInDialogBox();
    await virtualClassroomPage.clickbatchesTab();
    await virtualClassroomPage.clickLearnersButton(BatchTitle);
    await virtualClassroomPage.searchusers(testdata.learneremail);
    await virtualClassroomPage.clickaddUserButton(testdata.learneremail);
    await virtualClassroomPage.searchusers(testdata.learneremail2);
    await virtualClassroomPage.clickaddUserButton(testdata.learneremail2);
    await virtualClassroomPage.closedialog();
    await page.waitForTimeout(5000);
    await virtualClassroomPage.clickCreateSessionButton();
    const sessionTitle = `PlaywrightSession${faker.number.int({ min: 100, max: 999 })}`;
    await virtualClassroomPage.entersessionTitle(sessionTitle);
    await virtualClassroomPage.enterSessionDescription("des");
    await virtualClassroomPage.selectInstructor("David Martinez");
    await virtualClassroomPage.selectBatch(BatchTitle);
    await virtualClassroomPage.entersessionStartTime(virtualClassroomPage.getStartTime());
    await virtualClassroomPage.entersessionEndTime(virtualClassroomPage.getEndTime());
    await virtualClassroomPage.clickcreateSessionButtonInDialog();
    await page.waitForTimeout(5000);
    await virtualClassroomPage.clickSessionsTab();
    await virtualClassroomPage.searchSessions(sessionTitle);
    await expect(page.locator('h3', { hasText: sessionTitle })).toBeVisible();
    await page.waitForTimeout(5000);
    

});