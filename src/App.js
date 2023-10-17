import Button from '@mui/material/Button';
import styled from 'styled-components';
import BasicTitle from './components/BasicTitle';
import {BasicButton, HipsterButton} from './components/BasicButton';


const StyledButton = styled(Button)`
text-transform: capitalize;
background-color: #ddd;
`
const TextCapBtn = styled(StyledButton)`
text-transform: capitalize !important;
color: #fff;
`


function App() {
  return (
 <div style= {{ padding: '2rem'}} >
    <BasicTitle>Hello</BasicTitle>
    <BasicTitle special>Hello</BasicTitle>
    <BasicButton>Click Me</BasicButton>  
    <HipsterButton>Clicks me</HipsterButton>
    <Button variant="contained">hello</Button>
    <StyledButton variant="contained" >I am styled</StyledButton>
    <TextCapBtn>ssss dddd</TextCapBtn>
 </div>
 
  
  );
}


export default App;
