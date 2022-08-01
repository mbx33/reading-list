import { useEffect, useRef, useState } from 'react';
//getting real time data from firebase db collection

// importing the db collection we'll be using
import { db } from '../firebase/config';

// functions used to manipulate the firestore database
import { collection, onSnapshot, query, where } from 'firebase/firestore';

//passing in the collection as c so the function is variable and other collections can be passed into the hook
export const useCollections = (c, _q) => {
	const [documents, setDocuments] = useState(null);

	//set up q, query
	const q = useRef(_q).current;

	useEffect(() => {
		let ref = collection(db, c);

		if (q) {
			ref = query(ref, where(...q));
		}

		const unsub = onSnapshot(ref, (snapshot) => {
			let results = [];
			snapshot.docs.forEach((doc) => {
				results.push({ ...doc.data(), id: doc.id });
			});
			setDocuments(results);
		});

		return () => unsub();
	}, [c, q]);

	return { documents };
};

// useEffect(() => {
// 	// referencing the books collection from our db, first arg is db, and second arg is the name of the collection
// 	const ref = collection(db, 'books');

// 	getDocs(ref).then((snapshot) => {
// 		let results = [];
// 		snapshot.docs.forEach((doc) => {
// 			results.push({ id: doc.id, ...doc.data() });
// 		});
// 		setBooks(results);
// 	});
// }, []);
