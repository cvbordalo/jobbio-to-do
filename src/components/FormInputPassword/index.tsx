import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import { useState } from 'react';

interface FormInputPasswordProps {
  type: 'password' | 'confirmPassword';
  register: any;
}

export function FormInputPassword({ type, register }: FormInputPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl>
      <FormLabel>
        {type === 'password' ? 'Password' : 'Confirm Password'}
      </FormLabel>
      <InputGroup>
        <Input
          {...register}
          type={showPassword ? 'text' : 'password'}
          focusBorderColor="blue.300"
        />
        <InputRightElement h={'full'}>
          <Button
            variant={'ghost'}
            onClick={() => setShowPassword(showPassword => !showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}
