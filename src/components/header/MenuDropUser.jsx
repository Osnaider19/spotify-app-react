import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import "./menudrop.css";
import { BiSolidUserCircle, BiCheck } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSession } from "../../redux/facture/auth/authSlice";
export const MenuDropUser = () => {
  const { infoUser } = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  const navegation = useNavigate();
  const handelSesion = () => {
    dispatch(setSession());
    navegation("/login");
  };
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
            <img
              src={infoUser.image.url}
              alt={infoUser.name}
              className="w-full h-full object-cover"
            />
          </div>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item className="DropdownMenuItem">
            Cuenta <div className="RightSlot">⌘+T</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            Perfil <div className="RightSlot">⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="DropdownMenuSeparator" />
          <DropdownMenu.CheckboxItem className="DropdownMenuCheckboxItem">
            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
              <BiCheck />
            </DropdownMenu.ItemIndicator>
            peferencias <div className="RightSlot">⌘+B</div>
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem className="DropdownMenuCheckboxItem">
            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
              <BiCheck />
            </DropdownMenu.ItemIndicator>
            cambiate a Premium
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.Item
            className="DropdownMenuItem"
            onClick={handelSesion}
          >
            Cerrar sesión <div className="RightSlot">⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
