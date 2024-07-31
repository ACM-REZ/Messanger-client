import styled from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 20px;
  margin-top: 30px;
`
interface FormProps {
  onSubmit: () => void
  children: React.ReactNode
}

const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
}

export default Form
