import { Spinner } from './components/ui/spinner';

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-screen pb-14'>
      <Spinner strokeWidth={0.75} className='text-black size-40' />
    </div>
  );
};

export default Loading;
