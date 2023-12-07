import styled from "styled-components";
import { ActionBtn } from "../../common/Elements";
import { ProfileContext } from "../../store/context";
import React, { useMemo } from "react";
import { getPreloadedAsset } from "../../common/Utils";

export const ContactMe = () => {
  const {
    setIsContactFormOpen,
    isMobile,
    data: {
      forms: { contactForm },
    },
    preloadedAssets,
  } = React.useContext(ProfileContext);

  const contactMeIcon = useMemo(
    () => getPreloadedAsset(preloadedAssets, "contactMeIcon"),
    [preloadedAssets],
  );

  return (
    <ContactMeButton onClick={() => setIsContactFormOpen(true)}>
      <img alt="contact-me" height={25} src={contactMeIcon} />
      {!isMobile && <>{contactForm.actionButtonLabel}</>}
    </ContactMeButton>
  );
};

const ContactMeButton = styled(ActionBtn)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  color: #fff;
  padding: 10px 20px;
  background: #3e3e3e;
  border-radius: 50px;
  right: 30px;
  bottom: 100px;
  text-transform: uppercase;
  font-weight: bold;

  img {
    background: #f0f0f0;
    padding: 5px;
    border-radius: 50%;
    margin-right: 5px;
  }
  &:hover {
    background: #000;
    border: 1px solid #fff;
  }
  @media only screen and (max-width: 767px) {
    padding: 5px;
    background: #3fc935;
    bottom: 80px;
    right: 20px;
    animation: blinker 5s linear infinite;
    box-shadow: rgb(0 0 0 / 20%) 0 -1px 0px 1px, inset #304701 0 -1px 0px,
      #3f9c35 0 2px 12px;
    &:hover {
      border: none;
      background: #3fc935;
    }
    img {
      margin-right: 0;
    }
  }
`;
