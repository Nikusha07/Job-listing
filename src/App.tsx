import { useState } from 'react';
import data from './Package.json'
import { svgData } from './Assets/BackgroundSvg';
import {
  Container,
  UserDiv,
  Img,
  About,
  Company,
  Position,
  Posted,
  PostedText,
  Circle,
  Skills,
  SkillsContent,
  Head,
  FilterDiv,
} from './Styled/styled'


const MyForm: React.FC = () => {
  const [filteredJobs, setFilteredJobs] = useState(data);

  const filterJobs = (criteria: string) => {
    const filtered = data.filter((job) => job.role === criteria);
    setFilteredJobs(filtered);
  };

const divStyle = {
  background: `url("data:image/svg+xml,${encodeURIComponent(svgData)}") center/cover no-repeat`,
  width: '100%', 
  height: '200px', 
};
  return (
    <Container>
      <Head style={divStyle}>
        <FilterDiv>
          <button onClick={() => filterJobs('Frontend')}>Frontend</button>
          <button onClick={() => filterJobs('Fullstack')}>Fullstack</button>
          <button onClick={() => filterJobs('Backend')}>Backend</button>
        </FilterDiv>
      </Head>
      {filteredJobs.map((item) => (
        <UserDiv key={item.id}>
          <Img src={item.logo} alt="Logo" />
          <About>
            <Company>{item.company}</Company>
            <Position>{item.position}</Position>
            <Posted>
              <PostedText>{item.postedAt}</PostedText>
              <Circle></Circle>
              <PostedText>{item.contract}</PostedText>
              <Circle></Circle>
              <PostedText>{item.location}</PostedText>
            </Posted>
          </About>
          <Skills>
            {item.role && <SkillsContent>{item.role}</SkillsContent>}
            {item.level && <SkillsContent>{item.level}</SkillsContent>}
            {item.languages[0] && <SkillsContent>{item.languages[0]}</SkillsContent>}
            {item.languages[1] && <SkillsContent>{item.languages[1]}</SkillsContent>}
            {item.languages[2] && <SkillsContent>{item.languages[2]}</SkillsContent>}
          </Skills>
        </UserDiv>
      ))}
    </Container>
  );
};
export default MyForm;

