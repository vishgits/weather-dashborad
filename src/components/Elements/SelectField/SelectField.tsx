import { ChangeEventHandler } from "react";

interface SelectFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  errorMessage?: string | false | undefined;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  options:string[];
  value?: string | number | readonly string[];
}


export default function SelectField({
  name,
  label,
  onChange = () => {},
  options,
  value,
  errorMessage
}: SelectFieldProps) {
  return (
    <div className="sm:col-span-3 mt-2">
      <label
        htmlFor={name}
        className="inline-block text-sm font-medium leading-6 text-gray-900 w-1/3"
      >
        {label}
      </label>
      <select
        data-testid={name}
        name={name}
        className="h-9 mt-2 inline-block  w-2/3 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        onChange={onChange}
        value={value}
      >
        <option value="-1">Select City</option> 
        {options?.map((option: string, index:number) =>(
           <option key={index} value={option}>{option}</option> 
        ))}
      </select>
      {errorMessage && (
          <p className="mt-2 text-sm text-red-600" id="email-error">
           {errorMessage}
          </p>
        )}
    </div>
  );
}
