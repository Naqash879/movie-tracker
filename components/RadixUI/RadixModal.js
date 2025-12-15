"use client";

import * as Dialog from "@radix-ui/react-dialog";

export default function RadixModal() {
  return (
    <Dialog.Root>
      {/* Trigger button */}
      <Dialog.Trigger className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Open Modal
      </Dialog.Trigger>

      {/* Modal */}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-96 p-6 bg-white rounded-lg -translate-x-1/2 -translate-y-1/2 shadow-lg">
          <Dialog.Title className="text-lg font-bold mb-4">Hello!</Dialog.Title>
          <Dialog.Description className="mb-4">
            This is a Radix UI modal using Tailwind CSS.
          </Dialog.Description>

          <div className="flex justify-end gap-2">
            <Dialog.Close className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
              Close
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
