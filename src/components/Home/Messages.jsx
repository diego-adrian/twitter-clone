import { useState, useEffect } from 'react';
import { List, Placeholder, Image, Grid, Search } from 'semantic-ui-react';
const Messages = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setReady(!ready);
    }, 500);
  }, []);
  return (
    <>
    { ready ? (
      <Grid>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Search
            loading
            onResultSelect={(e, data) => {}}
            onSearchChange={() => {}}
          />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <List divided relaxed>
            <List.Item>
              <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
              <List.Content>
                <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                <List.Description as='a'>Updated 10 mins ago</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
              <List.Content>
                <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
                <List.Description as='a'>Updated 22 mins ago</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
              <List.Content>
                <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                <List.Description as='a'>Updated 34 mins ago</List.Description>
              </List.Content>
            </List.Item>
          </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ) : (
      [...Array(5).keys()].map(item => (
        <Placeholder key={item}>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
        </Placeholder>
      ))
    )}
    </>
  )
};

export default Messages;