import styled from '@emotion/styled'

export const SidebarContainer= styled.div`
width:${p => p.isSidebarOpen ? '20%' : '5%'};
max-width:280px;
min-width:80px;
position: relative;  //toggler
background-image:linear-gradient(
    315deg,
    black 0%,
    lightBlue 74%
);
transition:.2s ease-in all;
`
export const SidebarHeader= styled.h2`
padding: 10px 10px;
text-align:center;
margin-bottom:10px;
`

export const MenuItemContainer = styled.div`

`;

export const MenuItem= styled.div`
/* text-align:center; */
padding:8px;
font-weight:600;
color:${p => p.selected ? 'rgba(255 ,255, 255)' : 'rgba(19, 15, 64)'};
&:hover {
    color:#fff;
    transition:.1s easy-in all;
}
&:after{
    content:'';
    border:2px solid ${p => p.selected ? 'rgba(255,255,255)': 'rgb(34, 71, 108)'};
    display:block;
    margin:8px 0 4px;
};

${p => !p.selected && `
&:hover {
    &:after {
        border: 1px solid rgba(255,255,255, 0.2);
    transition:.1s easy-in all;

    }
}
`}


`;


export const Text = styled.p`
display:inline;
font-size:18px;
`;


export const Icon = styled.img`
height:30px;
width:30px;
padding-right:20px;
`;


//togglerrr----
export const TogglerContainer = styled.div`
position:absolute;
width:25%;
bottom:10%;
left:0;
right: 0;
margin:0 auto;
/* color:black; */
`;

export const Toggler= styled.div`
height:40px;
cursor: pointer;
/* border:1px solid blue; */
position: relative;  //horizontal line

&:after {
    content:'';
    position:absolute;
    left:0;
    top:.25em;
    width:100%;
    height:.2em;
    background:#fff;
    box-shadow: 
    0 .75em 0 0 #fff,
    0 1.5em 0 0 #fff;


}
`
