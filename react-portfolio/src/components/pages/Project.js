import React from 'react';
import imgTextEditor from '../../assets/text-editor.jpg';
import imgTechBlog from '../../assets/tech-blog.jpg';
import imgMagician from '../../assets/magician.jpg'

const styles = {
    textEditor: {
        backgroundImage: `url(${imgTextEditor})`,
    },
    techBlog: {
        backgroundImage: `url(${imgTechBlog})`,
    },
    magician: {
        backgroundImage: `url(${imgMagician})`,
    }
}


function Project() {
    return (
        <section className='container px-4 py-5'>
            <h2 className="pb-2 border-bottom">Projects</h2>
            <div className='row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5'>

                {/* Project 1 - Text Editor */}
                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={styles.textEditor}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Text Editor</h3>
                            <ul className="d-flex justify-content-end list-unstyled mt-auto">
                                <li className="d-flex align-items-center me-3">
                                    <a className='text-reset text-decoration-none' href='https://serene-shelf-95717.herokuapp.com'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-play" viewBox="0 0 16 16">
                                            <path d="M6 10.117V5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43z" />
                                            <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                                        </svg>
                                        <small>App</small>
                                    </a>

                                </li>
                                <li className="d-flex align-items-center">
                                    <a className='text-reset text-decoration-none' href='https://github.com/dark40/text-editor'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-code" viewBox="0 0 16 16">
                                            <path d="M6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0a.5.5 0 1 0-.708.708L10.293 8 8.646 9.646a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                                        </svg>
                                        <small>Code</small>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Project 2 - Tech Blog */}
                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={styles.techBlog}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Tech Blog</h3>
                            <ul className="d-flex justify-content-end list-unstyled mt-auto">
                                <li className="d-flex align-items-center me-3">
                                    <a className='text-reset text-decoration-none' href='https://dry-basin-10920.herokuapp.com/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-play" viewBox="0 0 16 16">
                                            <path d="M6 10.117V5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43z" />
                                            <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                                        </svg>
                                        <small>App</small>
                                    </a>

                                </li>
                                <li className="d-flex align-items-center">
                                    <a className='text-reset text-decoration-none' href='https://github.com/dark40/tech-blog'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-code" viewBox="0 0 16 16">
                                            <path d="M6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0a.5.5 0 1 0-.708.708L10.293 8 8.646 9.646a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                                        </svg>
                                        <small>Code</small>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Project 3 - Fridge Magician */}
                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={styles.magician}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Fridge Magician</h3>
                            <ul className="d-flex justify-content-end list-unstyled mt-auto">
                                <li className="d-flex align-items-center me-3">
                                    <a className='text-reset text-decoration-none' href='https://agile-refuge-93722.herokuapp.com/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-play" viewBox="0 0 16 16">
                                            <path d="M6 10.117V5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43z" />
                                            <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                                        </svg>
                                        <small>App</small>
                                    </a>

                                </li>
                                <li className="d-flex align-items-center">
                                    <a className='text-reset text-decoration-none' href='https://github.com/dark40/fridge-magican'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-code" viewBox="0 0 16 16">
                                            <path d="M6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0a.5.5 0 1 0-.708.708L10.293 8 8.646 9.646a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                                        </svg>
                                        <small>Code</small>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Project;