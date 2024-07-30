export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  placeholder?: string
  id: string
  error?: string
  icon?: React.ReactNode
}
