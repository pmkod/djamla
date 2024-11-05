import React from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "../../react/components/core/modal";
import { Button } from "../../react/components/core/button";

const ModalPage = () => {
  return (
    <div>
      <div className="p-20">
        <div className="flex gap-20 flex-wrap">
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
                Open fullscreen Modal
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
      </div>
    </div>
  );
};

export default ModalPage;
