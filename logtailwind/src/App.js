import React from 'react';
import './index.css';
import logo from './logo.jpg';
class App extends React.Component {
  render() {
    return (
      <section class='h-screen'>
        <div className='grid grid-cols-2 divide-x h-full'>
          <div className='g-6 flex h-full flex-wrap items-center justify-center lg:justify-around bg-white'>
            <div className='shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12 bg-white'>
              <img
                src={logo}
                className='object-scale-down h-48 w-full object-center'
                alt='Sample '
              />
              <h1 className='text-center text-black text-2xl font-sans'>
                RAMACHANDRAN
              </h1>
            </div>
          </div>
          <div className='g-6 flex h-full flex-wrap items-center justify-center lg:justify-around bg-neutral-100'>
            <div class='h-3/4 rounded-lg bg-white mb-12 md:mb-0 md:w-9/12 lg:w-5/12 xl:w-5/12 '>
              <form class='  px-6 py-24 bg-white '>
                <div>
                  <h1 className='mb-5 mr-4 text-2xl text-top font-bold  text-neutral-900'>
                    Login
                  </h1>
                </div>
                <div className='relative mb-6' data-te-input-wrapper-init>
                  <label>Email address</label>
                  <input
                    type='text'
                    className='peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 '
                    id='exampleFormControlInput2'
                    placeholder='Email address'
                  ></input>
                </div>
                <div className='relative mb-6' data-te-input-wrapper-init>
                  <label>Password</label>
                  <input
                    type='password'
                    className='peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
                    id='exampleFormControlInput22'
                    placeholder='Password'
                  ></input>
                </div>
                <div class='text-center lg:text-left'>
                  <button className='bg-zinc-200 hover:bg-zinc-300 text-gray-800 font-bold text-base py-2 px-4 rounded-l w-full'>
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
