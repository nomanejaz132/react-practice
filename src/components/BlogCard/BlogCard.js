import React from 'react'
import CardImage from '../../images/Card.jpg'
import AuthorPic from '../../images/Author.jpg'
import styled from 'styled-components'
import {FaRegHeart} from 'react-icons/fa'
import { FaRegCommentAlt } from 'react-icons/fa'


const Card = styled.div`
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: #f3f3f3;
  width: 25%;
  box-shadow: 8px 8px 10px #e0e0e0, -2px -2px 15px #ffffff;
  margin: 2rem;
`;
const BlogImage = styled.img`
  max-width: 100%;
  border-radius: 0.5rem;
  transform: translateY(-40px);
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2);
`;
const Title = styled.div`
  color: #522cad;
  font-size: 1.075rem;
  margin-bottom: 0.5rem;
`;
const BlogText = styled.div`
  color: #888888;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;
const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AuthorImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const Author = styled.div`
  margin-left: 1rem;
  flex: 1;
  color: #522cad;
`;
const Icon = styled.i`
  margin: 0 0.5rem 0 1.5rem;
  color: #522cad;
`;
const IconText = styled.div`
  color: #888888;
`;



function BlogCard() {
    return (
        <Card>
            <BlogImage src={CardImage} alt="Img Here!" />
            <Title>Fashion</Title>
            <BlogText>Fashion is popular style specially in clothing, footware,
                lifestyle, accessories, makeup, hairstyle, and body.</BlogText>
            <BottomRow>
                <AuthorImage src={AuthorPic} alt="Author" />
                <Author>Bob</Author>
                <Icon class="material-icons-outlined"><FaRegHeart /></Icon>
                <IconText>340</IconText>
                <Icon class="material-icons-outlined"><FaRegCommentAlt /></Icon>
                <IconText>80</IconText>
            </BottomRow>
        </Card>
    )
}

export default BlogCard
