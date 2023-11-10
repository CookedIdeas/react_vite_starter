import { useDispatch } from 'react-redux';
import { clearUser, setUser, useUser } from './features/user/userSlice';

function App() {
  const dispatch = useDispatch();
  const { user } = useUser();
  console.log(user);
  return (
    <div>
      <h1 className="text-2xl">App</h1>
      <div className="mt-8 flex flex-col gap-4">
        {user.name ? (
          <span>Hello {user.name}</span>
        ) : (
          <span>Click on add user to... add user</span>
        )}
        <div className="flex gap-8 w-1/2">
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => dispatch(setUser({ user: { name: 'Bob' } }))}
          >
            Add user
          </button>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => dispatch(clearUser())}
          >
            Remove user
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
