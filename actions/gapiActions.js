const keyData = require('../google_key.json');

function catchErrors(reason) {
  console.log('Error: ' + reason.result.error.message);
};

const handleSheetLoad = (actions) => (response) => {
  var result = response.result;
  const cardDataArray = result.valueRanges[0].values;
  actions.addCards(cardDataArray);
}

const handleClientLoad = () => {
  return gapi.client.sheets.spreadsheets.values.batchGet({
    spreadsheetId: '1FfoxKlQNOT3CtVApbwjPyzs-eQrRN4KDQe8VYxrmOYE',
    ranges: 'Attack Action Cards!A:L'
  });
}

module.exports = {
  init: () => null,
  gapiStart: (_, args, actions) => {
    gapi.client.init({
      'apiKey': keyData.apiKey,
      'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4']
    }).then(handleClientLoad, catchErrors)
      .then(handleSheetLoad(actions), catchErrors);
  },
  load: (_, args, actions) => {
    gapi.load('client', actions.gapiStart);
  },
}