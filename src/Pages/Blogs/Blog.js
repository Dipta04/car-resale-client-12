import React from 'react';

const Blog = () => {
    return (
        <div className='mx-10 my-10'>
            <h1 className='font-bold text-lg'>What are the different ways to manage a state in a React application?</h1>
            <p>There are four main types of state you need to properly manage in your React apps:

                Local state,
                Global state,
                Server state,
                URL state</p>
            <p>Local state:- Local state is most often managed in React using the useState hook.</p>
            <p>Global state:- Global state are usually managed by using built-in React features like the Context API to manage their state..</p>
            <p>Server state:- There are tools such as SWR and React Query that make managing server state much easier.</p>
            <p className='mb-5'>URL state:- URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname.If you are using React Router, you can get all the information you need using useHistory or useLocation.</p>
            <h1 className='font-bold text-lg'>How does prototypical inheritance work</h1>
            <p className='mb-5'> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
            <h1 className='font-bold text-lg'>What is a unit test? Why should we write unit tests?</h1>
            <p className='mb-5'>Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p>
            <h1 className='font-bold text-lg'>React vs. Angular vs. Vue?</h1>
            <p className='mb-5'>When comparing Vue vs React, Vue has a huge number of watchers, stars, and forks. This shows Vues popularity among users and its value compared to React. However, the number of contributors for Vue are lower than Angular and React.
                One possible explanation is that Vue is driven entirely by the open source community, whereas Angular and React have a significant share of Google and Facebook employees contributing to the repositories.
                From the statistics, all three projects show significant development activity, and this is surely going to continue in the future.</p>
        </div>
    );
};

export default Blog;