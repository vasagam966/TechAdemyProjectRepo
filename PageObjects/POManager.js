const{AdminDashBoard}=require('./AdminDashBoard');
const{SigninPage}=require('./Signinpage');
const{UserManagementPage}=require('./UserManagementPage')
const{SkillsAndEcoSystemsPage}=require('./SkillsAndEcoSystemsPage');
const{LearningPathPage}=require('./LearningPath')
const {ProgramManagerPage}= require('./ProgramManager')
const {EnrollmentManagerPage} = require('./EnrollmentManagementPage')
const{VirtualClassroomPage}= require('./VirtualClassroomPage');

class POManager {
    constructor(page) {
        this.page = page;
        this.signinPage = new SigninPage(this.page);
        this.adminDashBoard = new AdminDashBoard(this.page);
        this.userManagementPage = new UserManagementPage(this.page);
        this.skillsAndEcosystemsPage = new SkillsAndEcoSystemsPage(this.page);
        this.learningPathPage = new LearningPathPage(this.page);
        this.ProgramManagerPage = new ProgramManagerPage(this.page);
        this.enrollmentManagementPage = new EnrollmentManagerPage(this.page);
        this.virtualClassroomPage = new VirtualClassroomPage(this.page);
    }
    getSigninPage() {
        return this.signinPage;
    }  
    getAdminDashBoard() {
        return this.adminDashBoard;
    }
    getUserManagementPage() {
        return this.userManagementPage;
    }
    getSkillsAndEcosystemsPage() {
        return this.skillsAndEcosystemsPage;
    }
    getLearningPathPage() {
        return this.learningPathPage;
    }
    getProgramManagerPage(){
        return this.ProgramManagerPage;
    }
    getenrollmentManagementPage(){
        return this.enrollmentManagementPage;
    }
    getVirtualClassroomPage(){
        return this.virtualClassroomPage;
    }
}
module.exports = { POManager };