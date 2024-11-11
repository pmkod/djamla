import { useWindowEvent } from "@mantine/hooks";
import {
  Input,
  Kbd,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalTrigger,
} from "@repo/react-ui";
import { IconSearch } from "@tabler/icons-react";
import React, { useState } from "react";

const kKeyboardKey = "k";

export const Searcher = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const keydownHandler = (event: KeyboardEvent) => {
    event.preventDefault();
    if ((event.ctrlKey || event.metaKey) && event.key === kKeyboardKey) {
      openModal();
    }
  };

  useWindowEvent("keydown", keydownHandler);

  return (
    <Modal open={open} onOpenChange={({ open }) => setOpen(open)}>
      <ModalTrigger asChild>
        <div className="h-9 flex justify-between items-center pl-3 pr-1.5 bg-base-100 hover:bg-base-200 transition-colors border border-base-300 rounded cursor-pointer">
          <div className="text-sm font-medium text-base-400">Search</div>

          <Kbd size="md">Ctrl + k</Kbd>
        </div>
      </ModalTrigger>
      <ModalContent size="lg">
        <div className="border-b border-b-base-300">
          <ModalHeader>
            <IconSearch size={22} className="text-base-500 ml-2" />
            <Input variant="plain" size="lg" type="text" placeholder="Search" />
          </ModalHeader>
        </div>
        <ModalBody>
          <div className="h-screen"></div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
