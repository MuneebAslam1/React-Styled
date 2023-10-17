import styled from 'styled-components';
const BasicTitle = styled.h1`
text-align: center;
text-align:${({special}) => special && 'center'};
color: ${({special}) => special && 'red'};
`

export default BasicTitle