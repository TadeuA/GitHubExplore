import styled from 'styled-components'

export const Container = styled.li`
  p{
    font-size:0.875rem;
    color: ${({theme})=>theme.colors['gray-text']};
    margin-top:0.5rem;
  }

  a{
    display: inline-block;
    margin-top: 1rem;
    color: ${({theme})=>theme.colors.rocketseat};
  }
`