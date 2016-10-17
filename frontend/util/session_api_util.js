
const defaultCallback = (data) => {
  toastr["success"]("Successfully logged in!");
};

export const logAllUsers = () => {
  $.ajax('api/users')
    .success(success)
    .error(error);
};

export const signup = (
  user,
  success = defaultCallback,
  error = (e) => {
    e.responseJSON.forEach((error) => {
      toastr["error"](error, "error");
    });
  }
) => {
  $.ajax({
    url: 'api/users',
    method: 'POST',
    data: {user},
    success,
    error,
  });
};

export const login = (
  user,
  success = defaultCallback,
  error = (e) => {
    e.responseJSON.forEach((error) => {
      toastr["error"](error, "error");
    });
  }
) => {
  $.ajax({
    url: 'api/session',
    method: 'POST',
    data: {user},
    success,
    error,
  });
};

export const logout = (
  success = defaultCallback,
  error = (e) => {
    e.responseJSON.forEach((error) => {
      toastr["error"](error, "error");
    });
  }
) => {
  $.ajax({
    url: 'api/session',
    method: 'DELETE',
    success,
    error,
  });
};
