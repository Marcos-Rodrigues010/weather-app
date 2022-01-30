import styled from 'styled-components';

export const InputCityArea = styled.div`
    padding:20px;
    margin-bottom:50px;

    .searchArea{
        width:400px;
        border-radius:20px;
        padding:0 8px;
        display:flex;
        align-items:center;
        background-color:#FFF;
    }

    input{
        padding:10px;
        outline:0;
        border:0;
        border-radius:20px;
        flex:1;
    }

    .searchButton{
        height:100%;
        padding:0 5px;
        border-radius:20px;
        cursor:pointer;
    }

    .searchArea__icon{
        width:22px;
        height:22px;
        color: #AAA;
    }

    @media(max-width:620px){

        padding:0;

        .searchArea{
            width:300px;
        }
    }
`;