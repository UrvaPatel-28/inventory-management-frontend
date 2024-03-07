const ErrorHolder = ({
  errors,
}: {
  errors: string[] | string | Record<string, unknown>;
}) => {
  return (
    <ol className="list-disc text-error px-3">
      {/* String Array error */}
      {typeof errors === "object" ? (
        Array.isArray(errors) ? (
          errors.map((s) => <li>{s}</li>)
        ) : (
          Object.entries(errors).map(([key, value]) => (
            <li>
              {key}
              <ErrorHolder errors={value} />
            </li>
          ))
        )
      ) : (
        <li>{errors.toString()}</li>
      )}
    </ol>
  );
};

export default ErrorHolder;
