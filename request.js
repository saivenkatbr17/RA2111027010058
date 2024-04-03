const axios = require("axios");

const postData = {
  companyName: "SRMIST",
  ownerName: "B R Sai Venkat",
  rollNo: "RA2111027010058",
  ownerEmail: "bb5592@srmist.edu.in",
  accessCode: "bntKpm",
};

axios
  .post("http://20.244.56.144/test/register", postData)
  .then((response) => {
    console.log("Response:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
