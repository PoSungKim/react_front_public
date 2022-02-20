export const GETUSERS = "user/GETUSERS" as const;
export const GETUSERS_SUCCESS = "user/GETUSERS_SUCCESS" as const;
export const GETUSERS_FAILURE = "user/GETUSERS_FAILURE" as const;

export const getUsers = () => ({
  type: GETUSERS,
});

export const getUsersSuccess = () => ({
  type: GETUSERS_SUCCESS,
});

export const getUsersFailure = () => ({
  type: GETUSERS_FAILURE,
});