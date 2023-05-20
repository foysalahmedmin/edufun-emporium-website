import React from 'react';

const Blog = () => {
    return (
        <section className='py-20 text-black'>
            <div className="container py-10">
                <div className='py-5'>
                    <h1 className='text-center uppercase text-3xl mb-2 font-black font-rancho text-animation'>Questions Ans</h1>
                    <p className='bg-primary border-dotted border-b-4 w-40 mx-auto mb-2'></p>
                    <p className='bg-secondary h-[2px] w-24 mx-auto'></p>
                </div>
                <div className=" ">
                    <div>
                        <div tabIndex={0} className="collapse collapse-plus border border-base-300 rounded-box my-3 bg-primary bg-opacity-25">
                            <div className="collapse-title text-2xl font-rancho">
                                What is an access token and refresh token? How do they work and where should we store them on the client-side?
                            </div>
                            <div className="collapse-content">
                                <p className='p-5'>
                                    An access token is a credential that allows a user to access specific resources, while a refresh token is used to obtain a new access token when the current one expires.
                                    <br />
                                    Access tokens are included in requests to access protected resources, and the server verifies their validity and expiration. Refresh tokens are securely stored and used to obtain new access tokens without reauthentication.
                                    <br />
                                    On the client-side, access tokens are typically stored in browser storage mechanisms such as local storage or session storage. Refresh tokens, however, should be securely stored, such as in an HTTP-only cookie or a secure storage solution provided by the operating system or framework.
                                </p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-base-300 rounded-box my-3 bg-primary bg-opacity-25">
                            <div className="collapse-title text-2xl font-rancho">
                                Compare SQL and NoSQL databases?
                            </div>
                            <div className="collapse-content">
                                <p>
                                    SQL databases and NoSQL databases are two different types of database management systems with distinct characteristics
                                    <br /><br />
                                    SQL databases are relational, structured, and use predefined schemas. They ensure data integrity and support complex queries with SQL.
                                    <br />
                                    NoSQL databases are non-relational, flexible, and handle unstructured data. They prioritize scalability and availability over strict consistency. The choice depends on data structure and scalability needs.
                                </p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-base-300 rounded-box my-3 bg-primary bg-opacity-25">
                            <div className="collapse-title text-2xl font-rancho">
                                What is express js? What is Nest Js ?
                            </div>
                            <div className="collapse-content">
                                <p>
                                    Express.js is a minimalist web application framework for Node.js. It provides a simple and flexible way to build web applications and APIs by providing a set of basic functionalities for handling HTTP requests and responses.
                                    <br /><br />
                                    Nest.js is a Node.js framework that adds structure and features to build scalable server-side applications. It incorporates concepts from Angular and provides features like dependency injection, modular architecture, and strong typing with TypeScript.
                                </p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-base-300 rounded-box my-3 bg-primary bg-opacity-25">
                            <div className="collapse-title text-2xl font-rancho">
                                What is MongoDB aggregate and how does it work ?
                            </div>
                            <div className="collapse-content">
                                <p>
                                MongoDB is aggregate function is used for advanced data processing. 
                                <br />
                                It works by defining a pipeline of stages that are executed sequentially on the documents. Each stage performs a specific operation, such as filtering, grouping, projecting, sorting, or limiting the data. The result is a new set of documents reflecting the outcome of the pipeline stages. The aggregate function allows for flexible and powerful data transformations and aggregations in MongoDB.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;