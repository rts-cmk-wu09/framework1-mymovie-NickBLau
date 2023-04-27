import styled from "styled-components";
import { TbClockHour3 } from "react-icons/tb";

const StyledP = styled.p`
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const RunTime = () => {
  return (
    <StyledP>
      <TbClockHour3 /> 1h 47min
    </StyledP>
  );
};

export default RunTime;
