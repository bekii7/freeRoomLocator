import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import RoomCard from './RoomCard';

const RoomTabs = () => {
  const navClass= "text-black hover:bg-indigo-600 cursor-pointer transition-colors duration-200 data-[state=active]:text-white  data-[state=active]:bg-indigo-600 p-2 w-full " 
  return (
    <Tabs.Root defaultValue="all_class" className=" border-gray-600 border-b-[0.1px]  bg-opacity-80 z-10">
    <Tabs.List className="flex justify-between space-x-4  bg-opacity-20 backdrop-blur-md top-0 sticky z-20 p-2">
      
      <Tabs.Trigger
        value="all_class"
        className={navClass}
      >
        All class
      </Tabs.Trigger>
      <Tabs.Trigger
        value="lecture_class"
        className={navClass}
      >
        Lecture class
      </Tabs.Trigger>
      <Tabs.Trigger
        value="lab_class"
        className={navClass}
      >
        Lab class
      </Tabs.Trigger>
     
    </Tabs.List>
    <Tabs.Content value="all_class" className='relative'>
      <div className="flex flex-wrap gap-4">
        <RoomCard
          name="J7"
          capacity={100}
          features={["Projector", "Audio System", "Smart Board"]}
          onReserve={() => alert("Reserved J7")}
        />
        <RoomCard
          name="J8"
          capacity={35}
          features={["Whiteboard"]}
          onReserve={() => alert("Reserved J8")}
        />
        <RoomCard
          name="J9"
          capacity={45}
          features={["Projector", "Whiteboard"]}
          onReserve={() => alert("Reserved J9")}
        />
      </div>
    </Tabs.Content>
    <Tabs.Content value="lecture_class" className='relative'>
    <div className="flex flex-wrap gap-4">
        <RoomCard
          name="J7"
          capacity={100}
          features={["Projector", "Audio System", "Smart Board"]}
          onReserve={() => alert("Reserved J7")}
        />
    </div>
    </Tabs.Content>
    <Tabs.Content value="lab_class" className='relative'>
    <div className="flex flex-wrap gap-4">
        <RoomCard
          name="J7"
          capacity={100}
          features={["Projector", "Audio System", "Smart Board"]}
          onReserve={() => alert("Reserved J7")}
        />
        <RoomCard
          name="J8"
          capacity={35}
          features={["Whiteboard"]}
          onReserve={() => alert("Reserved J8")}
        />
    </div>
    </Tabs.Content>
  </Tabs.Root>
  );
};

export default RoomTabs;