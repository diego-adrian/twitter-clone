import { useState, useEffect } from 'react';
import {Header, Image, Divider, List, Transition } from 'semantic-ui-react';
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(!visible);
    }, 500);
  },  []);
  return (
    <>
    <Header as='h3' className="flex flex-row flex-align-center flex-justify-start mb-0">
      <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' className="mt-2"/> Adrian
    </Header>
    <Divider className="mt-1 mb-1"/>
      <List horizontal className="flex flex-row flex-no-wrap overflow-x avatar--height">
        {
          [...Array(10).keys()].map(item => (
            <List.Item key={item} className="item--avatar">
              <Transition visible={visible} animation="scale" duration={500}>
                <Image
                  avatar
                  className="avatar--image"
                  src='https://react.semantic-ui.com/images/avatar/small/tom.jpg'
                />
              </Transition>
            </List.Item>
          ))
        }
      </List>
    <Divider className="mt-1 mb-1"/>
    </>
  )
}

export default Navbar;