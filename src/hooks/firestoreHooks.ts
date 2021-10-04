import {useEffect, useRef, useState} from 'react';
// import storage, {FirebaseStorageTypes} from '@react-native-firebase/storage';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

/*
export const useFileStorage = ({
  docPath,
  fileName,
  updateDoc,
  updateCollectionDoc,
  recordData,
}) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState();
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const fileInputChangeHandler = async e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    try {
      const file = e.target.files[0];
      setUploading(true);
      setSelectedFile(file);

      const fileUploadPath = fileName
        ? `${docPath}/${fileName}.${file.name.split('.').pop()}`
        : `${docPath}/${file.name}`;
      const snapshot = await storage.ref().child(fileUploadPath).put(file);
      const downloadUrl = await snapshot.ref.getDownloadURL();
      if (updateDoc) {
        await updateDoc({...recordData, [fileName]: downloadUrl});
      }
      if (updateCollectionDoc) {
        await updateCollectionDoc({
          id: recordData.id,
          doc: {...recordData, [fileName]: downloadUrl},
        });
      }

      setError(null);
      dispatch(
        showNotification({
          message: `Uploaded`,
          type: NotificationTypeEnum.SUCCESS,
        }),
      );
    } catch (err) {
      console.log('Salerr : ', {err});
      dispatch(
        showNotification({
          message: "Couldn't upload! Please try again...",
          type: NotificationTypeEnum.ERROR,
        }),
      );
      setError(err);
    }
    setUploading(false);
  };
  return {
    preview,
    uploading,
    error,
    fileInputChangeHandler,
  };
};
*/

export const PRODUCTS_COLLECTION_PATH = 'products';
export const SERVICES_COLLECTION_PATH = 'services';
export const PRODUCT_CATEGORIES_COLLECTION_PATH = 'productCategories';
export const SUBSCRIPTION_REQUESTS = 'subscriptionRequests';
export const getUserSubscriptionsPath = (uid: string | undefined) =>
  `users/${uid}/subscriptions`;
export const getUserCartCollectionPath = (
  userId: string | null | undefined,
): string => `customers/${userId}/cart`;

export const useDocument = (docPath: string) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const docRef = firestore().doc(docPath);

  const updateDoc = async (doc: any) => {
    try {
      setIsLoading(true);
      await docRef.set(doc);
    } catch (err) {
      console.log('Salerr : ', {err});
      Alert.alert('Unable to update the document!');
    }
    setIsLoading(false);
  };

  const deleteDoc = async () => {
    try {
      setIsLoading(true);
      await docRef.delete();
    } catch (err) {
      console.log('Salerr : ', {err});
      Alert.alert('Unable to delete the document!');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const unSubscribe = docRef.onSnapshot(doc => {
      setData(doc?.data() || {});
    });
    return () => {
      unSubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [docPath]);
  return {data, deleteDoc, updateDoc, isLoading};
};

export const useCollection = ({
  collectionPath,
  order,
  filter,
}: {
  collectionPath: string;
  order?: string;
  filter?: {
    field: string;
    operator: FirebaseFirestoreTypes.WhereFilterOp | null;
    value: string;
  };
}) => {
  const options = useRef<any>({order: null, filter: null});
  const [collection, setCollection] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const collectionPathRef = firestore().collection(collectionPath);

  const addDoc = async (doc: any) => {
    try {
      setIsLoading(true);
      await collectionPathRef.doc().set(doc);
    } catch (err) {
      console.log('Salerr : ', {err});
      Alert.alert('Unable to add the document!');
    }
    setIsLoading(false);
  };
  const updateDoc = async ({id, doc}: {id: string; doc: object}) => {
    try {
      setIsLoading(true);
      await collectionPathRef.doc(id).set(doc);
    } catch (err) {
      console.log('Salerr : ', {err});
      Alert.alert('Unable to update the document!');
    }
    setIsLoading(false);
  };

  const deleteDoc = async (id: string) => {
    try {
      setIsLoading(true);
      await collectionPathRef.doc(id).delete();
    } catch (err) {
      console.log('Salerr : ', {err});
      Alert.alert('Unable to delete the document!');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const filteredRef =
      filter?.field && filter?.operator && filter?.value
        ? collectionPathRef.where(filter.field, filter.operator, filter.value)
        : collectionPathRef;

    const ref = order ? filteredRef.orderBy(order) : filteredRef;
    if (
      options.current.order !== order ||
      options.current.filter?.field !== filter?.field ||
      options.current.filter?.operator !== filter?.operator ||
      options.current.filter?.value !== filter?.value
    ) {
      options.current.order = order;
      options.current.filter = filter;
      const unSubscribe = ref.onSnapshot(querySnapshot => {
        setCollection(
          querySnapshot?.docs?.map(doc => ({...doc.data(), id: doc.id})),
        );
      });
      return () => {
        unSubscribe();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionPath, order, filter?.field, filter?.operator, filter?.value]);
  return {collection, addDoc, updateDoc, deleteDoc, isLoading};
};
