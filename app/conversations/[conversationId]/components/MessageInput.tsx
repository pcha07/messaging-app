import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const MessageInput: React.FC<MessageInputProps> = ({
  placeholder,
  id,
  type,
  required,
  register,
}) => {
  // Format the id as a template literal string and cast it to the correct type
  const formattedId = `${id}` as `${string}`;

  return (
    <div className="relative w-full">
      <input
        id={formattedId}
        type={type}
        autoComplete={formattedId}
        {...register(formattedId, { required })}
        placeholder={placeholder}
        className="
          text-black
          font-light
          py-2
          px-4
          bg-neutral-100 
          w-full 
          rounded-full
          focus:outline-none
        "
      />
    </div>
  );
};

export default MessageInput;
