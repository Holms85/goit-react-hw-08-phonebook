export const getIsLogin = ({ auth }) => auth.isLogin;

export const getIsLoading = ({ auth }) => auth.loading;

export const getError = ({ auth }) => auth.error || {};

export const getUser = ({ auth }) => auth.user;
