export const accordionExampleCode = `import {
  Accordion,
  AccordionItem,
  AccordionItemDetails,
  AccordionItemSummary,
} from "../core/accordion";

export const AccordionExample = () => {
  return (
    <Accordion>
      <AccordionItem value="a">
        <AccordionItemSummary>A</AccordionItemSummary>
        <AccordionItemDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          tenetur!
        </AccordionItemDetails>
      </AccordionItem>

      <AccordionItem value="b">
        <AccordionItemSummary>B</AccordionItemSummary>
        <AccordionItemDetails>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
          consequuntur.
        </AccordionItemDetails>
      </AccordionItem>

      <AccordionItem value="c">
        <AccordionItemSummary>C</AccordionItemSummary>
        <AccordionItemDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          culpa earum, beatae aliquam deserunt ipsum reiciendis necessitatibus
          maxime architecto quod modi delectus nesciunt accusantium sapiente
          minus doloremque expedita dolor laborum quidem esse magni eum adipisci
          optio autem! Quos saepe molestiae vitae consequatur eligendi maxime
          repudiandae? Maxime voluptates assumenda voluptate placeat!
        </AccordionItemDetails>
      </AccordionItem>
    </Accordion>
  );
};
`;
