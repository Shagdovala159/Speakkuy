const { Storage } = require('@google-cloud/storage');

// Konfigurasi Cloud Storage
const storage = new Storage({
    projectId: 'cobaapi-387908',
    keyFilename: 'config/credential.json', // Ganti dengan jalur berkas kunci akun layanan Anda
  });

  const bucketName = 'speakkuyfotoprofile';



module.exports = { storage, bucketName };
