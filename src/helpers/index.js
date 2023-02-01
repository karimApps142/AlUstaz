import RNFetchBlob from 'rn-fetch-blob';

const generateRandomMp3Path = length => {
  const dirs = RNFetchBlob.fs.dirs;
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return `${dirs.CacheDir}/${result}.mp3`;
};

export default {
  generateRandomMp3Path,
};
