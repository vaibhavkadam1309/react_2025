import { useState, useEffect } from "react";

const useFetchGitUser = () => {
  const [userInfo, setUserInfo] = useState({"name":"vaibhav"}); // ✅ Fix: useState should use () not []

  useEffect(() => {
    const getData = async () => {
      try {
        console.log('inside custom hook')
        const response = await fetch("https://api.github.com/users/vaibhavkadam1309");
        const json = await response.json();
        setUserInfo(json);
      } catch (error) {
        console.error("Error fetching GitHub user:", error);
      }
    };

    getData();
  }, []);

  return userInfo;
};

export default useFetchGitUser;
