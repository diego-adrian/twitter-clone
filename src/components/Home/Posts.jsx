import { useState, useEffect } from 'react'
import { Feed, Comment, Icon, Placeholder } from 'semantic-ui-react'

const events = [
  {
    date: '1 Hour Ago',
    image: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
    meta: '4 Likes',
    summary: 'Elliot Fu added you as a friend',
  },
  {
    date: '4 days ago',
    image: 'https://react.semantic-ui.com/images/avatar/small/helen.jpg',
    meta: '1 Like',
    summary: 'Helen Troy added 2 new illustrations',
    extraImages: [
      'https://react.semantic-ui.com/images/wireframe/image.png',
      'https://react.semantic-ui.com/images/wireframe/image-text.png',
    ],
  },
  {
    date: '3 days ago',
    image: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg',
    meta: '8 Likes',
    summary: 'Joe Henderson posted on his page',
    extraText:
      "Ours is a life of constant reruns. We're always circling back to where we'd we started.",
  },
  {
    date: '4 days ago',
    image: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg',
    meta: '41 Likes',
    summary: 'Justen Kitsune added 2 new photos of you',
    extraText:
      'Look at these fun pics I found from a few years ago. Good times.',
    extraImages: [
      'https://react.semantic-ui.com/images/wireframe/image.png',
      'https://react.semantic-ui.com/images/wireframe/image-text.png',
    ],
  },
]

const Posts = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setReady(!ready);
    }, 500);
  }, []);
  return (
    <>
      { ready ? (
        <>
          <Feed events={events} />
          <Comment.Group>
            <Comment>
              <Comment.Avatar circular src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
              <Comment.Content>
                <Comment.Author>Tom Lukic</Comment.Author>
                <Comment.Text>
                  This will be great for business reports. I will definitely download
                  this.
                </Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                  <Comment.Action>Save</Comment.Action>
                  <Comment.Action>Hide</Comment.Action>
                  <Comment.Action>
                    <Icon name='expand' />
                    Full-screen
                  </Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
            </>
      ): (
        [...Array(3).keys()].map(item => (
          <Placeholder key={item}>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        ))
      )}
    </>
  )
}


export default Posts
