// backend/controllers/ImagesController.js
import https from 'https';

const internalServerErrMsg = 'Internal Server Error';
// EXTERNAL_API_URL
const externalApiUrl = `https://d53e9e5f-1edb-4d0e-95cc-9c41436949b2.mock.pstmn.io/pokemon/squirtle`;

/**
 * /api/images
 *   get:
 *     tags:
 *       - images
 *     @description : returns the object of images collection
 *     response:
 *       200:
 *          description: single object with collection of images
 */
export const getImages = (req, res) => {
  const { selectedOption } = req.body;
  console.log('sele', selectedOption);
  try {
    // HTTPS GET request to the external API
    https.get(externalApiUrl, (apiResponse) => {
      let data = '';

      // executes when chunk of data is recieved from api
      apiResponse.on('data', (chunk) => {
        data += chunk;
      });

      // executes when all data is fetched from api
      apiResponse.on('end', () => {
        const dataObj = JSON.parse(data);
        const dt = dataObj.sprites;

        let responseArray = [
          dt[selectedOption],
          dt?.other?.dream_world?.[selectedOption],
          dt?.other?.home?.[selectedOption],
          dt?.other?.['official-artwork']?.[selectedOption],
        ];
        responseArray = responseArray.filter((url) => url?.length > 0);
        res.json({ responseOutput: responseArray });
      });
    });
  } catch (error) {
    console.error('Error fetching data from the external API:', error);
    res.status(500).json({ error: internalServerErrMsg });
  }
};
