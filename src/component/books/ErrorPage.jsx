import React from "react";
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-error/20 p-5 rounded-full">
            <AlertTriangle size={50} className="text-error" />
          </div>
        </div>

        <h1 className="text-7xl font-bold mb-2 text-primary">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-base-content/70 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex justify-center gap-4">
          <button
            className="btn btn-primary"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
          <button
            className="btn btn-outline"
            onClick={() => (window.location.href = "/")}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;