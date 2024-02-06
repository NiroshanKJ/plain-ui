import sha256 from "crypto-js/sha256";

export const generateRandomString = () => {
  const currentTime = Date.now();
  return sha256(currentTime.toString()).toString();
};
