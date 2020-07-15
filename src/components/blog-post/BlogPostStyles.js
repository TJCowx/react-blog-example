import styled from 'styled-components';

export const BlogPostWrapper = styled.div`
  padding-top: 8px;
  margin-bottom: 20px;
  border-top: 1px solid #cccccc;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;

  heigh: initial;
  justify-content: flex-start;

  @media (min-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const PostImage = styled.div`
  float: left;
  min-height: initial;
  
  @media (min-width: 768px) {
    margin-left: 0px;
    max-width: 33.3333%;

    img {
      max-width: 100%
    }
  }

  @media (max-width: 767px)  {
    padding-left: 0px;
    padding-right: 0px;
    img {
      max-width: 100%
    }
  }
`;

export const PostDescription = styled.div`
  display: flex;
  min-height: initial;
  float: right;
  flex-direction: column;

  @media (min-width: 1024px) {
    margin-left: 4.16667%;
    width: 62.5%;
  }

  @media (min-width: 768px) {
    margin-left: 4.16667%;
    width: 62.5%;
  }

  @media (max-width: 767px) {
    padding-left: 0px;
    padding-right: 0px;
}

`;

export const PostTitle = styled.h2`
  margin-bottom: 1rem;
  line-height: 1.5;
  font-weight: 400;
  text-decoration: none;
  font-family: SofiaProWeb, Helvetica, Arial, sans-serif;

  @media(min-width: 1440px) {
    font-size: calc(2rem + (16 * (100vw - 1440px)) / 1119);
  }

  @media(min-width: 768px) {
    font-size: calc(1.5rem + (8 * (100vw - 768px)) / 671);
  }

  @media(min-width: 360px) {
    font-size: calc(1.25rem + (4 * (100vw - 360px)) / 407);
  }

  a {
    color: #000;
    text-decoration: none;
  }
`;

export const PostInfo = styled.div`
  font-style: italic;
  line-height: 1.5;

  span {
    display: inline-block;
  }

  > span:not(:last-child):after {
    content: '•';
    margin: 0 8px;
  }
`;

export const PostInfoElement = styled.span`
  font-weight: bold;
  color: ${props => props.color || '#000'};
`;

export const PostUrl = styled.div`
  margin-top: 2rem;
  padding-top: 8px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.125em;
  font-family: SofiaProWeb, Helvetica, Arial, sans-serif;
  line-height: 1;

  a {
    color: #000;
    text-decoration: none;
    border-bottom: 0.125rem solid;
  }

`;