// Create applicatin with various roles admin, testadmin, subadmin, user

var user = "subadmin";

switch (user) {
  case "admin":
    console.log("You got the full access");
    break;

  case "testadmin":
    console.log("You got the access of Tests");
    break;

  case "subadmin":
    console.log("You got the access of create/delete  user");
    break;

  case "user":
    console.log("You got the course access");
    break;

  default:
    console.log("Trial user");
    break;
}
