import React, { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

type InputProps = {
  name: string; // 필수속성화
  errors?: string[];
};

export const _Input = (
  { name, errors = [], ...rest }: InputProps & InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <div className="flex flex-col gap-1">
      <input
        ref={ref}
        name={name}
        className="px-2 py-2 sm:px-4 sm:py-4 bg-slate-50 rounded-md border-none disabled:bg-base-100"
        {...rest}
      />
      {errors?.map((err, idx) => (
        <span key={idx} className="text-error font-medium text-sm px-2">
          {err}
        </span>
      ))}
    </div>
  );
};

export default forwardRef(_Input);
