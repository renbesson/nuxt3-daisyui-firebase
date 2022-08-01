export const useUser = () =>
  useState("user", () => ({ isLoading: null, error: null, user: null }));
