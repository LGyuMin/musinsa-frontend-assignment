import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.8);
    z-index: 10;
    display: flex;
    align-items: center;
    .loading {
        display: inline-block;
        width: 100px;
        height: 100px;
        border: 5px solid rgba(0, 0, 0, 0.65);
        border-radius: 50%;
        border-top-color: #fff;
        -webkit-animation:spin 1s ease-in-out infinite;
        animation: spin 1s ease-in-out infinite;
        margin: 0 auto;
    }
    
    @-webkit-keyframes spin {
        from { -webkit-transform: rotate(0deg); }
        to { -webkit-transform: rotate(360deg); }
    }
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`

const Loading = () => {
    return (
        <StyledDiv>
            <div className="loading"></div>
        </StyledDiv>
    )
}

export default Loading