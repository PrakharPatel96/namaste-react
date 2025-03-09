import { useState, useEffect } from "react";

const useOnlineCheckStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  });

  return onlineStatus;
};

export default useOnlineCheckStatus;
