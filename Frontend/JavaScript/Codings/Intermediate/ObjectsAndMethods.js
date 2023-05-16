var user = {
  firstName: "Gohul",
  lastName: "Nath V",
  phoneNumber: 9655666545,
  country: "India",
  role: "Developer",
  turnedEighteen: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },
  getUserInfo: function () {
    return `
            Username ${this.firstName} ${this.lastName},
            Role ${this.role}
            CoursesEnrolled ${this.courseList}
            TotalCourseCount ${this.getCourseCount()}
            `;
  },
};

user.buyCourse("MongoDB");
user.buyCourse("React");
user.buyCourse("Express");
user.buyCourse("NodeJS");
console.log(user.getUserInfo());

// If I wanted to iterate the objects, I can use for ... in loop
var user1 = {
    firstName: "Gohul",
    lastName: "Nath V",
    phoneNumber: 9655666545,
    country: "India",
    role: "Developer",
    turnedEighteen: true,
  };
for( let key in user1){
    console.log(key+": "+user1[key]);
}
