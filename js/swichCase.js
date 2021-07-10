let role = "admin";
let accessAbility;

switch (role) {
  case "admin":
    accessAbility = "fullAccess";
    break;

  case "teacher":
      accessAbility = "hisCourses/herCourses";
    break;

  case "student":
    accessAbility = "readOnly";
    break;

    case "other":
      accessAbility = "noAccess";
      break;
}

console.log(accessAbility);