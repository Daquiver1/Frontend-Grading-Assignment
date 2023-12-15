class User {
  constructor(studentID, firstName, lastName, isAuth) {
    this.studentID = studentID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.isAuth = isAuth;
  }

  getstudentID() {
    return this.studentID;
  }
  getfirstName() {
    return this.firstName;
  }
  getLastName() {
    return this.lastName;
  }
  getIsAuth() {
    return this.isAuth;
  }
}

export default User;
