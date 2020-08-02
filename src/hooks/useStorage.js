import { useState, useEffect } from 'react';
import { storage, firestore, timestamp } from 'firebase/initialize';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  const calculateProgress = snapshot => (
    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  )

  useEffect(() => {
    if (file) {
      const storageRef = storage.ref(file.name);
      const collectionRef = firestore.collection('images');

      storageRef.put(file)
        .on(
          'state_changed',
          snapshot => setProgress(calculateProgress(snapshot)),
          error => setError(error),
          async () => {
            const url = await storageRef.getDownloadURL();

            collectionRef.add({ url, createdAt: timestamp() });
            setUrl(url);
          });
    }
  }, [file]);

  return {
    progress,
    error,
    url
  };
};

export default useStorage;
