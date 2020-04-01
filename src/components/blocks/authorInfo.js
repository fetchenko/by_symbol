import React from "react";
import styled from "styled-components";
import { SOCIAL_LINKS } from "../../constants";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Name = styled.h5`
  margin: 0;
  font-size: 1.1rem;
  letter-spacing: 1;
  color: ${props => props.theme.primary.main};
`;

const SocialLinks = styled.div`
  display: flex;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  padding: 5px;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  border: none;
  text-decoration: unset;
`;

function AuthorInfo() {
  return (
    <Container>
      <SocialLinks>
        {SOCIAL_LINKS.map(social => {
          return (
            <Link href={social.link} target="_blank">
              <Name>{social.name}</Name>
              <span>
                <Icon src={social.icon} alt={social.label} />
              </span>
            </Link>
          );
        })}
      </SocialLinks>
    </Container>
  );
}

export default AuthorInfo;
