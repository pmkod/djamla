import { Clipboard, ToggleGroup, ToggleItem,
    Dropzone, DropzoneText, DropzoneTrigger,
    Button,
    Menu,
    MenuContent,
    MenuGroup,
    MenuGroupLabel,
    MenuItem,
    MenuSeparator,
    MenuTrigger,
    MenuTriggerItem,
    SubMenu,
    ContextMenuTrigger,
 } from "@repo/solid-ui"
import { IconBasket, IconHeart, IconLogout, IconUser } from "@tabler/icons-solidjs"

 const Home = () => { 
    return (
        <div class="">

            <div class="p-10">
                <Clipboard value="aaa" />
            </div>

            <div class="h-52 bg-blue-50 p-10">
            <ToggleGroup multiple orientation="horizontal">
      <ToggleItem value="a" size="xl" variant="outline">
        A
      </ToggleItem>
      <ToggleItem value="b" size="xl" variant="outline">
        B
      </ToggleItem>
      <ToggleItem value="c" size="xl" variant="outline">
        C
      </ToggleItem>
    </ToggleGroup>
            </div>

            <div class="p-10">

    <Dropzone maxFiles={5}>
      <DropzoneText>Drop your file here</DropzoneText>
      <DropzoneTrigger>
        <Button size="sm">Select file</Button>
      </DropzoneTrigger>
    </Dropzone>
            </div>
            <div class="p-10">

            </div>
            <div class="p-10">
            <Menu>
      <MenuTrigger>
        <Button>Menu</Button>
      </MenuTrigger>

      <MenuContent>
        <SubMenu>
          <MenuTriggerItem>
            <IconUser class="h-4 w-4" />
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
          <MenuItem value="cart">
            <IconBasket class="h-4 w-4" />
            Cart
          </MenuItem>
          <MenuItem value="wishes">
            <IconHeart class="h-4 w-4" />
            Wishes
          </MenuItem>
        </MenuGroup>
        <MenuItem value="logout">
          <IconLogout class="h-4 w-4" />
          Logout
        </MenuItem>
      </MenuContent>
    </Menu>
            </div>
            <div class="p-10">
            <Menu>
      <ContextMenuTrigger>
        <div class="border-base-400 text-base-800 flex h-52 w-96 items-center justify-center rounded border border-dashed">
          Right click here
        </div>
      </ContextMenuTrigger>

      <MenuContent>
        <SubMenu>
          <MenuTriggerItem>
            <IconUser class="h-4 w-4" />
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
          <IconBasket class="h-4 w-4" />
          Cart
        </MenuItem>
        <MenuItem value="wishes">
          <IconHeart class="h-4 w-4" />
          Wishes
        </MenuItem>
        <MenuItem value="logout">
          <IconLogout class="h-4 w-4" />
          Logout
        </MenuItem>
      </MenuContent>
    </Menu>
            </div>
            

        </div>
    )
 }

 export default Home