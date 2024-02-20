import React from 'react';
import { Rnd } from 'react-rnd';

const Box = () => (
  <div
    className="box m-0 pb-10 h-full rounded bg-primary hover:outline-[1px] hover:outline hover:outline-black"
  >
    Hello World
  </div>
);

function TableManager() {
  return (
    <>
      <div
        style={{
          width: '100px',
          height: '100px',
        }}
      >
        <Rnd
          default={{
            x: 150,
            y: 205,
            width: 500,
            height: 190,
          }}
          minWidth={100}
          minHeight={100}
          bounds="window"
        >
          <Box />
        </Rnd>
        <Rnd
          default={{
            x: 150,
            y: 205,
            width: 500,
            height: 190,
          }}
          minWidth={500}
          minHeight={190}
          bounds="window"
        >
          <Box />
        </Rnd>
      </div>
    </>
  );
}

export default TableManager;
