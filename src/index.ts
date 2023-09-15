import { concatenation } from "./concatenation";

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;

if (button && input) {
  button.addEventListener("click", () => {
    concatenation(input.value, "hello!");
  });
}

var Role;
(function (Role) {
  Role[(Role["ADMIN"] = 0)] = "ADMIN";
  Role[(Role["USER"] = 1)] = "USER";
})(Role || (Role = {}));
var person = {
  role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
  console.log("Role: ", Role.ADMIN);
}
