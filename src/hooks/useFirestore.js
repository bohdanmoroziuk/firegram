import { useState, useEffect } from 'react';
import { firestore } from 'firebase/initialize';

const useFirestore = (collectionName) => {
  const [documents, setDocuments] = useState([]);

  const createDocument = dataItem => ({
    id: dataItem.id,
    ...dataItem.data()
  });

  useEffect(() => {
    const unsubscribe = firestore
      .collection(collectionName)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const documents = [];

        snapshot.forEach(dataItem => {
          documents.push(createDocument(dataItem));
        });

        setDocuments(documents);
      });

    return () => unsubscribe();
  }, [collectionName]);

  return {
    documents
  };
};

export default useFirestore;
