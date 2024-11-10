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
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
  SubMenu,
} from "../../react/components/core/menu";
import { Button } from "../../../../../components/react/src/core/button";

const MenuPage = () => {
  return (
    <div>
      <div className="p-20">
        <Menu>
          <MenuTrigger asChild>
            <Button>Menu</Button>
          </MenuTrigger>

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
            <MenuGroup>
              <MenuGroupLabel>Labs</MenuGroupLabel>

              <MenuItem value="cart">
                <IconBasket className="h-4 w-4" />
                Cart
              </MenuItem>
              <MenuItem value="wishes">
                <IconHeart className="h-4 w-4" />
                Wishes
              </MenuItem>
            </MenuGroup>
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

export default MenuPage;
