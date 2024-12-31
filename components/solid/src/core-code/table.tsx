export const solidTableCode = `import {JSX} from "solid-js"

interface TableProps extends JSX.HTMLAttributes<HTMLTableElement> {
}
const Table = (props: TableProps) => (
  <div class="relative w-full overflow-auto">
    <table  class={"w-full caption-bottom text-sm"} {...props} />
  </div>
);

// 
// 
// 
// 
// 

interface TableHeaderProps extends JSX.HTMLAttributes<HTMLTableSectionElement> {
}

const TableHeader = (props: TableHeaderProps) => (
  <thead class={"[&_tr]:border-b"} {...props} />
)

// 
// 
// 
// 
// 
interface TableBodyProps extends JSX.HTMLAttributes<HTMLTableSectionElement> {
}
const TableBody = (props:TableBodyProps) => (
  <tbody class={"[&_tr:last-child]:border-0"} {...props} />
)

// 
// 
// 
// 
// 
interface TableFooterProps extends JSX.HTMLAttributes<HTMLTableSectionElement> {
}
const TableFooter = (props: TableFooterProps) => (
  <tfoot
    class="bg-base-200 pointer-events-none border-t font-medium [&>tr]:last:border-b-0"
    {...props}
  />
);

// 
// 
// 
// 
// 
interface TableRowProps extends JSX.HTMLAttributes<HTMLTableRowElement> {
}

const TableRow = (props: TableRowProps) => (
  <tr
    class={
      "text-base-600 hover:bg-base-100 data-[state=selected]:bg-base-100 border-b transition-colors"
    }
    {...props}
  />
);

// 
// 
// 
// 
// 

interface TableHeadProps extends JSX.ThHTMLAttributes<HTMLTableCellElement> {
}

const TableHead = (props: TableHeadProps) => (
  <th
    class={
      "text-base-700 h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0"
    }
    {...props}
  />
);

// 
// 
// 
// 
// 

interface TableCellProps extends JSX.TdHTMLAttributes<HTMLTableCellElement> {
}

const TableCell = (props: TableCellProps) => (
  <td
    class={"px-4 py-3 align-middle [&:has([role=checkbox])]:pr-0"}
    {...props}
  />
);

// 
// 
// 
// 
// 

interface TableCaptionProps extends JSX.HTMLAttributes<HTMLElement> {
}
const TableCaption =(props:TableCaptionProps) => (
  <caption
    
    class={"text-muted-foreground mt-4 text-sm"}
    {...props}
  />
)

// 
// 
// 
// 
// 

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
`