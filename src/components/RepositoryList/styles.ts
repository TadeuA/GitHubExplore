import styled from 'styled-components'

export const UL = styled.ul`
  list-style:none;

  li{
    + li{
      margin-top: 1.25rem;
    }
  }
`
export const Container = styled.section`
  margin:2.5rem;

  h1{
    margin-bottom: 1rem;
  }
`