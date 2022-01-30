import styled from 'styled-components';

export const WeatherDataArea = styled.div`

    @keyframes fade{
        to{bottom:20px; opacity:1;}
        from{bottom:0; opacity:0;}
    }

    width:640px;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius:30px;
    background-color:transparent;
    animation-name:fade;
    animation-duration:.5s;
    animation-fill-mode:forwards;
    position:relative;

    .mainInfos{
        margin-bottom:20px;

        .cityName h2{
            margin:0 0 20px 0;
            padding:0;
            font-size:28px;
            text-align:center;
            color:#cee1fd;
        }

        .iconTemp{
            margin-bottom:12px;
            text-align:center;

            .mainInfos__icon{
                width:50px;
                height:50px;
                color:#b6d2fc;
            }
        }

        .temp{
            text-align:center;
            font-size:35px;
            font-weight:bold;
            color:#cee1fd;
        }

        .desc{
            color:#CCC;
            text-align:center;
            color:#b6d2fc;
        }
    }

    .supplementaryInfosArea{
        width:auto;   
        background-color:#b6d2fc;
        border-radius:30px;
        padding:15px;
        display:grid;
        grid-template-columns: auto auto;
        justify-content:space-evenly;
        align-items:center;
        color:#000;

        .supplementaryInfo{
            padding:4px;

            .supplementaryInfo__title{
                font-size:12px;
                color: rgb(96, 157, 248);
            }

            .supplementaryInfo__data{
                font-size:17px;
                color:#FFF;
            }
        }
        
    }

    @media(max-width:620px){
        width:300px;
    }
`;