import { Button, Rating, Tab, TabContent, TabList, Tabs } from "@repo/solid-ui"
import { ToastExample } from "~/components/toast-example"

const Sixth = () => {
  return (

    <div class="min-h-screen bg-base-50">
        <div>




            <Tabs defaultValue="account">
                <TabList size="sm">
                    <Tab value="account">Account</Tab>
                    <Tab value="settings">Settings</Tab>
                </TabList>
                <TabContent value="account">qrgjmoqnrmgorngqerignrez</TabContent>
                <TabContent value="settings">qermguqhermgqrgn</TabContent>
            </Tabs>

        </div>
        <div class="p-10">
aaaaaaaaaaaaa
        </div>

        <div class="p-10">
            <Rating />
        </div>

        <div class="p-10"><Button>Aaa</Button>
        </div>

        <div class="p-10">
            <ToastExample />
        </div>

    </div>
  )
}

export default Sixth