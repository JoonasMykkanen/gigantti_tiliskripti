import { Input } from "@nextui-org/react";

const customLabel = {
  label: 'group-data-[filled-within=true]:-translate-y-[calc(165%)] \
          group-data-[filled-within=true]:-left-[2px] \
          group-data-[filled-within=true]:text-base\
          text-xl'
}

interface InputProps {
  /** Place holder to have within the input field */
  label: string;
  /** Define HTML inputfield type */
  type: string;
  /** Apply custom tailwind classes if need modifications to field */
  customClass?: string;
}

const InputField = ({ label, type, customClass }: InputProps ) => {
  return (
    <>
      <Input
        style={{ fontFamily: "sans-serif", fontSize: '18px' }}
        classNames={customLabel}
        className={customClass}
        labelPlacement="outside"
        variant="bordered"
        label={label}
        type={type}
        isClearable
      />
    </>
  )
}

export default InputField;