import styled from "styled-components"

const Header = () =>{
    function filterJobs(arg0: string): void {
        throw new Error("Function not implemented.")
    }

    return (
        <Head>
        <FilterDiv>
          <button onClick={() => filterJobs('Frontend')}>Frontend</button>
          <button onClick={() => filterJobs('Fullstack')}>Fullstack</button>
          <button onClick={() => filterJobs('Backend')}>Backend</button>
        </FilterDiv>
      </Head>
    )
}

const FilterDiv = styled.div`
    
`

const Head = styled.div`
  
  right: 0;
  position: absolute;
  top: 0;
  background-color: green;
  width: 100%;
  height: 156px;
`
export default Header