import { Prisma } from '@prisma/client';
import { DefaultArgs, GetResult } from '@prisma/client/runtime/binary';

export type FormDataType = {
  clientName: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  phone: FormDataEntryValue | null;
};

export type PostInquiryRes = Prisma.Prisma__recoble_promotionClient<
  GetResult<
    Prisma.$recoble_promotionPayload<DefaultArgs>,
    {
      select: { name: boolean; id: boolean; email: boolean };
      data: { regdtm: string; phone: string; name: string; email: string };
    },
    'create'
  >,
  never,
  DefaultArgs
>;
