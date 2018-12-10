// import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "Home",
      // LeftIcon: <p>home</p>,
      component: Link,
      to: "/"
    },
    {
      divider: true
    }
  ];

  if (config.userLinks) {
    config.userLinks.forEach(link => {
      NavList.navigate({
        primaryText: link.label,
        // LeftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        component: "a",
        href: link.url
      });
    });
  }

  NavList.navigate({ divider: true });

  // NavList.navigate({
  //   primaryText: "About",
  //   // LeftIcon: <FontIcon>person</FontIcon>,
  //   component: Link,
  //   to: "/about/"
  // });
  return NavList;
}
export default GetNavList;
