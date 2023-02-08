const useUserDetails = () => {
  const storeCurrentUserDetails = (data) => {
    if (!!data) {
      localStorage.setItem("userData", JSON.stringify(data));
      return;
    }
    localStorage.setItem("userData", "");
  };

  const getCurrentUserDetails = () => {
    const storagedUserData = localStorage.getItem("userData");
    if (!!storagedUserData) return JSON.parse(storagedUserData);
    return null;
  };

  return { getCurrentUserDetails, storeCurrentUserDetails };
};

export default useUserDetails;
