import Image from "next/image";

export const Logo = () => {
  return (
    <div className="relative h-4 w-24">
      <Image src="/djamla-logo.png" alt="Djamla logo" fill />
    </div>
  );
};
