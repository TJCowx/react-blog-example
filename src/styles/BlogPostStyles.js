import styled from 'styled-components';

export const BlogPostWrapper = styled.div`
  padding-top: 8px;
  margin-bottom: 20px;
  border-top: 1px solid #cccccc;
  display: flex;

  &:first-of-type {
    border-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const PostImage = styled.div`
  float: left;
`;

export const PostDescription = styled.div`
  float: right;
  margin-left: 1%;
`;

export const PostTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 1.8;
  margin: 0;
  text-decoration: none;

  a {
    color: #2e2e2c;
    background-color: #f8dc3d;
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