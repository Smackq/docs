
interface IInputFormProps {
    type: string,
    label: string,
    name: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string

}

export function InputForm({ type, label, name, onChange, value }: IInputFormProps) {
  return (
    <div className="w-full max-w-sm">
      <label className="text-gray-700 text-sm font-medium">{label}</label>
      <input
        className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}