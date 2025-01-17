import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function WebsocketConnector(props) {
  const { connectToWs, isConnected, onDisconnectClick, onSend } = props;

  return (
    <CardGroup className="WebsocketConnector-CardGroup">
      <Card className="WebsocketConnector-Card">
        <Form onSubmit={connectToWs} className="WebsocketConnector-Form">
          <Form.Group className="mb-3" controlId="formWebsocketUrl">
            <Form.Label className="WebsocketConnector-FormLabel">Enter Websocket URL</Form.Label>
            <Form.Control type="text" placeholder="Websocket URL" />
            <Form.Text className="WebsocketConnector-FormText">
              <p className="WebsocketConnector-P1">Enter your Websocket URL:</p>
              <p className="WebsocketConnector-P2">wss://API_ID.execute-api.AWS_Region.amazonaws.com/STAGE_NAME'.</p>
              <p>Find this information in SAM deployment output under key WebSocketURL.</p>
            </Form.Text>
          </Form.Group>
          <Button disabled={isConnected} variant="primary" type="submit">
            Connect
          </Button>
          <Button className="WebsocketConnector-Disconnect-Button" onClick={onDisconnectClick} disabled={!isConnected} variant="secondary">
            Disconnect
          </Button>
          <Button className="WebsocketConnector-Disconnect-Button" onClick={onSend} disabled={!isConnected} variant="secondary">
            Send
          </Button>
        </Form>
      </Card>
    </CardGroup>
  );
}

export default WebsocketConnector;