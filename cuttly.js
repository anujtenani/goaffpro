import axios from "axios";

async function cuttlyShortener(url) {
  const apiKey = "97c1defd1c13d306a2e4d9f1159d87d07c739";

  const config = {
    method: "get",
    url: `http://cutt.ly/api/api.php?key=${apiKey}&short=${url}`,
    headers: {},
  };

  return axios(config)
    .then(function (response) {
      // console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      // console.log(error);
      return false;
    });
}

// const resp = await cuttlyShortener(
//   "https://bootcamp.uxdesign.cc/a-step-by-step-guide-to-building-a-chatbot-based-on-your-own-documents-with-gpt-2d550534eea5"
// );
// console.log(resp);

export default cuttlyShortener;
