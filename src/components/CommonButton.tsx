import styled from "styled-components";

const Wrapper = styled.button`
  padding: 20px 40px;

  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

interface CommonButtonProps {
  text: string;
  onClick: () => void;
}

const CommonButton = (props: CommonButtonProps) => {
  const { text, onClick } = props;

  return <Wrapper onClick={onClick}>{text}</Wrapper>;
};

export default CommonButton;
