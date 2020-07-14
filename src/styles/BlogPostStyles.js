import styled from 'styled-components';

export const BlogPostWrapper = styled.div`
  padding-top: 8px;
  margin-bottom: 20px;
  border-top: 1px solid #cccccc;
  display: flex;
`;

export const PostImage = styled.div`
  float: left;
  img {
    max-width: 150px;
  }
`;

export const PostDescription = styled.div`
  float: right;
  margin-left: 1%;
`;

export const PostTitle = styled.h1`
  margin-bottom: 5px;
  font-size: calc(-20.5898px + 1rem + 1.42985vw);
  line-height: 1.8;
  margin: 0;
  text-decoration: none;

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