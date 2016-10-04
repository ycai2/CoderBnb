const defaultCallback = (data) => { console.log(data); };

export const logAllUsers = () => {
  $.ajax('api/users')
    .success(success)
    .error(error);
};

export const signup = (
  user,
  success = defaultCallback,
  error = defaultCallback
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
  error = defaultCallback
) => {
  $.ajax({
    url: 'api/session',
    method: 'POST',
    data: {user},
    success,
    error,
  });
};

export const logout = (success = defaultCallback, error = defaultCallback) => {
  $.ajax({
    url: 'api/session',
    method: 'DELETE',
    success,
    error,
  });
};
