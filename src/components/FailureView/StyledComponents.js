import styled from 'styled-components'

export const ErrorViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  width: 300px;
  height: 165px;
  @media screen and (min-width: 768px) {
    width: 580px;
    height: 350px;
    margin-top: 70px;
  }
`
export const RetryButton = styled.button`
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
  color: white;
  border: none;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 6px;
  background-color: #4f46e5;
  margin-top: 20px;
  outline: none;
  cursor: pointer;
`
