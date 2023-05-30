const { Storage } = require('@google-cloud/storage');

// Konfigurasi Cloud Storage
const storage = new Storage({
    projectId: 'cobaapi-387908',
    keyFilename: 'cobaapi-387908-4d0e8cc0f1d4.json', // Ganti dengan jalur berkas kunci akun layanan Anda
  });

  const bucketName = 'speakkuyfotoprofile';

storage.connect((err) => {
  if (err) throw err;
  console.log('Connected to Storage');
});


module.exports = { storage, bucketName };
