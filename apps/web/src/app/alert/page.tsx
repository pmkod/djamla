import { IconInfoCircle } from "@tabler/icons-react";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "../../react/components/core/alert";

export default function AlertPage() {
  return (
    <div>
      <div className="py-20 px-8 grid grid-cols-2 gap-10">
        <Alert>
          <AlertIcon>
            <IconInfoCircle size={20} />
          </AlertIcon>
          <AlertContent>
            <AlertTitle>Hello</AlertTitle>
            <AlertDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur cupiditate culpa, ex veniam impedit nobis aliquam
              officia error commodi atque?
            </AlertDescription>
          </AlertContent>
        </Alert>

        <Alert variant="outline">
          <AlertContent>
            <AlertTitle>Hello</AlertTitle>
            <AlertDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur cupiditate culpa, ex veniam impedit nobis aliquam
              officia error commodi atque?
            </AlertDescription>
          </AlertContent>
        </Alert>

        <Alert variant="soft">
          <AlertContent>
            <AlertTitle>Hello</AlertTitle>
            <AlertDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur cupiditate culpa, ex veniam impedit nobis aliquam
              officia error commodi atque?
            </AlertDescription>
          </AlertContent>
        </Alert>

        <Alert variant="plain">
          <AlertContent>
            <AlertTitle>Hello</AlertTitle>
            <AlertDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur cupiditate culpa, ex veniam impedit nobis aliquam
              officia error commodi atque?
            </AlertDescription>
          </AlertContent>
        </Alert>

        <Alert colorScheme="primary">
          <AlertContent>
            <AlertTitle>Hello</AlertTitle>
            <AlertDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur cupiditate culpa, ex veniam impedit nobis aliquam
              officia error commodi atque?
            </AlertDescription>
          </AlertContent>
        </Alert>

        <Alert variant="outline" colorScheme="primary">
          <AlertContent>
            <AlertTitle>Hello</AlertTitle>
            <AlertDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur cupiditate culpa, ex veniam impedit nobis aliquam
              officia error commodi atque?
            </AlertDescription>
          </AlertContent>
        </Alert>

        <Alert variant="soft" colorScheme="primary">
          <AlertContent>
            <AlertTitle>Hello</AlertTitle>
            <AlertDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur cupiditate culpa, ex veniam impedit nobis aliquam
              officia error commodi atque?
            </AlertDescription>
          </AlertContent>
        </Alert>

        <Alert variant="plain" colorScheme="primary">
          <AlertContent>
            <AlertTitle>Hello</AlertTitle>
            <AlertDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur cupiditate culpa, ex veniam impedit nobis aliquam
              officia error commodi atque?
            </AlertDescription>
          </AlertContent>
        </Alert>

        <Alert colorScheme="green">
          <AlertContent>
            <AlertTitle>Hello</AlertTitle>
            <AlertDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur cupiditate culpa, ex veniam impedit nobis aliquam
              officia error commodi atque?
            </AlertDescription>
          </AlertContent>
        </Alert>

        <Alert variant="outline" colorScheme="green">
          <AlertContent>
            <AlertTitle>Hello</AlertTitle>
            <AlertDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur cupiditate culpa, ex veniam impedit nobis aliquam
              officia error commodi atque?
            </AlertDescription>
          </AlertContent>
        </Alert>

        <Alert variant="soft" colorScheme="green">
          <AlertContent>
            <AlertTitle>Hello</AlertTitle>
            <AlertDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur cupiditate culpa, ex veniam impedit nobis aliquam
              officia error commodi atque?
            </AlertDescription>
          </AlertContent>
        </Alert>

        <Alert variant="plain" colorScheme="green">
          <AlertContent>
            <AlertTitle>Hello</AlertTitle>
            <AlertDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur cupiditate culpa, ex veniam impedit nobis aliquam
              officia error commodi atque?
            </AlertDescription>
          </AlertContent>
        </Alert>

        <Alert colorScheme="red">
          <AlertContent>
            <AlertTitle>Hello</AlertTitle>
            <AlertDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur cupiditate culpa, ex veniam impedit nobis aliquam
              officia error commodi atque?
            </AlertDescription>
          </AlertContent>
        </Alert>

        <Alert variant="outline" colorScheme="red">
          <AlertContent>
            <AlertTitle>Hello</AlertTitle>
            <AlertDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur cupiditate culpa, ex veniam impedit nobis aliquam
              officia error commodi atque?
            </AlertDescription>
          </AlertContent>
        </Alert>

        <Alert variant="soft" colorScheme="red">
          <AlertContent>
            <AlertTitle>Hello</AlertTitle>
            <AlertDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur cupiditate culpa, ex veniam impedit nobis aliquam
              officia error commodi atque?
            </AlertDescription>
          </AlertContent>
        </Alert>

        <Alert variant="plain" colorScheme="red">
          <AlertContent>
            <AlertTitle>Hello</AlertTitle>
            <AlertDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur cupiditate culpa, ex veniam impedit nobis aliquam
              officia error commodi atque?
            </AlertDescription>
          </AlertContent>
        </Alert>
      </div>
    </div>
  );
}
