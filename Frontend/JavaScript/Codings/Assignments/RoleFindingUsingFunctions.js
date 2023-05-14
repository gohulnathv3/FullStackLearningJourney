// find a user role description based on his role

function getUserRoleDescription(name, role) {
  switch (role) {
    case "Admin":
      return `Welcome ${name}, you're having ${role} role with full access`;
      break; // no need to declare if we use return
    case "SubAdmin":
      return `Welcome ${name}, you're having ${role} role with partial access with add/remove user`;
      break;
    case "Tester":
      return `Welcome ${name}, you're having ${role} role with test access`;
      break;
    case "User":
      return `Welcome ${name}, you're having ${role} role with course access`;
      break;

    default:
      return `Welcome ${name}, you're having ${role} role, need to enroll and get appropriate role`;
      break;
  }
}

var user1 = getUserRoleDescription("Gohul","Admin");
console.log(user1);
var user2 = getUserRoleDescription("Pavi","SubAdmin");
console.log(user2);
var user3 = getUserRoleDescription("Visva","Tester");
console.log(user3);
var user4 = getUserRoleDescription("Imughan","Engineer");
console.log(user4);
