function getUserDataByUserName() {
      cy.task('queryTestDB',"select * from user where username='zhangshan'")
          .then(result => {console.log(result)});
    }
describe("control mysql database",()=> {
    it("get user info by username", ()=> {
        getUserDataByUserName()
    });
});