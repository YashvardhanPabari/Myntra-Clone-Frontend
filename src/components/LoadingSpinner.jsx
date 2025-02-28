const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "3rem", height: "3rem", marginBottom: "40px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default LoadingSpinner;
