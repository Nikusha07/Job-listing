import styled from "styled-components";

export const FilterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 20px;
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
`;

export const Head = styled.div`
  right: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 156px;
`;

export const UserDiv = styled.div`
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-bottom: 40px;
  background-color: white;
  border-left: 4px solid blue;
  border-radius: 5px;
  width: 100%;
  @media (max-width: 1100px) {
    flex-direction: column;
  }`;

export const Container = styled.section`
  position: relative;
  height: 100%;
  width: auto 1440px;
  padding: 240px 65px 20px 65px;
  margin: 0 auto;
  background-color: aliceblue;
`;
