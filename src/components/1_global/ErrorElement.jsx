import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
  const error = useRouteError();
  console.warn(error);
  return <h4 className="font-bold text-4xl">Ouch ! There was an error...</h4>;
};
export default ErrorElement;
