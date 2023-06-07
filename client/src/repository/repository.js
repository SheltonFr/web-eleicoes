import api from "../api/api";

export const createParty = async (data) => {
  return api.post("/party", {
    name: data.name,
    description: data.description,
  });
};

export const createCandidate = async (data) => {
  return api.post("/candidate", {
    name: data.name,
    avatar: "avatar/candidate",
    party: data.party,
  });
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
