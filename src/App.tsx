import React from 'react';
import { Box, Text, LinkContext, Link } from '@island.is/ui';
import './App.css';

function App() {
  return (
    <div className="App-container">
      <div className="App-main">
        <LinkContext.Provider
          value={{
            linkRenderer: (href, children) => (
              <Link
                href={href}
                color="blue400"
                underline="normal"
                underlineVisibility="always"
              >
                {children}
              </Link>
            ),
          }}
        >
          <Text variant="h1">
            Welcome to <a href="https://ui.devland.is">Ísland UI</a>.
          </Text>
        </LinkContext.Provider>

        <Box display="flex" flexDirection="column" marginTop={5}>
          <Box
            background="blue100"
            padding={4}
            borderRadius="large"
            marginBottom={3}
          >
            <Link href="https://ui.devland.is">
              <Text color="blue400" variant="h3">
                Storybook &rarr;
              </Text>

              <Text>
                Find in-depth information about the Ísland UI library.
              </Text>
            </Link>
          </Box>

          <Box background="blue100" padding={4} borderRadius="large">
            <Link href="https://docs.devland.is">
              <Text color="blue400" variant="h3">
                GitBook &rarr;
              </Text>

              <Text>Learn more about the Ísland.is project!</Text>
            </Link>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default App;
