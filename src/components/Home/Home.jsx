import { useState } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import Navbar from './Navbar';
import Posts from './Posts';
import Search from './Search';
import Messages from './Messages';
import './Home.scss';

const Home = () => {
  const [active, setActive] = useState({
    name: 'home',
    component: null
  });

  const Render = () => active.component ? active.component : <Posts/>;

  const handleClickTab = (e, { name, component }) => {
    setActive({
      name,
      component
    });
  };
  
  return (
    <>
      <Navbar/>
      <Render/>
      <div className="items--container">
        <Menu attached='bottom' tabular widths='4'>
          <Menu.Item
            name='home'
            component={<Posts/>}
            active={active.name === 'home'}
            onClick={handleClickTab}
          >
            <Icon name='home'/>
          </Menu.Item>

          <Menu.Item
            name='search'
            component={<Search/>}
            active={active.name === 'search'}
            onClick={handleClickTab}
          >
            <Icon name='search'/>
          </Menu.Item>

          <Menu.Item
            name='notifications'
            component={<Search/>}
            active={active.name === 'notifications'}
            onClick={handleClickTab}
          >
            <Icon name='bell'/>
          </Menu.Item>

          <Menu.Item
            name='messages'
            component={<Messages/>}
            active={active.name === 'messages'}
            onClick={handleClickTab}
          >
            <Icon name='mail'/>
          </Menu.Item>
        </Menu>
      </div>
    </>
  )
};

export default Home;