import styled from "styled-components";

export const FilterDiv = styled.div`
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  bottom: -10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  width: 92%;
  gap: 20px;
  height: 72px;
  background-color: white;
  padding: 30px 30px 30px 30px;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media (max-width: 680px) {
    height: auto;
  }
`;

export const SkillsContent = styled.div`
  color: #5CA5A5;
  background-color: #c8ffff;
  padding: 20px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: League Spartan;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.1230769231915474px;
  text-align: left;
`;

export const Skills = styled.div`
  display: flex;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  gap: 10px;
  @media (max-width: 700px) {
    position: static;
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 2fr);
  };
  @media (max-width: 520px) {
    grid-template-columns: repeat(2, 2fr);
  };
`;

export const Circle = styled.span`
  display: flex;
  margin: 8px;
  justify-content: center;
  opacity: 0.7;
  align-items: center;
  width: 5px;
  height: 5px;
  background-color: black;
  border-radius: 50%;
`;

export const PostedText = styled.span`
  font-family: League Spartan;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.13846154510974884px;
  text-align: left;
  color: #7C8F8F;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Posted = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const Position = styled.h3`
  font-family: League Spartan;
  font-size: 22px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #2B3939;
`;

export const Company = styled.h3`
  font-family: League Spartan;
  font-size: 18px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
  color: #5CA5A5;
`;

export const Img = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  @media (max-width: 700px) {
    position: absolute;
    top: -15%;
  };
  @media (max-width: 520px) {
    position: absolute;
    top: -10%;
  };
`;

export const Head = styled.div`
  right: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 156px;
  display: flex;
`;

export const UserDiv = styled.div`
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-bottom: 40px;
  background-color: white;
  border-left: 6px solid #5CA5A5;
  border-radius: 5px;
  width: 100%;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
  @media (max-width: 700px) {
    padding-top: 60px;
  };`;
  

export const Container = styled.section`
  position: relative;
  height: 100%;
  width: auto 1440px;
  padding: 240px 65px 20px 65px;
  margin: 0 auto;
  background-color: aliceblue;
  @media (max-width: 700px) {
    padding: 290px 10px 0 10px;
    display: flex;
    flex-direction: column;
    gap: 50px;
  };`;

export const Line = styled.div`
  width: 99%;
  padding: 0 10px 0 10px;
  height: 1px;
  background-color: black;
  display: none;
  opacity: 0.5;
  @media (max-width: 700px) {
    display: block;
  };
`

export const FilterButtonDiv = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 680px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`