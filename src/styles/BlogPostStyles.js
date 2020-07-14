import styled from 'styled-components';

export const BlogPostWrapper = styled.div`
  padding-top: 8px;
  margin-bottom: 20px;
  border-top: 1px solid #cccccc;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
`;

export const PostImage = styled.div`
  float: left;
  display: flex
  img {
    max-width: 150px;
  }
`;

export const PostDescription = styled.div`
  display: flex
  float: right;
  margin-left: 1%;
`;

export const PostTitle = styled.h2`
  margin-bottom: 5px;
  line-height: 1.5;
  font-weight: 400;
  margin: 0;
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

  > span:not(:first-child):before {
    content: '•';
    margin: 0 8px;
  }

  .post__info-bold {
    font-weight: bold;
  }
`;

export const PostInfoElement = styled.span`
  font-weight: bold;
  color: ${props => props.color || '#000'};
`;

export const PostUrl = styled.div`
  margin-top: 2rem;
  padding-top: 8px;
  a {
    color: #000;
    text-decoration: none;
    border-bottom: 0.125rem solid;
    line-height: 1;
    letter-spacing: 0.125em;
    font-weight: 600;
    font-family: "SofiaProWeb", Helvetica, Arial, sans-serif;
  }

`;