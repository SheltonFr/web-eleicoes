import api from "../api/api";

export const createParty = async (data, token) => {
  return api.post(
    "/party",
    {
      name: data.name,
      description: data.description,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const createCandidate = async (data, token) => {
  return api.post(
    "/candidate",
    {
      name: data.name,
      avatar: `https://gravatar.com/avatar/${data.name}?d=identicon`,
      party: data.party,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const fetchCandidates = async () => {
  return api.get("/candidate");
};

export const fetchVoters = async () => {
  return api.get("/voter");
};

export const fetchParties = async () => {
  return api.get("/party  ");
};

export const fetchVoter = async (id) => {
  return api.get(`/voter/${id}`);
};

export const toggleActiveVoter = async (id, token) => {
  return api.get(`/voter/${id}/activate`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
