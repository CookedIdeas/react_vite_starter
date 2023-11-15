const Navbar = ({ navBarWidth }) => {
  return (
    <div style={{ width: navBarWidth }} className={`bg-primary fixed h-screen`}>
      <h1 className="font-bold text-[#fff]">Navbar</h1>
    </div>
  );
};
export default Navbar;
