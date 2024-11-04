import { Button } from "../../react/components/core/button";

export default function ButtonPage() {
  return (
    <div>
      <div className="pt-20 px-8 flex gap-10 flex-wrap">
        <Button variant="solid">Download</Button>
        <Button variant="outline">Download</Button>
        <Button variant="ghost">Download</Button>

        <Button variant="solid" colorScheme="red">
          Download
        </Button>
        <Button variant="outline" colorScheme="red">
          Download
        </Button>
        <Button variant="ghost" colorScheme="red">
          Download
        </Button>

        <Button variant="solid" colorScheme="black">
          Download
        </Button>
        <Button variant="outline" colorScheme="black">
          Download
        </Button>
        <Button variant="ghost" colorScheme="black">
          Download
        </Button>
        <Button variant="solid" isLoading size="xl">
          Download
        </Button>
        <Button variant="solid" disabled>
          Download
        </Button>
        <Button variant="outline">Download</Button>
        <Button variant="outline">Download</Button>
        <Button variant="ghost">Download</Button>
        <Button variant="ghost">Download</Button>
        {/* <Button variant="outline">Download</Button> */}
        {/* <Button variant="outline">Download</Button> */}
      </div>
    </div>
  );
}
