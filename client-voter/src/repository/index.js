import api from "../api/api";

export const createVoter = async ({ name, bi, username, password }) => {
  return api.post("/voter", {
    name: name,
    bi: bi,
    username: username,
    password: password,
    avatar: `https://gravatar.com/avatar/${name}?d=identicon`,
  });
};
