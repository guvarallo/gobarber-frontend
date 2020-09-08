import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #86898b;
  margin-top: 8px;

  display: flex;
  align-items: center;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #fff;
    &::placeholder {
      color: #86898b;
    }
  }

  svg {
    margin-right: 16px;
    color: #86898b;
  }
`;