'use client';
import DragDrop from './DragDrop';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

export default function Home() {
  const isTouchDevice =
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: coarse)').matches;

  const backendForDnD = isTouchDevice ? TouchBackend : HTML5Backend;

  return (
    <DndProvider backend={backendForDnD} options={{ enableMouseEvents: true }}>
      <main className='flex min-h-screen flex-col items-center space-y-4 bg-black overflow-y-hidden'>
        <DragDrop />
      </main>
    </DndProvider>
  );
}
