import styled from '@emotion/styled'

export const SidebarContainer= styled.div`
@media (min-width:800px){ 
    width:${p => p.isSidebarOpen ? '20%' : '5%'}
};
@media (max-width:500px){
    width:${p => p.isSidebarOpen ? '100%' : '5%'}
};
@media (max-width: 800px){
width:${p => p.isSidebarOpen ? '100%' : '5%'};
};
max-width:280px;
/* max-width:100%; */
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
padding: 15px 6px;
text-align:center;
margin-bottom:10px;
/* display:${p => p.isSidebarOpen ? 'inline' : 'none'}; */
`
export const sidebarHeaderText = styled.div`
display:${p => p.isSidebarOpen ? 'inline' : 'none'};
`;

export const MenuItemContainer = styled.div`

`;

export const MenuItem= styled.div`
/* text-align:center; */
${p => !p.isSidebarOpen && `
text-align:center;padding:8px 6px 0px 10px;
${p.selected && 'background-color:rgba(0, 0, 0, 0.6)'};
`}
padding:8px;
font-weight:600;
color:${p => p.selected ? 'rgba(255 ,255, 255);background-color:rgba(0, 0, 0, 0.2)' : 'rgba(19, 15, 64)'};
white-space:nowrap;  //if menuitem is so long  like in place of transaction if it is long string it will come out of sidebar and in next line ---so to prevent this nowrap
&:hover {
    color:#fff;
    transition:.1s easy-in all;
}
&:after{
    content:'';
    border:2px solid ${p => p.selected ? 'rgba(255,255,255,0.2)': 'rgb(121, 160, 184)'};
    display:block;
    margin:8px 0px 0px;
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
display:${p => p.isSidebarOpen ? 'inline' : 'none'};
font-size:18px;
`;


export const Icon = styled.img`
//this dynamic styling is for padding if onlysidebar is open
${p => p.isSidebarOpen && `padding-right:20px;
transition:0.4s ease-in all;`}
height:30px;
width:30px;
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
