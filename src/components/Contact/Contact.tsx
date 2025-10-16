import { differenceInYears } from "date-fns";
import { isRouteErrorResponse, useLoaderData, useRouteError } from "react-router";
import { api } from "../../api/client";

export const loader = async () => {
  console.log("Loader called");

  try {
    const { data } = await api.get("/users/1");
    return data;
  } catch (err: any) {
    console.log("Axios error:", err);
    const status = err.response?.status || 500;
    const statusText = err.response?.statusText || err.message || "Unknown Error";

    throw new Response("Failed to load contact data", {
      status,
      statusText,
    });
  }
};

export const ErrorBoundary = () => {
  const error = useRouteError();
  console.error("useRouteError() value:", error);

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h2>Oops! Something went wrong.</h2>
        <p>
          {error.status}: {error.statusText}
        </p>
      </div>
    );
  }

  return <div>Unexpected error occured.</div>;
};

const Contact = () => {
  const data = useLoaderData();

  return (
    <div>
      <h2>Contact Data Returned</h2>
      <p>Forename: {data.firstName}</p>
      <p>Surname: {data.lastName}</p>
      <p>Maiden name: {data.maidenName}</p>
      <p>DOB: {new Date(data.birthDate).toLocaleDateString("en-GB")}</p>
      <p>Stated Age: {data.age}</p>
      <p>Calculated Age: {differenceInYears(new Date(), new Date(data.birthDate))}</p>
    </div>
  );
};

export default Contact;
