import axios  from 'axios';


const endpoint = (useProxy = true) => {
  //return 'https://cors-anywhere.herokuapp.com' + '/'
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  return (useProxy ? proxy : '') + 'http://172.105.68.208:8080'
}

//
var cache = {}

const delay = async (ms) => new Promise(done =>
  setTimeout(done, ms)
)

const accountCreate = async () => {
  const resp = await axios.get(endpoint() + '/account/create')
  return resp.data;
  /*return {
    'account': '#3',
    'accountAddress': '234234234234234234234234',
  }*/
}

// List of accounts or an account for the given Id
const accountList = async () => {
  const resp = await axios.get(endpoint() + '/account/list')
  return resp.data.accounts;
  /*
  return [
    {
      'index': '0',
      'address'       : '0923784023840928340982340923',
      'sequenceNumber': '0',
      'status'        : 'Persisted',
    },
    {
      'index': '1',
      'address'       : '5675675675675678340982340923',
      'sequencNumber' : '1',
      'status'        : 'Local',
    },
  ]
  */
}

//
const accountMint = async (accountId, numCoins) => {
  const resp = await axios.get(endpoint() + '/account/' + accountId + '/mint?amount=' + numCoins)
  return resp.data;
  //return {}
}
