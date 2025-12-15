"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Tabs from "@radix-ui/react-tabs";
import * as Tooltip from "@radix-ui/react-tooltip";
import * as Switch from "@radix-ui/react-switch";
import * as Checkbox from "@radix-ui/react-checkbox";
import { motion } from "framer-motion";
import { useState } from "react";

export default function RadixAllComponents() {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col gap-6 flex-shrink-0">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer">
            Menu
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="bg-white shadow-md rounded p-2 mt-2 min-w-[150px]">
            <DropdownMenu.Item className="px-3 py-2 rounded hover:bg-gray-100 cursor-pointer">
              Option 1
            </DropdownMenu.Item>
            <DropdownMenu.Item className="px-3 py-2 rounded hover:bg-gray-100 cursor-pointer">
              Option 2
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        {/* Switch */}
        <div className="flex items-center gap-2">
          <Switch.Root
            checked={isSwitchOn}
            onCheckedChange={setIsSwitchOn}
            className={`w-14 h-7 bg-gray-300 rounded-full relative transition-colors ${
              isSwitchOn ? "bg-blue-600" : ""
            }`}
          >
            <Switch.Thumb
              className={`block w-7 h-7 bg-white rounded-full shadow transform transition-transform ${
                isSwitchOn ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </Switch.Root>
          <span>{isSwitchOn ? "On" : "Off"}</span>
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2">
          <Checkbox.Root
            checked={isChecked}
            onCheckedChange={setIsChecked}
            className="w-6 h-6 border rounded flex items-center justify-center cursor-pointer"
          >
            <Checkbox.Indicator>✔</Checkbox.Indicator>
          </Checkbox.Root>
          <span>Check me</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto p-8 gap-8">
        {/* Header */}
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Welcome to Dashboard</h1>
          <Tooltip.Provider>
            <Tooltip.Root delayDuration={200}>
              <Tooltip.Trigger className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer">
                Help
              </Tooltip.Trigger>
              <Tooltip.Content className="bg-black text-white px-2 py-1 rounded mt-1 text-sm">
                Need assistance? Contact support.
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        </header>

        {/* Tabs Section */}
        <Tabs.Root defaultValue="tab1" className="w-full max-w-4xl">
          <Tabs.List className="flex border-b mb-4 gap-2 flex-wrap">
            <Tabs.Trigger
              value="tab1"
              className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:font-bold"
            >
              Overview
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab2"
              className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:font-bold"
            >
              Settings
            </Tabs.Trigger>
          </Tabs.List>

          {/* Tab Contents */}
          <Tabs.Content value="tab1" className="p-6 bg-white rounded shadow-md">
            <p>
              This is the overview content area. You can place charts, tables,
              or stats here.
            </p>

            {/* Modal */}
            <Dialog.Root>
              <Dialog.Trigger className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Open Modal
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
                <Dialog.Content asChild>
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed top-1/2 left-1/2 w-96 p-6 bg-white rounded-lg shadow-lg -translate-x-1/2 -translate-y-1/2"
                  >
                    <Dialog.Title className="text-lg font-bold mb-2">
                      Modal Action
                    </Dialog.Title>
                    <Dialog.Description className="mb-4">
                      This modal demonstrates actions from the dashboard.
                    </Dialog.Description>
                    <Dialog.Close className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                      Close
                    </Dialog.Close>
                  </motion.div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </Tabs.Content>

          <Tabs.Content value="tab2" className="p-6 bg-white rounded shadow-md">
            <p>
              Settings content with toggles and options. Adjust your preferences
              here.
            </p>
          </Tabs.Content>
        </Tabs.Root>
      </main>
    </div>
  );
}
