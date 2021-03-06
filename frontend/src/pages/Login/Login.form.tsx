import Button from '@material-ui/core/Button';
import {
  Field,
  Form,
  InjectedFormikProps,
} from 'formik';
import React from 'react';

import Input from 'components/Input';

import { MessageContainer, Token } from './Login.form.style';
import { FormValues } from './service';

interface InnerLoginFormProps {
  errors: {
    username?: string;
    password?: string;
  };
  isSubmitting: boolean;
  touched: {
    username?: boolean;
    password?: boolean;
  };
  login: (values: FormValues) => void;
  token?: string;
}

const InnerLoginForm: React.FunctionComponent<InjectedFormikProps<InnerLoginFormProps, FormValues>> = props => {
  const { errors, touched, isSubmitting, token } = props;

  return (
    <Form>
      <div>
        <Field
          type="text"
          name="username"
          label="Username"
          component={Input}
          error={touched.username && errors.username}
        />
      </div>
      <div>
        <Field
          type="password"
          name="password"
          label="Password"
          component={Input}
          error={touched.password && errors.password}
        />
      </div>
      <Button
        type="submit"
        color="primary"
        size="medium"
        disabled={isSubmitting}
        variant="outlined"
      >
        Connect
      </Button>
        {!token
          ? null
          : <MessageContainer>
            <span>
              Félicitations, vous êtes bien connectés avec le token :
            </span>
            <br/>
            <Token>
              {token}
            </Token>
          </MessageContainer>
        }
    </Form>
  );
};

export default InnerLoginForm;
