const Footer = ({ navBarWidth }) => {
  return (
    <div
      style={{ marginLeft: navBarWidth }}
      className="bg-backgroundAccent h-20"
    >
      <div className="grid place-items-center h-full">
        <h1 className="font-bold text-primary">Footer</h1>
      </div>
    </div>
  );
};
export default Footer;
