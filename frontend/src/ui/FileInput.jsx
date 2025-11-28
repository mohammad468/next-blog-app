import { ArrowUpIcon } from "@heroicons/react/24/outline";

function FileInput({
  label,
  name,
  value,
  dir = "rtl",
  onChange,
  className,
  validationSchema = {},
  errors,
  ...rest
}) {
  const errorMessage = errors?.[name];
  const hasError = !!(errors && errorMessage);

  return (
    <>
      <label
        htmlFor="file-upload"
        className={`cursor-pointer border-2 border-primary-900 rounded-lg px-3 py-2 text-primary-900 flex items-center justify-center gap-x-2 ${className}`}
      >
        {label}
        <ArrowUpIcon className="w-5 h-5" />
        <input
          id="file-upload"
          type="file"
          className={`sr-only`}
          name={name}
          dir={dir}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </label>

      {hasError && <span className="text-red-600 block text-xs mt-2">{errorMessage?.message}</span>}
    </>
  );
}

export default FileInput;
