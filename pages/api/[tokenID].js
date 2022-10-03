export default function handler(req, res) {
  // get the tokenId from the query params
  var tokenId = req.query.tokenID.match(/\d*/);
  // As all the images are uploaded on github, we can extract the images from github directly.
  const image_url =
    "https://gateway.pinata.cloud/ipfs/QmXLVLZJNZXvc1RSQgSey1csAaLRFKEnDPLdTri78oLZqw/";
  // The api is sending back metadata for a Crypto Dev
  // To make our collection compatible with Opensea, we need to follow some Metadata standards
  // when sending back the response from the api
  // More info can be found here: https://docs.opensea.io/docs/metadata-standards
  const names = ["Prayer to brother", "Brotherhood", "Smile of worthiness", "Beauty", "Ritual of Brotherhood"];
  var intid = parseInt(tokenId)%5;
  res.status(200).json({
    name: names[intid],
    description: "Gachi Saga is the colection of legendary Gachimuchi",
    image: image_url + tokenId + ".jpg",
  });
}