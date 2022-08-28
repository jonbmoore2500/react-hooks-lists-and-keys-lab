import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkTags = links.map((link) => {
    return <a key={link + 'Key'} href={'#' + link} >{link}</a>
  })
  console.log(linkTags)
  return <nav>{linkTags}</nav>;
}

export default NavBar;
