import { coreComponents } from "@/constants/components";
import { headerLinks } from "@/constants/links";
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
  useEffect,
  useState,
} from "react";

const kKeyboardKey = "k";

export const Searcher = () => {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  const openModal = () => {
    setOpen(true);
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
        <div className="h-9 flex justify-between items-center pl-3 pr-1.5 bg-base-100 hover:bg-base-200 transition-colors border border-base-300 rounded cursor-pointer">
          <div className="text-sm font-medium text-base-400">Search</div>

          <Kbd size="md">Ctrl + k</Kbd>
        </div>
      </ModalTrigger>
      <ModalContent size="lg">
        <div className="border-b border-b-base-300">
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
              <div className="h-44 flex items-center justify-center">
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
  const allLinks = [...headerLinks];

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
        keywords.join("-").replaceAll(" ", "").toLowerCase().includes(q)
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
    <div className="px-3.5 mb-0.5 text-sm font-medium text-base-400">
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
}

const SearchSuggestionItem = ({ path, label }: SearchSuggestionItemProps) => {
  return (
    <Link
      href={path}
      className="flex items-center px-3 py-1 font-medium text-base-600 hover:bg-base-200 transition-colors rounded-sm"
    >
      <IconFile size={20} className="mr-3" />
      {label}
    </Link>
  );
};
