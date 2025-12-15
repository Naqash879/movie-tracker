"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function RadixDropDown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Open Menu
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="bg-white shadow-md rounded p-2 mt-2">
        <DropdownMenu.Item className="px-3 py-1 rounded hover:bg-gray-100 cursor-pointer">
          Option 1
        </DropdownMenu.Item>
        <DropdownMenu.Item className="px-3 py-1 rounded hover:bg-gray-100 cursor-pointer">
          Option 2
        </DropdownMenu.Item>
        <DropdownMenu.Item className="px-3 py-1 rounded hover:bg-gray-100 cursor-pointer">
          Option 3
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
