export const modalExampleCode = `import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "../core/modal";
import { Button } from "../core/button";

export const ModalExample = () => {
  return (
    <Modal>
      <ModalTrigger asChild>
        <Button variant="outline" colorScheme="black">
          Open md Modal
        </Button>
      </ModalTrigger>
      <ModalContent size="md">
        <ModalHeader>
          <ModalCloseButton />

          <ModalTitle>Title</ModalTitle>
          <Button size="sm">Save</Button>
        </ModalHeader>
        <ModalBody>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ad a
            laboriosam qui, quo modi fuga.
          </div>
          <div className="h-screen"></div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
`;
