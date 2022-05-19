import { Button, Paper, Space, Text } from "@mantine/core";
import React, { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {hasError: false};
  }

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  /* public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  } */

  public render() {
    const {hasError} = this.state;
    const {children} = this.props;
    if (hasError) {
      return (
        <Container>
          <Paper shadow="xs" p="md">
            <Text>¡Ups! Ocurrió un error mientras navegabas</Text>
            <Text>
              Si este error persite, por favor contacta con soporte, por ahora vuelve al inicio con el siguiente enlace.
            </Text>
            <Space h="md" />
            <Link to="/">
              <Button>Volver al inicio</Button>
            </Link>
          </Paper>
        </Container>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
