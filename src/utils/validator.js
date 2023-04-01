import { checkTheYear } from "./checkTheYear";
export function validator(data, config) {
  const errors = {}

  function validate(validateMethod, data, config) {
    switch (validateMethod) {
      case "isRequired":
        if (data.trim() === "") return config.message
        break;
      case "isBirthYear":
        if (!checkTheYear(data)) return config.message
        break
      case "isUrl":
        const urlRegExp = /^(ftp|http|https):\/\/[^ "]+$/;
        if (!urlRegExp.test(data)) return config.message
    }
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(validateMethod, data[fieldName], config[fieldName][validateMethod]);
     if (error && !errors[fieldName]) {
       errors[fieldName] = error;
     }
    }
  }
  console.log(data.birthYear);
  return errors
}
