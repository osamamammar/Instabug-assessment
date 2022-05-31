// regex email validation
export const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// at least one number, and one uppercase letter
export const regexPassword = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;

export const validateForm = (values) => {
  const errors = {};

  if (!values.email || !regexEmail.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.password || values.password.length < 6) {
    errors.password = "Password must be 6 characters or more";
  } else if (values.email.split("@")[0] === values.password) {
    errors.password = "Password cannot be the same as email";
  } else if (!regexPassword.test(values.password)) {
    errors.password =
      "Password must contain at least one number and one uppercase";
  }
  return errors;
};
