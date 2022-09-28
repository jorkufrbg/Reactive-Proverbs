import { Fragment } from "react";

import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

type LayoutProps = { children?: React.ReactNode }

const Layout = (props: LayoutProps) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
