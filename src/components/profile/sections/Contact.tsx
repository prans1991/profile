import React, { useContext } from "react";
import { FlexBoxSection } from "../../../common/Elements";
import { ILink, ISectionInfo } from "../../../store/types";
import {
  getFilteredLinks,
  getIconUrl,
  valueIsArray,
  valueIsLinkInfo,
} from "../../../common/Utils";
import classNames from "classnames";
import styled from "styled-components";
import { ProfileContext } from "../../../store/context";
import { SECTIONS } from "../../../common/constants";

interface IContactProps {
  links?: ISectionInfo;
  refObj?: React.MutableRefObject<any>;
}

export const Contact = (props: IContactProps) => {
  const { links: propsLinks, refObj: propsRefObj } = props;
  const { isMobile } = useContext(ProfileContext);
  let {
    data: {
      sections: { links },
    },
    refs: { contactRef: refObj },
    environment,
  } = useContext(ProfileContext);
  if (propsLinks && propsRefObj) {
    links = propsLinks;
    refObj = propsRefObj;
  }
  const filteredLinks = getFilteredLinks(links.info as ILink[]);

  return (
    <ContactsSection
      justifyContent={isMobile ? "space-evenly" : "center"}
      alignItems="center"
      className="profile-section links"
      id={SECTIONS.LINKS}
      ref={refObj}
    >
      {valueIsArray(links.info) && valueIsLinkInfo(links.info)
        ? filteredLinks.map((link, index) => (
            <div
              key={index}
              className={classNames("link-wrapper", {
                "hide-profile-url": link.isExportOnly,
              })}
            >
              {!link.isExportOnly && (
                <a
                  className="link"
                  href={link.link}
                  target="_blank"
                  key={link.label}
                  rel="noopener noreferrer"
                >
                  <img
                    alt={link.label}
                    className={link.label}
                    src={getIconUrl(link.icon, environment)}
                  />
                </a>
              )}
            </div>
          ))
        : null}
    </ContactsSection>
  );
};

const ContactsSection = styled(FlexBoxSection)`
  .hide-profile-url {
    display: none;
  }
`;
