// React
import React from 'react';

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

interface CustomFormProps {
  initialValues?: object;
  fields: Array<CustomFormFieldProps>
};

export const CustomForm: React.FC<CustomFormProps> = ({
  initialValues = {},
  fields
}) => {

  const form = useForm({
    initialValues
  })

  const getField = (field: CustomFormFieldProps) => {
    let ret = null
    switch(field.type) {
      case "text":
        ret = <TextInput
          required={field.required?.value || false}
          label={field.label}
          placeholder={field.placeholder || field.label}
          {...form.getInputProps(field.name as never)}
        />
        break
      case "password":
        ret = <PasswordInput
          label={field.label}
          placeholder={field.placeholder || field.label}
          {...form.getInputProps(field.name as never)}
        />
        break
      default:
        break
    }

    return ret
  }

  const onSubmit = (values: object) => {
    form.validate()
  }

  return (
    <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
      {
        fields.map((field: CustomFormFieldProps, index: number) => {
          return <div key={`field-${field.name}`}>{getField(field)}</div>
        })
      }        
    </form>
  );
};


CustomForm.defaultProps = {
  initialValues: {}
}