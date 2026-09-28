import emailjs from '@emailjs/browser';
import { fakeBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import { PROJECT_INQUIRY_RECIPIENT } from 'models/email/PROJECT_INQUIRY_RECIPIENT';
import { PROJECT_INQUIRY_SUBJECT } from 'models/email/PROJECT_INQUIRY_SUBJECT';
import type { ProjectInquiry } from 'models/email/ProjectInquiry';

const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '';
const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '';
const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '';

const inquiryFieldLabels: Record<keyof ProjectInquiry, string> = {
  name: '姓名',
  company: '公司名称',
  email: '邮箱',
  phone: '联系电话',
  address: '项目地址',
  requirements: '项目需求',
  siteVisitDate: '期望现场踏勘日期',
};

const buildInquiryMessage = (inquiry: ProjectInquiry): string =>
  (Object.keys(inquiryFieldLabels) as (keyof ProjectInquiry)[])
    .map(key => `${inquiryFieldLabels[key]}: ${inquiry[key]}`)
    .join('\n');

/** 邮件发送 API（基于 EmailJS，非标准 REST 故使用 queryFn 包装） */
export const emailApi = createApi({
  reducerPath: 'emailApi',
  baseQuery: fakeBaseQuery<Error>(),
  endpoints: builder => ({
    sendProjectInquiry: builder.mutation<void, ProjectInquiry>({
      queryFn: async inquiry => {
        try {
          await emailjs.send(
            emailjsServiceId,
            emailjsTemplateId,
            {
              subject: PROJECT_INQUIRY_SUBJECT,
              toEmail: PROJECT_INQUIRY_RECIPIENT,
              message: buildInquiryMessage(inquiry),
              ...inquiry,
            },
            emailjsPublicKey,
          );
          return { data: undefined };
        } catch (error) {
          console.error('发送项目咨询邮件失败', error);
          return { error: error instanceof Error ? error : new Error(String(error)) };
        }
      },
    }),
  }),
});

export const { useSendProjectInquiryMutation } = emailApi;
