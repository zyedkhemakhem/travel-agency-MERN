import React from 'react';
import { useParams } from 'react-router-dom';
import Accom from '../components/Accom';
import Elnavbarjdida from '../components/Elnavbarjdida';
import Footer from '../components/Footer';

function AccomDetails() {
  const { name } = useParams();

  return (
    <div className="p-4 md:p-10 lg:p-16 bg-gray-100">
        <Elnavbarjdida />
      <Accom name={name} />
      <Footer />
    </div>
  );
}

export default AccomDetails;