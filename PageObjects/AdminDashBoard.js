class AdminDashBoard {
    constructor(page) {
        this.page = page;
        this.learnerhubModuleLink =page.getByRole('heading', { level: 3, name: 'Learner Hub' });
        this.userManagementModuleLink = page.getByRole('heading', { level: 3, name: 'User Management' });
        this.skillsAndEcosystemsModuleLink = page.getByRole('heading', { level: 3, name: 'Skills & Ecosystems' });
        this.rolesAndCarrersModuleLink = page.getByRole('heading', { level: 3, name: 'Roles & Careers' });
        this.coursesAndMappingHubModuleLink = page.getByRole('heading', { level: 3, name: 'Courses & Mapping Hub' });
        this.EnrollmentManagementModuleLink = page.getByRole('heading', { level: 3, name: 'Enrollment Management' });
        this.assignmentsModuleLink = page.getByRole('heading', { level: 3, name: 'Assignments' });
        this.programManagerModuleLink = page.getByRole('heading', { level: 3, name: 'Program Manager' });
        this.learningPathsModuleLink = page.getByRole('heading', { level: 3, name: 'Learning Paths',exact:true });
        this.aiLearningPathModuleLink = page.getByRole('heading', { level: 3, name: 'AI Learning Paths',exact:true });
        this.virtualClassroomModuleLink = page.getByRole('heading', { level: 3, name: 'Virtual Classroom' });
        this.aiAssessmentsModuleLink = page.getByRole('heading', { level: 3, name: 'AI Assessments' });
        this.certificationModuleLink = page.getByRole('heading', { level: 3, name: 'Certifications' });
        this.profileButton =this.page.getByText('Admin', { exact: true });
        this.logoutButton =this.page.getByText('Log out', { exact: true });
    }
    async clickLearnerhubModule() {
        await this.learnerhubModuleLink.click();
    }
    async clickUserManagementModule() {
        await this.userManagementModuleLink.click();
    }
    async clickSkillsAndEcosystemsModule() {
        await this.skillsAndEcosystemsModuleLink.click();
    }
    async clickRolesAndCarrersModule() {
        await this.rolesAndCarrersModuleLink.click();
    }
    async clickCoursesAndMappingHubModule() {
        await this.coursesAndMappingHubModuleLink.click();
    }
    async clickEnrollmentManagementModule() {
        await this.EnrollmentManagementModuleLink.click();
    }
    async clickAssignmentsModule() {
        await this.assignmentsModuleLink.click();
    }
    async clickProgramManagerModule() {
        await this.programManagerModuleLink.click();
    }
    async clickLearningPathsModule() {
        await this.learningPathsModuleLink.click();
    }
    async clickAiLearningPathModule() {
        await this.aiLearningPathModuleLink.click();
    }
    async clickVirtualClassroomModule() {
        await this.virtualClassroomModuleLink.click();
    }
    async clickAiAssessmentsModule() {
        await this.aiAssessmentsModuleLink.click();
    }
    async clickCertificationModule() {
        await this.certificationModuleLink.click();
    }
    async logoutAsAdmin(){
        await this.profileButton.click();
        await this.logoutButton.click();
    }
}
module.exports = { AdminDashBoard};