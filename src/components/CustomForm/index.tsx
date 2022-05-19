// React
import React, { forwardRef, ForwardRefRenderFunction, Ref, useImperativeHandle } from 'react';

// Mantine
import { TextInput, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export interface CustomFormFieldProps {
  type: string,
  name: string,
  label: string,
  placeholder: string,
  required: {
    value: boolean,
    message: string
  }
}

type SubmitType = string | number | null | undefined;

export interface CustomFormHandleProps {
  onsubmit: () =>  {[key: string] : SubmitType} | null | Record<string, unknown>,
}

export interface ValidateProps {
  [key: string] : (value: string | number) => string | null
}

interface CustomFormProps {
  initialValues: object;
  fields: Array<CustomFormFieldProps>;
  validate: object
}

const CustomForm: ForwardRefRenderFunction<CustomFormHandleProps, CustomFormProps> = ({
  initialValues = {},
  fields,
  validate
}, ref) => {

  const form = useForm({
    initialValues,
    validate
  });

  const getField = (field: CustomFormFieldProps) => {
    let ret = null;
    switch(field.type) {
      case 'text':
        ret = <TextInput
          data-testid={field.label}
          required={field.required?.value || false}
          label={field.label}
          placeholder={field.placeholder || field.label}
          {...form.getInputProps(field.name as never)}
        />;
        break;
      case 'password':
        ret = <PasswordInput
          data-testid={field.label}
          label={field.label}
          placeholder={field.placeholder || field.label}
          {...form.getInputProps(field.name as never)}
        />;
        break;
      default:
        break;
    }

    return ret;
  };

  const onsubmit = (): {[key: string] : SubmitType} | null => {
    form.validate();
    if (Object.keys(form.errors).length > 0) {
      return null;
    }
    return form.values as {[key: string] : SubmitType};
  };

  useImperativeHandle(ref, () => ({
    onsubmit
  }));

  return (
    <form>
      {
        fields.map((field: CustomFormFieldProps, index: number) => {
          return (<div key={`field-${field.name}`}>{getField(field)}</div>);
        })
      }        
    </form>
  );
};


export default forwardRef(CustomForm);

