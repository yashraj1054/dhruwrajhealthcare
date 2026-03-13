import { useParams } from "react-router-dom";
import NotFound from "../pages/NotFound";

const ValidateSlug = ({ data, paramName, children }) => {
  const params = useParams();

  const slug = params[paramName];

  const exists = data.some((item) => item.slug === slug);

  if (!exists) {
    return <NotFound />;
  }

  return children;
};

export default ValidateSlug;