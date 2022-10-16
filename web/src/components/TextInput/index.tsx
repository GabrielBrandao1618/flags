import { ReactNode, InputHTMLAttributes, ButtonHTMLAttributes } from "react";

import {clsx} from 'clsx';

interface TextInputWrapperProps {
  children: ReactNode;
  className?: string;
}
function TextInputWrapper({children, className}: TextInputWrapperProps){
  return (
    <div className={clsx(
      'flex bg-gray-800 h-12 w-full overflow-hidden rounded',
      className
    )}>
      {children}
    </div>
  );
}

interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}
function TextInputInput({...props}:TextInputInputProps) {
  return (
    <input 
      className="outline-none px-2 py-1 placeholder:text-gray-300 flex-1 text-white border-none bg-transparent"
      {...props}
    />
  );
}

interface TextInputButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}
function TextInputButton({className, ...props}: TextInputButtonProps){
  return (
    <button
      className={clsx(
        'bg-blue-900 text-white font-bold block h-full px-3',
        className
      )}
      {...props}
    />
  )
}

export const TextInput = {
  Root: TextInputWrapper,
  Input: TextInputInput,
  Button: TextInputButton
}