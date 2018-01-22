import React from 'react';
import Label from './Label';
import Table from '../container/Table';
import FooterShowMore from './FooterShowMore';
import './componentsStyle/app.css';

const App = () => (
  <div className={'main-block'}>
    <Label /> <Table /> <FooterShowMore />
  </div>
);

export default App;
