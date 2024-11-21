import {
  FieldError,
  FieldValues,
  UseFormRegister,
  Path,
} from "react-hook-form";

interface InputFieldProps<T extends FieldValues> {
  label?: string;
  name: Path<T>;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  rules?: object; // Validation rules (e.g., required, minLength)
  error?: FieldError; // Error for the specific field
  touched?: boolean; // Indicates if the field has been touched
  className?: string; // Custom styles for input
  isShowErrorMessage?: boolean;
}

const InputField = <T extends FieldValues>({
  label,
  name,
  type = "text",
  placeholder = "",
  register,
  rules = {},
  error,
  touched,
  className = "",
  isShowErrorMessage = true,
}: InputFieldProps<T>) => {
  return (
    <div className="space-y-2">
      {/* Label */}
      {label && <h5 className="block font-medium">{label}</h5>}

      {/* Input Field */}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={`box-border focus:outline-none border text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 ${
          error && touched ? "border-red-500" : "border-gray-300"
        } ${className}`}
        {...register(name, rules)}
      />

      {/* Error Message */}
      {isShowErrorMessage && touched && error && (
        <p className="text-red-500 text-sm mt-1">{error.message}</p>
      )}
    </div>
  );
};

export default InputField;
