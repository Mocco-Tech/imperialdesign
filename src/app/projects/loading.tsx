'use client';

import { TailSpin } from 'react-loader-spinner';

function LoadingPage() {
  return (
    <div className="w-screen h-dvh flex items-center justify-center bg-white/80">
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#047857"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default LoadingPage;
