import { ComponentPreview } from "@/components/core/component-preview";
import { DocText } from "@/components/core/doc-text";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  modalCode,
  ModalContent,
  ModalExample,
  modalExampleCode,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "@repo/react-ui";
import { Metadata } from "next";

const title = "Modal";
const description = "An overlay dialog for focused content.";

export const metadata: Metadata = {
  title,
  description,
};

const ModalPage = () => {
  return (
    <>
      <DocText>{title}</DocText>
      <DocText level="paragraph">{description}</DocText>
      <ComponentPreview>
        <div className="grid grid-cols-3 gap-4">
          <Modal>
            <ModalTrigger asChild>
              <Button variant="outline" colorScheme="black">
                Open xs Modal
              </Button>
            </ModalTrigger>
            <ModalContent size="xs">
              <ModalHeader>
                <ModalCloseButton />

                <ModalTitle>Title</ModalTitle>
                <Button size="sm">Save</Button>
              </ModalHeader>
              <ModalBody>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  ad a laboriosam qui, quo modi fuga.
                </div>
                <div className="h-screen"></div>
              </ModalBody>
            </ModalContent>
          </Modal>
          <Modal>
            <ModalTrigger asChild>
              <Button variant="outline" colorScheme="black">
                Open sm Modal
              </Button>
            </ModalTrigger>
            <ModalContent size="sm">
              <ModalHeader>
                <ModalCloseButton />

                <ModalTitle>Title</ModalTitle>
                <Button size="sm">Save</Button>
              </ModalHeader>
              <ModalBody>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  ad a laboriosam qui, quo modi fuga.
                </div>
                <div className="h-screen"></div>
              </ModalBody>
            </ModalContent>
          </Modal>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  ad a laboriosam qui, quo modi fuga.
                </div>
                <div className="h-screen"></div>
              </ModalBody>
            </ModalContent>
          </Modal>

          <Modal>
            <ModalTrigger asChild>
              <Button variant="outline" colorScheme="black">
                Open lg Modal
              </Button>
            </ModalTrigger>
            <ModalContent size="lg">
              <ModalHeader>
                <ModalCloseButton />

                <ModalTitle>Title</ModalTitle>
                <Button size="sm">Save</Button>
              </ModalHeader>
              <ModalBody>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  ad a laboriosam qui, quo modi fuga.
                </div>
                <div className="h-screen"></div>
              </ModalBody>
            </ModalContent>
          </Modal>

          <Modal>
            <ModalTrigger asChild>
              <Button variant="outline" colorScheme="black">
                Open xl Modal
              </Button>
            </ModalTrigger>
            <ModalContent size="xl">
              <ModalHeader>
                <ModalCloseButton />

                <ModalTitle>Title</ModalTitle>
                <Button size="sm">Save</Button>
              </ModalHeader>
              <ModalBody>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  ad a laboriosam qui, quo modi fuga.
                </div>
                <div className="h-screen"></div>
              </ModalBody>
            </ModalContent>
          </Modal>

          <Modal>
            <ModalTrigger asChild>
              <Button variant="outline" colorScheme="black">
                Open 2xl Modal
              </Button>
            </ModalTrigger>
            <ModalContent size="2xl">
              <ModalHeader>
                <ModalCloseButton />

                <ModalTitle>Title</ModalTitle>
                <Button size="sm">Save</Button>
              </ModalHeader>
              <ModalBody>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  ad a laboriosam qui, quo modi fuga.
                </div>
                <div className="h-screen"></div>
              </ModalBody>
            </ModalContent>
          </Modal>

          <Modal>
            <ModalTrigger asChild>
              <Button variant="outline" colorScheme="black">
                Open 3xl Modal
              </Button>
            </ModalTrigger>
            <ModalContent size="3xl">
              <ModalHeader>
                <ModalCloseButton />

                <ModalTitle>Title</ModalTitle>
                <Button size="sm">Save</Button>
              </ModalHeader>
              <ModalBody>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  ad a laboriosam qui, quo modi fuga.
                </div>
                <div className="h-screen"></div>
              </ModalBody>
            </ModalContent>
          </Modal>

          <Modal>
            <ModalTrigger asChild>
              <Button variant="outline" colorScheme="black">
                Open full screen Modal
              </Button>
            </ModalTrigger>
            <ModalContent size="fullscreen">
              <ModalHeader>
                <ModalCloseButton />

                <ModalTitle>Title</ModalTitle>
                <Button size="sm">Save</Button>
              </ModalHeader>
              <ModalBody>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  ad a laboriosam qui, quo modi fuga.
                </div>
                <div className="h-screen"></div>
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      </ComponentPreview>
      <DocText level="titleTwo">Installation</DocText>
      <SyntaxHighlighter language="typescript">{modalCode}</SyntaxHighlighter>
      <DocText level="titleTwo">Example</DocText>
      <ComponentPreview>
        <ModalExample />
      </ComponentPreview>
      <SyntaxHighlighter language="typescript">
        {modalExampleCode}
      </SyntaxHighlighter>
    </>
  );
};

export default ModalPage;
