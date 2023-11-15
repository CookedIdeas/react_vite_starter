const Header = ({ navBarWidth }) => {
  return (
    <div
      style={{ marginLeft: navBarWidth }}
      className={`bg-backgroundAccent h-20 pl-4`}
    >
      <h1 className="font-bold text-primary">Header</h1>
    </div>
  );
};
export default Header;
