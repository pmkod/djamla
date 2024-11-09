import React from "react";
import {
  IconBasket,
  IconHeart,
  IconLogout,
  IconUser,
} from "@tabler/icons-react";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuTriggerItem,
  SubMenu,
} from "../../react/components/core/menu";
import { ContextMenuTrigger } from "../../react/components/core/context-menu";

const ContextMenuPage = () => {
  return (
    <div>
      <div className="p-20">
        <Menu>
          <ContextMenuTrigger asChild>
            <div className="flex h-52 w-96 items-center justify-center rounded border border-dashed border-base-400">
              Right click here
            </div>
          </ContextMenuTrigger>

          <MenuContent>
            <SubMenu>
              <MenuTriggerItem>
                <IconUser className="h-4 w-4" />
                Has sub menu
              </MenuTriggerItem>
              <MenuContent>
                <MenuItem value="item-1">Item 1</MenuItem>
                <MenuItem value="item-2">Item 2</MenuItem>
                <MenuItem value="item-3">Item 3</MenuItem>
              </MenuContent>
            </SubMenu>
            <MenuSeparator />
            <MenuItem value="cart">
              <IconBasket className="h-4 w-4" />
              Cart
            </MenuItem>
            <MenuItem value="wishes">
              <IconHeart className="h-4 w-4" />
              Wishes
            </MenuItem>
            <MenuItem value="logout">
              <IconLogout className="h-4 w-4" />
              Logout
            </MenuItem>
          </MenuContent>
        </Menu>
      </div>
    </div>
  );
};

export default ContextMenuPage;