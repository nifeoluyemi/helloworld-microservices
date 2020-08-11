import React from "react";
import {
    Header,
    HeaderName,
    HeaderNavigation,
    // HeaderMenuButton,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
} from "carbon-components-react/es/components/UIShell";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import UserAvatar20 from "@carbon/icons-react/lib/user--avatar/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import { Link } from "react-router-dom";

const SiteHeader = () => (
    <Header aria-label="Hello World">
        <SkipToContent />
        <HeaderName element={Link} to="/">
            Hello World
        </HeaderName>
        <HeaderNavigation aria-label="WFSS Internal">
            <HeaderMenuItem element={Link} to="/new">Add New Language</HeaderMenuItem>
        </HeaderNavigation>
        <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Notifications">
                <Notification20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="User Avatar">
                <UserAvatar20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction element={Link} to="/logout" aria-label="App Switcher">
                <AppSwitcher20 />
            </HeaderGlobalAction>
        </HeaderGlobalBar>
    </Header>
);

export default SiteHeader;
