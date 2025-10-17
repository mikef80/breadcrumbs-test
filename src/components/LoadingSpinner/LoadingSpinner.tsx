import type { CSSProperties } from "react";
import { CircleLoader, ClipLoader } from "react-spinners";

const override: CSSProperties = {
  margin: "50px 0",
};

const LoadingSpinner = () => {
  return <ClipLoader color='white' size={20} cssOverride={override} />;
};

export default LoadingSpinner;
