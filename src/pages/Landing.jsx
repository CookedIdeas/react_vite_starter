import { useDispatch } from 'react-redux';
import { clearUser, setUser, useUser } from '../features/user/userSlice';

const Landing = () => {
  const dispatch = useDispatch();

  const { user } = useUser();
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary">App</h1>
      <div className="mt-8 flex flex-col gap-4">
        {user.name ? (
          <span>Hello {user.name}</span>
        ) : (
          <span>Click on add user to... add user</span>
        )}
        <div className="flex gap-8 w-1/2">
          <button
            className="bg-primary hover:bg-primaryLight border-0 text-black font-semibold hover:text-white py-2 px-4 rounded"
            onClick={() => dispatch(setUser({ user: { name: 'Bob' } }))}
          >
            Add user
          </button>
          <button
            className="bg-primary hover:bg-primaryLight border-0 text-black font-semibold hover:text-white py-2 px-4 rounded"
            onClick={() => dispatch(clearUser())}
          >
            Remove user
          </button>
        </div>
      </div>
    </div>
  );
};
export default Landing;
