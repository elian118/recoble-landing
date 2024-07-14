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
    <div className="flex flex-col gap-2">
      <input
        ref={ref}
        name={name}
        className="p-4 bg-slate-50 rounded-md border-none disabled:bg-base-100"
        {...rest}
      />
      {errors?.map((err, idx) => (
        <span key={idx} className="text-error font-medium text-sm">
          {err}
        </span>
      ))}
    </div>
  );
};

export default forwardRef(_Input);
