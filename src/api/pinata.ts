import axios, { AxiosHeaders } from "axios";

const pinataGateway = "apricot-deep-marmoset-708.mypinata.cloud";
const pinataJWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJiYjNiZDAyYS1mNTQ0LTRlZTItOWJmNS03MTljYWNjYmQyNjkiLCJlbWFpbCI6Imp1bGlhbm9xbnVuZXMxN0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiOGNmMmYyMzBiNmIwYzU4NzMyYzYiLCJzY29wZWRLZXlTZWNyZXQiOiI1YmY4ODBlMDhlNDA4ZDE1Y2QzMGVhYmQ0M2M2Y2ZjMThiZDIzOWQzMWEzYmNlZjFiZjBiYTYyZWI5ZmQxZjAyIiwiZXhwIjoxNzYxMDgyNzk1fQ.KCbSOyFUxZa3x6Kyq_pu5t3ZwHkOQLu6nchXSbVMXJU";

const authorized_header = {
  Authorization: `Bearer ${pinataJWT}`,
};

export const fetchJsonByCid = (cid?: string) => {
  return axios
    .get(`http://${pinataGateway}/ipfs/${cid}`)
    .then((res) => res.data);
};

export const pinJsonToIpfs = (json: Record<string, string>) => {
  axios.post(
    "https://api.pinata.cloud/pinning/pinJSONToIPFS",
    JSON.stringify(json),
    { headers: authorized_header }
  );
};
