// @ts-nocheck
// React
function stryNS_9fa48() {
  var g = new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});

  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }

  function retrieveNS() {
    return ns;
  }

  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}

stryNS_9fa48();

function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });

  function cover() {
    var c = cov.static;

    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }

    var a = arguments;

    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }

  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}

function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();

  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }

      return true;
    }

    return false;
  }

  stryMutAct_9fa48 = isActive;
  return isActive(id);
}

import React, { forwardRef, ForwardRefRenderFunction, useImperativeHandle } from 'react'; // Mantine

import { TextInput, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
export interface CustomFormFieldProps {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: {
    value: boolean;
    message: string;
  };
}
type SubmitType = string | number | null | undefined;
export interface CustomFormHandleProps {
  onsubmit: () => {
    [key: string]: SubmitType;
  } | null | Record<string, unknown>;
}
export interface ValidateProps {
  [key: string]: (value: string | number) => string | null;
}
interface CustomFormProps {
  initialValues: object;
  fields: Array<CustomFormFieldProps>;
  validate: object;
}

const CustomForm: ForwardRefRenderFunction<CustomFormHandleProps, CustomFormProps> = ({
  initialValues = {},
  fields,
  validate
}, ref) => {
  if (stryMutAct_9fa48("16")) {
    {}
  } else {
    stryCov_9fa48("16");
    const form = useForm(stryMutAct_9fa48("17") ? {} : (stryCov_9fa48("17"), {
      initialValues,
      validate
    }));

    const getField = (field: CustomFormFieldProps) => {
      if (stryMutAct_9fa48("18")) {
        {}
      } else {
        stryCov_9fa48("18");
        let ret = null;

        switch (field.type) {
          case stryMutAct_9fa48("20") ? "" : (stryCov_9fa48("20"), 'text'):
            if (stryMutAct_9fa48("19")) {} else {
              stryCov_9fa48("19");
              ret = <TextInput data-testid={field.label} required={stryMutAct_9fa48("23") ? field.required?.value && false : stryMutAct_9fa48("22") ? false : stryMutAct_9fa48("21") ? true : (stryCov_9fa48("21", "22", "23"), (stryMutAct_9fa48("24") ? field.required.value : (stryCov_9fa48("24"), field.required?.value)) || (stryMutAct_9fa48("25") ? true : (stryCov_9fa48("25"), false)))} label={field.label} placeholder={stryMutAct_9fa48("28") ? field.placeholder && field.label : stryMutAct_9fa48("27") ? false : stryMutAct_9fa48("26") ? true : (stryCov_9fa48("26", "27", "28"), field.placeholder || field.label)} {...form.getInputProps((field.name as never))} />;
              break;
            }

          case stryMutAct_9fa48("30") ? "" : (stryCov_9fa48("30"), 'password'):
            if (stryMutAct_9fa48("29")) {} else {
              stryCov_9fa48("29");
              ret = <PasswordInput data-testid={field.label} label={field.label} placeholder={stryMutAct_9fa48("33") ? field.placeholder && field.label : stryMutAct_9fa48("32") ? false : stryMutAct_9fa48("31") ? true : (stryCov_9fa48("31", "32", "33"), field.placeholder || field.label)} {...form.getInputProps((field.name as never))} />;
              break;
            }

          default:
            if (stryMutAct_9fa48("34")) {} else {
              stryCov_9fa48("34");
              break;
            }

        }

        return ret;
      }
    };

    const onsubmit = (): {
      [key: string]: SubmitType;
    } | null => {
      if (stryMutAct_9fa48("35")) {
        {}
      } else {
        stryCov_9fa48("35");
        form.validate();

        if (stryMutAct_9fa48("39") ? Object.keys(form.errors).length <= 0 : stryMutAct_9fa48("38") ? Object.keys(form.errors).length >= 0 : stryMutAct_9fa48("37") ? false : stryMutAct_9fa48("36") ? true : (stryCov_9fa48("36", "37", "38", "39"), Object.keys(form.errors).length > 0)) {
          if (stryMutAct_9fa48("40")) {
            {}
          } else {
            stryCov_9fa48("40");
            return null;
          }
        }

        return (form.values as {
          [key: string]: SubmitType;
        });
      }
    };

    useImperativeHandle(ref, stryMutAct_9fa48("41") ? () => undefined : (stryCov_9fa48("41"), () => stryMutAct_9fa48("42") ? {} : (stryCov_9fa48("42"), {
      onsubmit
    })));
    return <form>
      {fields.map((field: CustomFormFieldProps, index: number) => {
        if (stryMutAct_9fa48("43")) {
          {}
        } else {
          stryCov_9fa48("43");
          return <div key={stryMutAct_9fa48("44") ? `` : (stryCov_9fa48("44"), `field-${field.name}`)}>{getField(field)}</div>;
        }
      })}
    </form>;
  }
};

export default forwardRef(CustomForm);