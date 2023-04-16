import { Widget } from '../../types';

type Props = {
  id: string;
  title: string;
  value: string | number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    prop: keyof Widget
  ) => void;
};

function TextInput({ id, title, value, onChange }: Props) {
  return (
    <label htmlFor={id} className="form-label">
      {title}
      <input
        type="text"
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        id={id}
        value={value}
        onChange={(e) => onChange(e, id as keyof Widget)}
      />
    </label>
  );
}

export default TextInput;
