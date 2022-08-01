import BookList from '../components/BookList';
import BookForm from '../components/BookForm';
import { useCollections } from '../hooks/useCollections';
import { useAuthContext } from '../hooks/useAuthContext';

export default function Home() {
	const { user } = useAuthContext();
	const { documents: books } = useCollections('books', ['uid', '==', user.uid]);

	return (
		<div>
			{books && <BookList books={books} />}
			<BookForm />
		</div>
	);
}
