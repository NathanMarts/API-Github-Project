import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import React, { useCallback, useRef } from 'react';
import { FiArrowRight, FiUser } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, SVGWrapper } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';

interface FormData {
  nome: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          nome: Yup.string().required('Campo obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({ name: data.nome });

        history.push('/home');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro',
          description:
            'Ocorreu um erro ao busca usuário, cheque o usuário informado.',
        });
      }
    },
    [history, signIn, addToast],
  );

  return (
    <Container>
      <SVGWrapper
        fill="#ffce00"
        className="githubCorner"
        width="140"
        height="140"
        viewBox="0 0 25 25"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </SVGWrapper>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="nome" placeholder="Usuário" icon={FiUser} />
        <Button type="submit">
          Entrar <FiArrowRight size={20} style={{ marginLeft: '10px' }} />
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
