let userAccess = "accessControl";

switch (userAccess) {
  
  case "admin":
    console.log("FullAccess");
    break;

  case "teacher":
    console.log("hisCourses/herCourses");
    break;

  case "student":
    console.log("readOnly");
    break;

    case "other":
      console.log("noAccess");
      break;
}
