import React, { useEffect } from 'react';
import { CopilotStudioClient, CopilotStudioWebChat } from '@microsoft/agents-copilotstudio-client';

function App() {
  useEffect(() => {
    const client = new CopilotStudioClient({
      botId: '56c84bab-e5a8-f011-bbd2-7c1e5226fe62',
      tenantId: '910a28c8-b581-48f1-b146-81caccfcaebf'
    });

    const directLine = CopilotStudioWebChat.createConnection(client, {
      showTyping: true
    });

    window.WebChat.renderWebChat(
      {
        directLine: directLine,
        userID: 'user1',
        username: 'Bert'
      },
      document.getElementById('webchat')
    );
  }, []);

  return (
    <div className="App">
      <h1>Copilot Studio Agent</h1>
      <div id="webchat" style={{ width: '800px', height: '600px' }}></div>
    </div>
  );
}

export default App;