import React from 'react';

const Blog = () => {
    return (
        <div className="mb-5">
            <h1 className='text-center text-4xl font-bold mb-10 p-10 bg-[#F4F4F4]'>Blogs</h1>
            <div>
                <h1 className="text-center text-4xl font-bold ">Frequently Common <span className="color-gradient">Questions</span></h1>
            </div>
            <div className="my-5 py-2 px-4 md:p-8 rounded-lg bg-[#1111110D]">
                <div className="bg-white rounded-lg p-4 my-2">
                    <h1 className="text-2xl font-bold my-3">1. When should you use context API?</h1>
                    <div className="md:flex md:justify-between md:gap-5">
                        <p className="text-lg font-semibold font-mono">
                            The Context API in React is used for managing the state of an application and passing data down the component tree without the need for props drilling.If you find yourself passing the same props through different levels of your component hierarchy, or if you have a lot of state that needs to be accessed by multiple components, using the Context API can make your code cleaner and more manageable.
                        </p>
                    </div>
                </div>
                <div className="bg-white rounded-lg p-4 my-4">
                    <h1 className="text-2xl font-bold my-3">2. What is a custom hook?</h1>
                    <p className="text-lg font-semibold font-mono">
                        Custom hook is a function in React that allows you to extract common logic from components and reuse it across your application. custom hooks are a powerful tool in React that can help you create reusable and composable code, reduce code duplication, and make your codebase more maintainable.
                    </p>
                </div>
                <div className="bg-white rounded-lg p-4 my-4">
                    <h1 className="text-2xl font-bold my-3">3. What is useRef? How does it work?</h1>
                    <p className="text-lg font-semibold font-mono">
                        Managing side effects such as setting up and tearing down timers, subscriptions, and event listeners. It Integrates with third-party libraries, animates component transitions, update the document title based on state or props, handles user authentication and authorization, handles browser or network events, updates the URL or navigating to a different page, updates global state outside of React.
                    </p>
                </div>
                <div className="bg-white rounded-lg p-4 my-2">
                    <h1 className="text-2xl font-bold my-3">4. What is useMemo? How does it work?</h1>
                    <p className="text-lg font-semibold font-mono">
                    useMemo is a hook in React that allows you to optimize the performance of your functional components by memoizing the results of expensive calculations.The basic idea behind useMemo is that it will only recompute the memoized value when one of its dependencies changes. This can help avoid expensive calculations being repeated unnecessarily on each component render.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;