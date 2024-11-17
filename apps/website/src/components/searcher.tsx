import { coreComponents } from "@/constants/components";
import { headerLinks, sidebarGettingStartedLinks } from "@/constants/links";
import { useDidUpdate, useWindowEvent } from "@mantine/hooks";
import {
  Input,
  Kbd,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalTrigger,
} from "@repo/react-ui";
import { IconFile, IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import React, {
  ChangeEventHandler,
  PropsWithChildren,
  ReactNode,
  useState,
} from "react";

const kKeyboardKey = "k";

export const Searcher = () => {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  const openModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const handleQChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setQ(e.target.value);
  };

  useWindowEvent("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === kKeyboardKey) {
      event.preventDefault();
      openModal();
    }
  });

  // useWindowEvent("keydown", keydownHandler);

  const { links, components, noResults } = useSearch(q);

  useDidUpdate(() => {
    if (open) {
      setQ("");
    }
  }, [open]);

  return (
    <Modal open={open} onOpenChange={({ open }) => setOpen(open)}>
      <ModalTrigger asChild>
        <div className="bg-base-100 hover:bg-base-200 border-base-300 flex h-9 cursor-pointer items-center justify-between rounded-sm border pl-3 pr-1.5 transition-colors">
          <div className="text-base-400 text-sm font-medium">Search</div>
          <div className="hidden sm:block">
            <Kbd size="md">Ctrl + k</Kbd>
          </div>
        </div>
      </ModalTrigger>
      <ModalContent size="lg">
        <div className="border-b-base-300 border-b">
          <ModalHeader>
            <IconSearch size={22} className="text-base-500 ml-2" />
            <Input
              variant="plain"
              size="lg"
              type="text"
              placeholder="Search"
              value={q}
              onChange={handleQChange}
            />
          </ModalHeader>
        </div>
        <ModalBody>
          <div className="pt-4">
            {noResults ? (
              <div className="flex h-44 items-center justify-center">
                <p className="text-base-500">No results</p>
              </div>
            ) : (
              <>
                <SearchSuggestionGroup visible={links.length > 0}>
                  <SearchSuggestionGroupLabel>Links</SearchSuggestionGroupLabel>
                  <SearchSuggestionGroupBody>
                    {links.map(({ path, label }, index) => (
                      <SearchSuggestionItem
                        key={index}
                        path={path}
                        label={label}
                        onClick={hideModal}
                      />
                    ))}
                  </SearchSuggestionGroupBody>
                </SearchSuggestionGroup>

                <SearchSuggestionGroup visible={components.length > 0}>
                  <SearchSuggestionGroupLabel>
                    Components
                  </SearchSuggestionGroupLabel>
                  <SearchSuggestionGroupBody>
                    {components.map(({ path, label }, index) => (
                      <SearchSuggestionItem
                        key={index}
                        path={path}
                        label={label}
                        onClick={hideModal}
                      />
                    ))}
                  </SearchSuggestionGroupBody>
                </SearchSuggestionGroup>
              </>
            )}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const useSearch = (q: string) => {
  const allLinks = [...sidebarGettingStartedLinks, ...headerLinks];

  if (!q) {
    return {
      components: coreComponents,
      links: allLinks,
    };
  }

  q = q.toLowerCase().replaceAll(" ", "");

  const components = coreComponents
    .filter(
      ({ label, keywords }) =>
        label.toLowerCase().includes(q) ||
        keywords.join("-").replaceAll(" ", "").toLowerCase().includes(q),
    )
    .map(({ path, label }) => ({
      path,
      label,
    }));

  const links = allLinks
    .filter(({ label }) => label.replaceAll(" ", "").toLowerCase().includes(q))
    .map(({ path, label }) => ({
      path,
      label,
    }));

  return {
    components,
    links,
    noResults: components.length === 0 && links.length === 0,
  };
};

interface SearchSuggestionGroupProps {
  children: ReactNode;
  visible?: boolean;
}

const SearchSuggestionGroup = ({
  visible,
  children,
}: SearchSuggestionGroupProps) => {
  return visible ? <div className="pb-4">{children}</div> : null;
};

const SearchSuggestionGroupLabel = ({ children }: PropsWithChildren) => {
  return (
    <div className="text-base-400 mb-0.5 px-3.5 text-sm font-medium">
      {children}
    </div>
  );
};

const SearchSuggestionGroupBody = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

interface SearchSuggestionItemProps {
  label: string;
  path: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

const SearchSuggestionItem = ({
  path,
  label,
  onClick,
}: SearchSuggestionItemProps) => {
  return (
    <Link
      href={path}
      onClick={onClick}
      className="text-base-600 hover:bg-base-200 flex items-center rounded-sm px-3 py-1 font-medium transition-colors"
    >
      <IconFile size={20} className="mr-3" />
      {label}
    </Link>
  );
};
