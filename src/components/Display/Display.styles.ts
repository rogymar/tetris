import styled from 'styled-components';

type Props = {
    gameOver?: boolean;
}

export const StyledDisplay = styled.div<Props>`
    box-sizing: border-box;
    display: flex;
    align-items: space-between;
    margin: 0 0 20px 0;
    padding: 10px;
    border: 2px solid #e0aaff;
    min-height: 20px;
    width: 100%;
    border-radius: 10px;
    color: ${props => (props.gameOver ? 'red' : '#d4bbfc')};
    background: #240046;
    font-family: 'Pangolin', cursive;
    font: 0.8rem;
`;