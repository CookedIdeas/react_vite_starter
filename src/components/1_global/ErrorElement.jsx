import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
  const error = useRouteError();
  console.warn(error);
  return (
    <div className="grid place-items-center">
      <h4 className="font-bold text-4xl">ErrorElement</h4>;
      <h4 className="font-bold text-4xl">Ouch ! There was an error...</h4>
    </div>
  );
};
export default ErrorElement;
