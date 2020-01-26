import React from 'react';
import { Link } from 'react-router-dom';

const personList = (props) => {

  const renderList = props.persons.map(person => {
    const id = person.url.slice(21);
    return (
      <li key={id}>
        <Link to={{ pathname: `/${id}`, state: { person: person } }}>
          {person.name}
        </Link>
      </li>
    );
  });

  return (
    <React.Fragment>
      <br />
      <li>
        <strong> People: </strong>
        <ul>
          {renderList}
        </ul>
      </li>
    </React.Fragment>
  );

}

export default personList;