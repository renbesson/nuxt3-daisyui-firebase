export const useUser = () =>
  useState("user", () => ref({ isLoading: false, error: null, user: null }));
