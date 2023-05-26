import styled from 'styled-components';
import { STAGE_WIDTH, STAGE_HEIGHT } from '../../setup';

export const StyledStage = styled.div`
  display: grid;
  grid-template-columns: repeat(${STAGE_WIDTH}, 30px);
  grid-template-rows: repeat(${STAGE_HEIGHT}, 30px);
  grid-gap: 1px;
  border: 1px solid #e0aaff;
  background: #e0aaff;
`;