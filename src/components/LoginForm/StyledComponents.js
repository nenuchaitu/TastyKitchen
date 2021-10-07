import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 40px 40px 0px;
  border-radius: 8px;
  min-width: 280px;
  width: 80%;
  margin: auto;
  @media screen and (min-width: 576px) {
    max-width: 456px;
    padding: 40px;
    margin-top: 0px;
    box-shadow: 0px 8px 40px #07070714;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`
export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #475569;
`
export const InputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #f7931e;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const LoginWebLogo = styled.img`
  width: 35px;
  height: 35px;
`
export const ErrorMessage = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ef4444;
`
export const FormHeading = styled.h1`
  font-size: 18px;
  font-family: 'DM sans';
  font-style: italic;
  font-weight: 400;
  color: #f7931e;
`
export const LogoContainer = styled.div`
  text-align: center;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const LoginHeading = styled.div`
  font-family: DM Sans;
  font-size: 24px;
  color: #0f172a;
  font-family: 'DM Sans';
  font-size: 24px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
  margin-right: auto;
  @media screen and (min-width: 577px) {
    font-size: 32px;
    text-align: center;
    line-height: 32px;
    margin: auto;
  }
`
