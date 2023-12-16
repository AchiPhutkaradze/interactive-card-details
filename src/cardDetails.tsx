import styled from "styled-components";
import IconComplete from "./assets/icon-complete.svg";
function CardDetails(props: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  number: string;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
  month: string;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  zipCode: string;
  setZipCode: React.Dispatch<React.SetStateAction<string>>;
}) {
  const Continue = () => {
    if (props.page === 1) {
      props.setPage(0);
      props.setYear("");
      props.setMonth("");
      props.setName("");
      props.setNumber("");
      props.setZipCode("");
    }
  };
  return (
    <Footer>
      <CompleteImg src={IconComplete} />
      <Thank>THANK YOU!</Thank>
      <AddedDetails>We’ve added your card details</AddedDetails>
      <ContinueBtn>
        <ContinueText onClick={Continue}>Continue</ContinueText>
      </ContinueBtn>
    </Footer>
  );
}
export default CardDetails;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 91px 24px 82px 24px;
  @media screen and (min-width: 1440px) {
    padding: 0 0 111px 40px;
    align-self: center;
  }
`;
const CompleteImg = styled.img`
  width: 80px;
  height: 80px;
`;

const Thank = styled.p`
  color: var(--Deep-Violet, #21092f);
  font-size: 28px;
  letter-spacing: 3.422px;
  padding-top: 35px;
`;
const AddedDetails = styled.p`
  color: var(--Purplish-Grey, #8f8694);
  font-size: 18px;
  font-style: normal;
  padding-top: 16px;
`;
const ContinueBtn = styled.button`
  border-radius: 8px;
  background: var(--Deep-Violet, #21092f);
  width: 327px;
  height: 53px;
  margin-top: 48px;
  @media screen and (min-width: 1440px) {
    width: 381px;
    cursor: pointer;
  }
`;
const ContinueText = styled.p`
  color: var(--White, #fff);
  font-size: 18px;
`;
