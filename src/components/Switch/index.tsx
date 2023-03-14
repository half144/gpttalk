import { useGptStore } from "@/store/useGptStore";
import { useState } from "react";
import * as S from "./styles";

interface SwitchProps {
  onChange?: (params: boolean) => void;
  isActive?: boolean;
}

const Switch = ({ onChange = () => {}, isActive }: SwitchProps) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <S.Container
      onClick={() => {
        active ? onChange(true) : onChange(false);
        setActive((active) => !active);
      }}
    >
      <S.Ball
        initial={{ x: 0 }}
        animate={{ right: active ? 20 : 2 }}
        transition={{
          duration: 0.2,
          type: "spring",
          stiffness: 300,
          damping: 22,
        }}
        active={active}
      />
    </S.Container>
  );
};

export default Switch;
