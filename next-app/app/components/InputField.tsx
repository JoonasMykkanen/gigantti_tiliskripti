import { Input } from "@nextui-org/react";
import { useState } from "react";

const customLabel = {
  label: 'group-data-[filled-within=true]:-translate-y-[calc(165%)] \
          group-data-[filled-within=true]:-left-[2px] \
          group-data-[filled-within=true]:text-base\
          text-xl'
}

interface InputProps {
  /** Key for FormData object */
  name: string;
  /** Place holder to have within the input field */
  label: string;
  /** Define HTML inputfield type */
  type: string;
  /** Apply custom tailwind classes if need modifications to field */
  customClass?: string;
  /**  Error state */
  error?: boolean;
}

const InputField = ({ name, label, type, customClass, error }: InputProps ) => {
  const [value, setValue] = useState('');

  return (
    <>
      <Input
        style={{ fontFamily: "sans-serif", fontSize: '18px' }}
        onChange={(event) => setValue(event.target.value)}
        onClear={() => setValue('')}
        labelPlacement="outside"
        classNames={customLabel}
        className={customClass}
        variant="bordered"
        isInvalid={error}
        label={label}
        value={value}
        name={name}
        type={type}
        isClearable
      />
    </>
  )
}

export default InputField;