import { useUser } from '../../features/user/userSlice';

const Header = ({ navBarWidth }) => {
  const { user } = useUser();
  return (
    <div
      style={{ marginLeft: navBarWidth }}
      className={`bg-backgroundAccent h-20 pl-4`}
    >
      <div className="h-full flex items-center gap-6">
        <h1 className="font-bold text-primary">Header</h1>
        {user.name && (
          <p>
            Hello <span>{user.name}</span>
          </p>
        )}
      </div>
    </div>
  );
};
export default Header;
