import { differenceInYears } from "date-fns";
import { Await, isRouteErrorResponse, useLoaderData, useRouteError } from "react-router";
import { api } from "../../api/client";
import { Suspense } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export const loader = () => {
  console.log("Loader called");

  try {
    const dataPromise = api.get("/users/1").then((res) => res.data);
    return { data: dataPromise };
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
  const { data } = useLoaderData();
  console.log(data);

  return (
    <div>
      <h2>Contact Data Returned</h2>
      <Suspense fallback={<LoadingSpinner />}>
        <Await resolve={data}>
          {(data) => (
            <>
              <p>Forename: {data.firstName}</p>
              <p>Surname: {data.lastName}</p>
              <p>Maiden name: {data.maidenName}</p>
              <p>DOB: {new Date(data.birthDate).toLocaleDateString("en-GB")}</p>
              <p>Stated Age: {data.age}</p>
              <p>Calculated Age: {differenceInYears(new Date(), new Date(data.birthDate))}</p>
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default Contact;
