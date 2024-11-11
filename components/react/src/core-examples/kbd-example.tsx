import { Kbd, KbdGroup, KbdSeparator } from "../core/kbd";

export const KbdExample = () => {
  return (
    <KbdGroup>
      <Kbd size="sm">Ctrl</Kbd>
      <KbdSeparator>+</KbdSeparator>
      <Kbd size="sm">Shift</Kbd>
      <KbdSeparator>+</KbdSeparator>
      <Kbd size="sm">V</Kbd>
    </KbdGroup>
  );
};
