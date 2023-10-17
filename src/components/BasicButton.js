import styled from 'styled-components';
export const BasicButton = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`
export const HipsterButton = styled(BasicButton)`
width:200px;
border-radius: 20px;
background-color:#fff;
color: #000;
border: 1px solid #ddd;
display: block;
margin-top:20px;
cursor: pointer;
`
