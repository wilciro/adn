// React
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react';

// Mantine
import {
  TextInput,
  PasswordInput,
  Select,
  SelectItem,
  NumberInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { DatePicker, TimeInput } from '@mantine/dates';
import dayjs from 'dayjs';

export interface CustomFormFieldProps {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  data?: (string | SelectItem)[];
  required?: {
    value: boolean;
    message: string;
  };
}

type SubmitType = string | number | null | undefined;

export interface CustomFormHandleProps {
  onsubmit: () =>
    | { [key: string]: SubmitType }
    | null
    | Record<string, unknown>;
  reset: () => void;
}

export interface ValidateProps {
  [key: string]: (value: string | number) => string | null;
}

interface CustomFormProps {
  initialValues: object;
  fields: Array<CustomFormFieldProps>;
  validate: object;
}

const CustomForm: ForwardRefRenderFunction<
  CustomFormHandleProps,
  CustomFormProps
> = ({ initialValues = {}, fields, validate }, ref) => {
  const form = useForm({
    initialValues,
    validate,
  });

  const getField = (field: CustomFormFieldProps) => {
    let ret = null;
    switch (field.type) {
      case 'text':
        ret = (
          <TextInput
            data-testid={field.name}
            required={field.required?.value || false}
            label={field.label}
            placeholder={field.placeholder || field.label}
            {...form.getInputProps(field.name as never)}
          />
        );
        break;
      case 'number':
        ret = (
          <NumberInput
            data-testid={field.name}
            required={field.required?.value || false}
            label={field.label}
            placeholder={field.placeholder || field.label}
            {...form.getInputProps(field.name as never)}
          />
        );
        break;
      case 'password':
        ret = (
          <PasswordInput
            data-testid={field.name}
            required={field.required?.value || false}
            label={field.label}
            placeholder={field.placeholder || field.label}
            {...form.getInputProps(field.name as never)}
          />
        );
        break;
      case 'date':
        ret = (
          <DatePicker
            dropdownType="modal"
            data-testid={field.name}
            required={field.required?.value || false}
            label={field.label}
            placeholder={field.placeholder || field.label}
            {...form.getInputProps(field.name as never)}
            minDate={dayjs(new Date()).startOf('month').add(5, 'days').toDate()}
            excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
          />
        );
        break;
      case 'time':
        ret = (
          <TimeInput
            format="12"
            data-testid={field.name}
            required={field.required?.value || false}
            label={field.label}
            placeholder={field.placeholder || field.label}
            {...form.getInputProps(field.name as never)}
          />
        );
        break;
      case 'select':
        ret = (
          <Select
            data-testid={field.name}
            required={field.required?.value || false}
            label={field.label}
            placeholder={field.placeholder || field.label}
            {...form.getInputProps(field.name as never)}
            data={field.data || []}
          />
        );
        break;
      default:
        break;
    }

    return ret;
  };

  const onsubmit = (): { [key: string]: SubmitType } | null => {
    const valid = form.validate();
    if (valid.hasErrors) {
      return null;
    }
    return form.values as { [key: string]: SubmitType };
  };

  const reset = (): void => {
    form.setValues(initialValues);
  };

  useImperativeHandle(ref, () => ({
    onsubmit,
    reset,
  }));

  return (
    <form>
      {fields.map((field: CustomFormFieldProps, index: number) => {
        return <div key={`field-${field.name}`}>{getField(field)}</div>;
      })}
    </form>
  );
};

export default forwardRef(CustomForm);
