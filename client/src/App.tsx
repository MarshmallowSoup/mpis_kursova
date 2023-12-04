import React from 'react';
import './App.less';
import RoutesComponent from './Routes/routes';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Content from './components/Content/Content';

const App: React.FC = () => (
  <Router>
    <Layout>
      <Sidebar />
      <Content>
        <RoutesComponent />
      </Content>
    </Layout>
  </Router>
);

export default App;