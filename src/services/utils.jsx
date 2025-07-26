const logout = (setUser) => {
  window.localStorage.removeItem("loggedNoteappUser");
  setUser(null);
};

export { logout }