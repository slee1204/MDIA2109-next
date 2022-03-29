import styled from 'styled-components';

const RedCont = styled.div`
background-color: ${props=>props.cl};
color: ${props=>props.text_cl}
`;





export default function ImgCard({
    img="/cheese.jpg",
    comment="This is Rami!",
    bg="red",
    tcl="#FFF",
    children=null
}){

    return <RedCont cl={bg} text_cl={tcl}>
        <img src={img} />
        <h1>{comment}</h1>
        {children}
    </RedCont>
}