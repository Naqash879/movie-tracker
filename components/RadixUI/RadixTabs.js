"use client";

import * as Tabs from "@radix-ui/react-tabs";

export default function MyTabs() {
  return (
    <Tabs.Root defaultValue="tab1" className="w-96">
      <Tabs.List className="flex border-b mb-2">
        <Tabs.Trigger
          value="tab1"
          className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:font-bold"
        >
          Tab 1
        </Tabs.Trigger>
        <Tabs.Trigger
          value="tab2"
          className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:font-bold"
        >
          Tab 2
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="tab1" className="p-4 bg-gray-50 rounded">
        Content for Tab 1
      </Tabs.Content>
      <Tabs.Content value="tab2" className="p-4 bg-gray-50 rounded">
        Content for Tab 2
      </Tabs.Content>
    </Tabs.Root>
  );
}
